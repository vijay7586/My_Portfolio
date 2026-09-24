import React from 'react';

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Lightweight markdown-ish rendering without extra dependencies. */
export function FormattedMessage({ text }) {
  const safe = escapeHtml(text);
  const withBold = safe.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  const withCode = withBold.replace(/`([^`]+)`/g, '<code class="rounded bg-elevated/80 px-1 text-[0.9em]">$1</code>');
  const lines = withCode.split('\n');

  return (
    <div className="space-y-2 text-sm leading-relaxed">
      {lines.map((line, index) => {
        const bullet = line.match(/^[-*]\s+(.+)$/);
        if (bullet) {
          return (
            <div key={`${index}-${bullet[1].slice(0, 12)}`} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span dangerouslySetInnerHTML={{ __html: bullet[1] }} />
            </div>
          );
        }
        if (!line.trim()) return <div key={`blank-${index}`} className="h-1" />;
        return <p key={`${index}-${line.slice(0, 12)}`} dangerouslySetInnerHTML={{ __html: line }} />;
      })}
    </div>
  );
}
