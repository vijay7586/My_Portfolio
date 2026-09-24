import { useCallback, useEffect, useState } from 'react';

export function useSpeechInput({ onResult, enabled = true }) {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setSupported(Boolean(SpeechRecognition) && enabled);
  }, [enabled]);

  const stop = useCallback(() => {
    setListening(false);
  }, []);

  const start = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript;
      if (transcript) onResult?.(transcript);
    };

    try {
      recognition.start();
    } catch {
      setListening(false);
    }
  }, [onResult]);

  return { supported, listening, start, stop };
}
