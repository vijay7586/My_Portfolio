const OpenAI = require('openai');
const { buildProfileContext } = require('../knowledge/profile');
const { SYSTEM_PROMPT } = require('./systemPrompt');

const MAX_OUTPUT_TOKENS = 320;
const REQUEST_TIMEOUT_MS = 25000;

function getClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const error = new Error('OPENAI_API_KEY is not configured');
    error.code = 'MISSING_API_KEY';
    throw error;
  }
  return new OpenAI({ apiKey, timeout: REQUEST_TIMEOUT_MS });
}

function getModel() {
  return process.env.OPENAI_MODEL || 'gpt-4o-mini';
}

function extractOutputText(response) {
  if (response?.output_text && String(response.output_text).trim()) {
    return String(response.output_text).trim();
  }

  const parts = [];
  for (const item of response?.output || []) {
    if (item.type !== 'message') continue;
    for (const content of item.content || []) {
      if (content.type === 'output_text' && content.text) {
        parts.push(content.text);
      }
    }
  }
  return parts.join('\n').trim();
}

function detectActions(message, answer) {
  const blob = `${message} ${answer}`.toLowerCase();
  const actions = [];
  if (/(resume|cv)\b/.test(blob)) actions.push({ type: 'resume', label: 'View Resume' });
  if (/(contact|email|linkedin|reach|hire)\b/.test(blob)) {
    actions.push({ type: 'contact', label: 'Contact Me' });
  }
  if (/(experience|temple|capital one|cognizant|role|work)\b/.test(blob)) {
    actions.push({ type: 'experience', label: 'View Experience' });
  }
  if (/(project|built|case study)\b/.test(blob)) {
    actions.push({ type: 'projects', label: 'View Projects' });
  }
  if (/(skill|react|java|python|azure|aws|rag|backend|frontend)\b/.test(blob)) {
    actions.push({ type: 'skills', label: 'View Skills' });
  }

  const unique = [];
  const seen = new Set();
  actions.forEach((action) => {
    if (!seen.has(action.type)) {
      seen.add(action.type);
      unique.push(action);
    }
  });
  return unique.slice(0, 3);
}

async function askPortfolioAssistant(message) {
  const client = getClient();
  const model = getModel();
  const profileContext = buildProfileContext();

  const response = await client.responses.create({
    model,
    temperature: 0.2,
    max_output_tokens: MAX_OUTPUT_TOKENS,
    input: [
      {
        role: 'system',
        content: `${SYSTEM_PROMPT}\n\nVerified portfolio context (JSON):\n${profileContext}`,
      },
      {
        role: 'user',
        content: message,
      },
    ],
  });

  const answer = extractOutputText(response);
  if (!answer) {
    const error = new Error('Empty model response');
    error.code = 'EMPTY_RESPONSE';
    throw error;
  }

  return {
    answer,
    actions: detectActions(message, answer),
  };
}

module.exports = {
  askPortfolioAssistant,
  detectActions,
  getModel,
};
