# Publish Abhiyan Portfolio

This project is ready for one-service deployment on Render. The Node server serves the React production build and exposes the `/api` routes.

## What You Need

- GitHub account
- Render account
- MongoDB Atlas free database
- Optional Cloudinary account for uploads
- Optional email app password for Nodemailer
- Optional custom domain DNS access

## Deploy On Render

1. Push this folder to a GitHub repository.
2. In Render, choose **New +** then **Blueprint**.
3. Connect the GitHub repository.
4. Render will read `render.yaml`.
5. Fill the secret environment variables:

```env
MONGO_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/abhiyan_portfolio
CLIENT_URL=https://your-render-url.onrender.com
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_email_app_password
MAIL_FROM=Abhiyan Portfolio <your_email@gmail.com>
CONTACT_TO=your_email@gmail.com
ADMIN_EMAIL=admin@abhiyan.dev
ADMIN_PASSWORD=ChangeMe123!
```

6. Deploy.
7. Open Render Shell and run:

```bash
npm run seed --prefix server
```

8. Login:

```text
/admin
admin@abhiyan.dev
ChangeMe123!
```

Change the admin password for real use.

## Custom Domain

For a URL like:

```text
https://abhiyan.shrestha.com
```

You must control DNS for `shrestha.com`.

In Render:

```text
Web Service -> Settings -> Custom Domains -> Add Custom Domain
```

Add:

```text
abhiyan.shrestha.com
```

Then add the DNS record Render shows, usually:

```text
Type: CNAME
Name: abhiyan
Target: your-app.onrender.com
```
