const API_BASE = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');
const DEFAULT_TIMEOUT_MS = 45000;

const UNAVAILABLE =
  'The portfolio assistant is temporarily unavailable. You can still explore my experience, projects, or contact me directly.';

export function getApiBase() {
  return API_BASE;
}

async function parseJsonSafe(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

export async function askAssistant(message, { signal, onPhase } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

  const onAbort = () => controller.abort();
  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener('abort', onAbort, { once: true });
  }

  try {
    onPhase?.('connecting');
    const response = await fetch(`${API_BASE}/api/assistant`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
      signal: controller.signal,
    });

    onPhase?.('thinking');
    const data = await parseJsonSafe(response);

    if (!response.ok) {
      throw new Error(data.error || UNAVAILABLE);
    }
    if (!data.answer) {
      throw new Error(UNAVAILABLE);
    }
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(UNAVAILABLE);
    }
    throw new Error(error.message || UNAVAILABLE);
  } finally {
    clearTimeout(timeout);
    if (signal) signal.removeEventListener('abort', onAbort);
  }
}

export async function getHealth() {
  try {
    const response = await fetch(`${API_BASE}/health`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return { status: 'down' };
    return response.json();
  } catch {
    return { status: 'down' };
  }
}
