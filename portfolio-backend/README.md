# Portfolio Backend

This is the backend server for the portfolio website, handling contact form submissions and email notifications.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=your-mongodb-connection-string
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

3. Start the development server:
```bash
npm run dev
```

4. Start the production server:
```bash
npm start
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your work!"
}
```

## Deployment

1. Create a MongoDB Atlas account and database
2. Set up environment variables in your hosting platform
3. Deploy the application

## Environment Variables

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `EMAIL_USER`: Gmail address for sending emails
- `EMAIL_PASS`: Gmail app-specific password 