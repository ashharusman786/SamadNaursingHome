# Samad Nursing Website

A full-stack web application with:

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Express.js

## 🌐 Live Deployment Guide (Free Hosting)

### 🔧 1. Setup Environment Variables

Create a `.env` file in both frontend and backend if necessary.

See `.env.example` for guidance.

### 🚀 2. Deployment Steps

#### Frontend: Deploy on **Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo.
3. Set Framework to **Vite**
4. Add env vars if needed (prefixed with `VITE_`)
5. Done!

#### Backend: Deploy on **Render**
1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repo
4. Set build command: `npm install`
5. Start command: `node index.js` or your main server file
6. Add environment variables from `.env.example`

### 🌍 Connect Frontend to Backend
In your frontend `.env`, set:
```bash
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api
```

## 🔁 Future Updates

```bash
# Push changes
git add .
git commit -m "update"
git push
```

Vercel & Render redeploy automatically on push!

## 📁 Project Structure
- `client/` — React frontend
- `server/` — Express backend

---

Made with ❤️ by [You]
