# CrateLink Website

A Node.js Express application for the CrateLink website with clean URLs.

## Features

- Clean URLs (no .html extensions)
- Responsive design with Tailwind CSS
- Static file serving
- 404 error handling

## Pages

- `/` - Home page (download page)
- `/details` - Product details page
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. For production:

```bash
npm start
```

The server will run on port 3000 by default, or use the PORT environment variable.

## Deployment

This can be deployed to any Node.js hosting platform like:

- DigitalOcean App Platform
- Heroku
- Vercel
- Railway

Make sure to set the PORT environment variable in production.
