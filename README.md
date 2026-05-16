# Abhiyan Futuristic Portfolio

A complete full-stack portfolio for **Abhiyan**, combining a programming portfolio, sketch art gallery, digital design showcase, admin dashboard, JWT auth, MongoDB models, Cloudinary upload support, and Nodemailer contact delivery.

## Stack

- Client: React, Vite, Tailwind CSS, Framer Motion, React Router, Axios, Lucide React
- Server: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Cloudinary, Nodemailer

## Setup

1. Install dependencies:

```bash
npm run install:all
```

2. Create environment files:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

3. Update `server/.env` with MongoDB, JWT, Cloudinary, and mail credentials.

4. Seed starter content:

```bash
npm run seed
```

5. Run both apps:

```bash
npm run dev
```

Client runs on `http://localhost:5173`; server runs on `http://localhost:5000`.

## Default Seed Admin

- Email: `admin@abhiyan.dev`
- Password: `ChangeMe123!`

Change these immediately in production.
