# Publish Abhiyan Portfolio

This project is ready for one-service deployment on Render. The Node server serves the React production build and exposes the `/api` routes.

## Deploy On Render

1. In Render, choose **New +** then **Blueprint**.
2. Connect this GitHub repository.
3. Render will read `render.yaml`.
4. Fill only the required private values:

```env
MONGO_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/abhiyan_portfolio
ADMIN_PASSWORD=choose-a-private-strong-password
```

`ADMIN_EMAIL` is already set to `admin@abhiyan.dev` in `render.yaml`. You can change it in Render if you want.

5. Deploy.
6. Open Render Shell and seed the database:

```bash
npm run seed --prefix server
```

7. Login at `/admin` using:

```text
Email: admin@abhiyan.dev
Password: the private ADMIN_PASSWORD you entered in Render
```

## Custom Domain

For `https://abhiyan.shrestha.com`, you must control DNS for `shrestha.com`. In Render, open the web service, go to **Settings -> Custom Domains**, add `abhiyan.shrestha.com`, then add the CNAME record Render gives you.
