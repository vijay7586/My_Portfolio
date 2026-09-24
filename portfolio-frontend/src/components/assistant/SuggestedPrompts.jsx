export const SUGGESTED_PROMPTS = [
  'What does Vijaya specialize in?',
  'Tell me about his AI experience.',
  'What did he work on at Temple?',
  'What did he work on at Capital One?',
  'What are his strongest backend skills?',
  'What is his React Native experience?',
  'What is his education?',
  'What research has he published?',
  'How can I contact him?',
];

const SuggestedPrompts = ({ onSelect, disabled }) => (
  <div className="flex flex-wrap gap-2">
    {SUGGESTED_PROMPTS.map((prompt) => (
      <button
        key={prompt}
        type="button"
        disabled={disabled}
        onClick={() => onSelect(prompt)}
        className="rounded-full border border-line bg-surface/80 px-3 py-1.5 text-left text-xs text-muted transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        {prompt}
      </button>
    ))}
  </div>
);

export default SuggestedPrompts;
