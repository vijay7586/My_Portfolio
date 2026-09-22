# Vijaya Durga Reddy Padala — Portfolio

React portfolio site with an optional Express contact API.

## Frontend

```bash
cd portfolio-frontend
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Backend (optional)

Contact form emails via FormSubmit by default. To use your own API:

```bash
cd portfolio-backend
cp .env.example .env
# Set EMAIL_USER, EMAIL_PASS (Gmail App Password), EMAIL_TO
npm install
npm run dev
```

## Production build

```bash
cd portfolio-frontend
npm run build
```
