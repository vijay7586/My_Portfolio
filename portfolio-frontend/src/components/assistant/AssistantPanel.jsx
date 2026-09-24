import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Bot, Mic, MicOff, Send, Sparkles, X } from 'lucide-react';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { askAssistant, getHealth } from './assistantApi';
import { FormattedMessage } from './FormattedMessage';
import SuggestedPrompts from './SuggestedPrompts';
import { useSpeechInput } from './useSpeechInput';

const WELCOME =
  'Hi — I can help you learn about Vijaya’s experience, projects, skills, education, and background. Try a suggested question or ask your own.';

const AssistantPanel = ({ open, onClose, onOpenResume }) => {
  const trapRef = useFocusTrap(open);
  const reduced = useReducedMotion();
  const listRef = useRef(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState('');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([
    { id: 'welcome', role: 'assistant', content: WELCOME, actions: [] },
  ]);

  const { supported: micSupported, listening, start: startListening } = useSpeechInput({
    onResult: (transcript) => setInput((prev) => (prev ? `${prev} ${transcript}` : transcript)),
    enabled: open,
  });

  // Warm the free-tier backend on open (Render may be sleeping).
  useEffect(() => {
    if (!open) return undefined;
    getHealth();
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, loadingPhase, open]);

  const sendQuestion = async (rawQuestion) => {
    const question = String(rawQuestion || '').trim();
    if (!question || loading) return;
    if (question.length > 500) {
      setError('Please keep questions under 500 characters.');
      return;
    }

    setError('');
    setInput('');
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, role: 'user', content: question }]);
    setLoading(true);
    setLoadingPhase('connecting');

    try {
      const data = await askAssistant(question, {
        onPhase: (phase) => setLoadingPhase(phase),
      });
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: data.answer,
          actions: data.actions || [],
        },
      ]);
    } catch (err) {
      setError(
        err.message ||
          'The portfolio assistant is temporarily unavailable. You can still explore my experience, projects, or contact me directly.'
      );
    } finally {
      setLoading(false);
      setLoadingPhase('');
    }
  };

  const handleAction = (action) => {
    if (action.type === 'resume') {
      onOpenResume?.();
      return;
    }
    // ScrollLink handles section jumps via rendered buttons below
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close assistant overlay"
            className="fixed inset-0 z-[80] bg-black/45 md:bg-black/30"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            ref={trapRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            className="fixed inset-x-0 bottom-0 z-[85] flex h-[min(92vh,720px)] flex-col border-t border-line bg-canvas shadow-glow md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[420px] md:border-l md:border-t-0"
            initial={reduced ? false : { y: 24, opacity: 0, x: 0 }}
            animate={{ y: 0, opacity: 1, x: 0 }}
            exit={reduced ? undefined : { y: 16, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <header className="flex items-start justify-between gap-3 border-b border-line/60 px-4 py-4">
              <div>
                <div className="mb-1 inline-flex items-center gap-2 text-accent">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">Assistant</span>
                </div>
                <h2 id="assistant-title" className="font-display text-xl font-semibold text-ink">
                  Ask About Vijay
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Ask about my experience, projects, skills, or background.
                </p>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 1 && (
                  <button
                    type="button"
                    className="rounded-lg px-2 py-1 text-xs font-medium text-muted hover:text-accent"
                    onClick={() => {
                      setMessages([
                        { id: 'welcome', role: 'assistant', content: WELCOME, actions: [] },
                      ]);
                      setError('');
                    }}
                  >
                    Clear
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="icon-link !h-9 !w-9"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-accent to-accent-soft text-white'
                        : 'border border-line/70 bg-surface/90 text-ink'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted">
                        <Bot className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                        Portfolio assistant
                      </div>
                    )}
                    {message.role === 'assistant' ? (
                      <FormattedMessage text={message.content} />
                    ) : (
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    )}
                    {message.actions?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.actions.map((action) => {
                          if (action.type === 'resume') {
                            return (
                              <button
                                key={action.type}
                                type="button"
                                className="rounded-full border border-line bg-canvas px-3 py-1 text-xs font-semibold text-accent"
                                onClick={() => handleAction(action)}
                              >
                                {action.label}
                              </button>
                            );
                          }
                          const target =
                            action.type === 'contact'
                              ? 'contact'
                              : action.type === 'experience'
                                ? 'experience'
                                : action.type === 'projects'
                                  ? 'projects'
                                  : action.type === 'skills'
                                    ? 'skills'
                                    : null;
                          if (!target) return null;
                          return (
                            <ScrollLink
                              key={action.type}
                              to={target}
                              smooth
                              duration={450}
                              offset={-72}
                              className="cursor-pointer rounded-full border border-line bg-canvas px-3 py-1 text-xs font-semibold text-accent"
                              onClick={onClose}
                            >
                              {action.label}
                            </ScrollLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start" aria-live="polite">
                  <div className="rounded-2xl border border-line/70 bg-surface/90 px-4 py-3 text-sm text-muted">
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-flex gap-1" aria-hidden="true">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent [animation-delay:300ms]" />
                      </span>
                      {loadingPhase === 'connecting'
                        ? 'Connecting to the portfolio assistant…'
                        : 'Thinking…'}
                    </span>
                  </div>
                </div>
              )}

              {messages.length <= 1 && !loading && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    Suggested
                  </p>
                  <SuggestedPrompts disabled={loading} onSelect={sendQuestion} />
                </div>
              )}
            </div>

            <footer className="border-t border-line/60 p-4">
              {error && (
                <div className="mb-3 rounded-xl border border-line bg-surface px-3 py-2" role="alert">
                  <p className="text-xs text-muted">{error}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <ScrollLink
                      to="experience"
                      smooth
                      duration={450}
                      offset={-72}
                      className="cursor-pointer rounded-full border border-line bg-canvas px-3 py-1 text-xs font-semibold text-accent"
                      onClick={onClose}
                    >
                      View Experience
                    </ScrollLink>
                    <ScrollLink
                      to="projects"
                      smooth
                      duration={450}
                      offset={-72}
                      className="cursor-pointer rounded-full border border-line bg-canvas px-3 py-1 text-xs font-semibold text-accent"
                      onClick={onClose}
                    >
                      View Projects
                    </ScrollLink>
                    <ScrollLink
                      to="contact"
                      smooth
                      duration={450}
                      offset={-72}
                      className="cursor-pointer rounded-full border border-line bg-canvas px-3 py-1 text-xs font-semibold text-accent"
                      onClick={onClose}
                    >
                      Contact Me
                    </ScrollLink>
                  </div>
                </div>
              )}
              <form
                className="flex items-end gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  sendQuestion(input);
                }}
              >
                <label htmlFor="assistant-input" className="sr-only">
                  Ask about Vijaya
                </label>
                <textarea
                  id="assistant-input"
                  rows={2}
                  maxLength={500}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault();
                      sendQuestion(input);
                    }
                  }}
                  placeholder="Ask about my experience, projects, or skills…"
                  className="min-h-[44px] flex-1 resize-none rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none transition focus:border-accent"
                />
                {micSupported && (
                  <button
                    type="button"
                    className="icon-link !h-11 !w-11"
                    aria-label={listening ? 'Listening' : 'Start voice input'}
                    onClick={startListening}
                    disabled={loading}
                  >
                    {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </button>
                )}
                <button
                  type="submit"
                  className="btn-primary !rounded-xl !px-4 !py-2.5"
                  disabled={loading || !input.trim()}
                  aria-label="Send question"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default AssistantPanel;
