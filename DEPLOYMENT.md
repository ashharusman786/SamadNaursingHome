# Deployment Guide for Samad Nursing Home Website

## Overview
This project consists of:
- **Frontend**: React + Vite + TypeScript (deploy to Vercel)
- **Backend**: Express + TypeScript (deploy to Render)
- **Database**: Currently using in-memory storage (can be upgraded to PostgreSQL)

## Frontend Deployment (Vercel)

### Prerequisites
1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`

### Steps
1. **Navigate to client directory:**
   ```bash
   cd SamadNursingHomeWebsite/client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build locally to test:**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Set the project name as `samad-nursing-home-client`
   - Set the root directory as `./`

5. **Set Environment Variables in Vercel Dashboard:**
   - Go to your project settings
   - Add environment variable:
     - `VITE_API_URL`: Your Render backend URL (e.g., `https://samad-nursing-home-api.onrender.com`)

6. **Redeploy after setting environment variables:**
   ```bash
   vercel --prod
   ```

## Backend Deployment (Render)

### Prerequisites
1. Create a Render account at https://render.com
2. Have your code pushed to a Git repository (GitHub, GitLab, etc.)

### Steps
1. **Navigate to server directory:**
   ```bash
   cd SamadNursingHomeWebsite/server
   ```

2. **Test locally:**
   ```bash
   npm install
   npm run build
   npm start
   ```

3. **Deploy to Render:**
   - Go to Render Dashboard
   - Click "New +" → "Web Service"
   - Connect your Git repository
   - Configure the service:
     - **Name**: `samad-nursing-home-api`
     - **Root Directory**: `server`
     - **Environment**: `Node`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`

4. **Set Environment Variables in Render:**
   - Go to your service settings
   - Add environment variables:
     - `NODE_ENV`: `production`
     - `PORT`: `10000`
     - `CORS_ORIGIN`: Your Vercel frontend URL (e.g., `https://samad-nursing-home-client.vercel.app`)
     - `SESSION_SECRET`: Generate a random string for session security // 628051a55546ef19cd8a88431791f74c

5. **Deploy:**
   - Click "Create Web Service"
   - Render will automatically deploy your service

## Database Setup (Optional - for future use)

### Current Setup
- The application currently uses in-memory storage
- No database is required for basic functionality

### To Upgrade to PostgreSQL:
1. **Create a Neon Database:**
   - Go to https://neon.tech
   - Create a free account
   - Create a new project
   - Copy the connection string

2. **Update Environment Variables:**
   - Add `DATABASE_URL` to your Render environment variables
   - Set it to your Neon connection string

3. **Update Storage Implementation:**
   - Modify `server/storage.ts` to use the real database
   - Run database migrations

## Environment Variables Summary

### Frontend (Vercel)
```
VITE_API_URL=https://your-backend-name.onrender.com
```

### Backend (Render)
```
NODE_ENV=production
PORT=10000
CORS_ORIGIN=https://your-frontend-name.vercel.app
SESSION_SECRET=your-random-secret-string
DATABASE_URL=postgresql://... (optional)
```

## Testing Deployment

### Frontend
- Visit your Vercel URL
- Check that the website loads correctly
- Test language switching
- Verify all components render properly

### Backend
- Test health endpoint: `https://your-backend-name.onrender.com/health`
- Test API endpoints:
  - `GET /api/doctors`
  - `GET /api/reviews`
  - `GET /api/translations`

### Integration
- Verify frontend can communicate with backend
- Check CORS is working correctly
- Test all functionality end-to-end

## Troubleshooting

### Common Issues:
1. **Build Failures:**
   - Check TypeScript errors
   - Verify all dependencies are installed
   - Check environment variables are set correctly

2. **CORS Errors:**
   - Verify `CORS_ORIGIN` is set to the correct frontend URL
   - Check that the backend is accessible

3. **Environment Variables:**
   - Ensure all required variables are set in both Vercel and Render
   - Redeploy after changing environment variables

4. **Database Issues:**
   - If using a real database, verify connection string
   - Check database is accessible from Render

## Support
If you encounter issues:
1. Check the deployment logs in both Vercel and Render
2. Verify all environment variables are set correctly
3. Test locally before deploying
4. Check the health endpoints for backend status 