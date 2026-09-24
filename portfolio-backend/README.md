# Portfolio backend (Express + OpenAI assistant)

Node.js / Express API for contact form + portfolio AI assistant.
The OpenAI API key lives **only** in environment variables (never in the frontend).

## Architecture

```
Browser (GitHub Pages)
  → POST /api/assistant  (this backend on Render)
  → OpenAI Responses API
  → { answer } back to portfolio UI
```

```
portfolio-backend/
  src/
    server.js                 # Express app, CORS, /health, /api/contact
    routes/assistant.js       # POST /api/assistant validation
    services/openaiService.js # OpenAI Responses API client
    services/systemPrompt.js  # Grounded assistant instructions
    knowledge/profile.js      # Single source of truth for portfolio facts
    middleware/rateLimiter.js # 10 req/min on assistant
    middleware/errorHandler.js
  .env.example
  package.json                # "start": "node src/server.js"
```

## Local setup

```bash
cd portfolio-backend
cp .env.example .env
# Edit .env — set OPENAI_API_KEY and OPENAI_MODEL
npm install
npm start
```

Default local port is **5050** (macOS AirPlay often occupies 5000).

Required `.env` values:

| Variable | Example |
|---|---|
| `OPENAI_API_KEY` | your secret key |
| `OPENAI_MODEL` | `gpt-4o-mini` |
| `FRONTEND_URL` | `http://localhost:3000,https://vijay7586.github.io` |
| `PORT` | `5050` |

Optional: `EMAIL_*`, `MONGODB_URI`, `ASSISTANT_RATE_LIMIT`.

## Frontend local

```bash
cd portfolio-frontend
# leave REACT_APP_API_URL empty — CRA proxy → http://localhost:5050
npm start
```

This project uses Create React App, so the env var is `REACT_APP_API_URL` (not Vite’s `VITE_API_URL`).

## Render free web service

1. New **Web Service** → connect the GitHub repo
2. **Root Directory:** `portfolio-backend`
3. **Build command:** `npm install`
4. **Start command:** `npm start`
5. Set env vars in the Render dashboard (do **not** upload `.env`):
   - `OPENAI_API_KEY` = your secret
   - `OPENAI_MODEL` = `gpt-4o-mini` (or another Responses-capable model)
   - `FRONTEND_URL` = `https://vijay7586.github.io`
   - `PORT` is set automatically by Render
6. Deploy and copy the `https://YOUR-SERVICE.onrender.com` URL

## GitHub Pages frontend

Before deploy, set the production API origin:

```bash
cd portfolio-frontend
# Create .env.production (gitignored) or export for one build:
echo 'REACT_APP_API_URL=https://YOUR-SERVICE.onrender.com' > .env.production
npm run deploy
```

CORS origin is `https://vijay7586.github.io` (path `/My_Portfolio` is not part of the origin).

## Knowledge updates

Edit only `src/knowledge/profile.js` → commit → push.
Render redeploys automatically. No API key change needed.

## API key rotation

1. Create a new OpenAI key  
2. Replace `OPENAI_API_KEY` in Render (and local `.env`)  
3. Restart / redeploy if needed  
4. Test the assistant  
5. Revoke the old key  

No source-code changes required.

## Endpoints

- `GET /health` → `{ "status": "ok" }`
- `POST /api/assistant` → `{ "message": "..." }` → `{ "answer": "..." }`
- `POST /api/contact` → existing contact/email flow

## Security notes

- API key only on the backend
- Rate limit: 10 requests / minute / IP on `/api/assistant`
- Message max 500 characters; JSON body limit 32kb
- CORS restricted to known origins
- OpenAI errors / stack traces never returned to the client
- If a key was ever committed or pushed publicly, **revoke it immediately**
