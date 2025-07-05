# Samad Nursing Home Website

A modern, responsive healthcare website built with React, TypeScript, and Express.js featuring glassmorphism design, multilingual support, and smart doctor availability tracking.

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern UI with backdrop blur effects and transparency
- 🌍 **Multilingual Support** - Hindi and English language toggle
- 🧠 **Smart Doctor Availability** - Real-time availability based on current time and schedule
- 💬 **Floating Chatbot** - Interactive healthcare assistant with common Q&A
- 🗺️ **Google Maps Integration** - Embedded location with directions
- 📱 **Responsive Design** - Optimized for mobile and desktop
- 💬 **WhatsApp Integration** - Direct appointment booking via WhatsApp
- ⚡ **Performance Optimized** - Fast loading with code splitting

## 🏗️ Project Structure

```
SamadNursingHomeWebsite/
├── client/                 # React + Vite Frontend (Vercel)
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/         # Page Components
│   │   ├── hooks/         # Custom Hooks
│   │   ├── data/          # Static Data (doctors, translations)
│   │   └── lib/           # Utilities
│   ├── public/            # Static Assets
│   ├── package.json       # Frontend Dependencies
│   ├── vite.config.ts     # Vite Configuration
│   └── vercel.json        # Vercel Deployment Config
├── server/                # Express + TypeScript Backend (Render)
│   ├── index.ts           # Server Entry Point
│   ├── routes.ts          # API Routes
│   ├── package.json       # Backend Dependencies
│   └── tsconfig.json      # TypeScript Config
└── README.md              # This File
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SamadNursingHomeWebsite
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   ```

3. **Start development servers**
   ```bash
   # Start backend server (from root)
   npm run dev
   
   # Start frontend (in new terminal, from client directory)
   cd client && npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## 🚀 Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deployment Overview

**Frontend (Vercel)**:
- Root Directory: `client`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable: `VITE_API_URL=https://your-backend-url.onrender.com`

**Backend (Render)**:
- Root Directory: `server`
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Environment Variables: See `env.snh` file

### Environment Variables

Copy `env.snh` to `.env.snh` and configure:

```bash
# Backend (Render)
NODE_ENV=production
PORT=10000
DATABASE_URL=your_neon_database_url
SESSION_SECRET=your_session_secret
CORS_ORIGIN=https://your-frontend-domain.vercel.app

# Frontend (Vercel)
VITE_API_URL=https://your-backend-domain.onrender.com
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Wouter** - Routing
- **React Query** - Data Fetching

### Backend
- **Express.js** - Web Framework
- **TypeScript** - Type Safety
- **CORS** - Cross-Origin Resource Sharing
- **Drizzle ORM** - Database ORM

## 📱 Features in Detail

### Smart Doctor Availability
- Real-time availability checking based on current time
- Morning and evening shift tracking
- Working days validation
- Next available time display

### Floating Chatbot
- Common healthcare questions
- Hospital timings
- Doctor availability
- Emergency contacts
- Location information

### Glassmorphism Design
- Backdrop blur effects
- Semi-transparent elements
- Soft shadows and borders
- Gradient overlays

### Multilingual Support
- Hindi ↔ English toggle
- Complete translation coverage
- Context-aware translations

## 🔧 Customization

### Adding New Doctors
Edit `client/src/data/doctors.json`:
```json
{
  "id": 3,
  "name": "Dr. New Doctor",
  "specialty": "Specialty",
  "morningHours": "9:00 AM - 2:00 PM",
  "eveningHours": "5:00 PM - 9:00 PM",
  "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "isAvailable": true
}
```

### Adding Translations
Edit `client/src/data/translations.json`:
```json
{
  "en": {
    "new-key": "English text"
  },
  "hi": {
    "new-key": "Hindi text"
  }
}
```

### Customizing Chatbot
Edit `client/src/components/floating-chatbot.tsx`:
```typescript
const FAQ_DATA = {
  'new-question': {
    question: 'Your question?',
    answer: 'Your answer.'
  }
};
```

## 📞 Contact Information

- **Hospital**: Samad Nursing Home
- **Address**: Hengaipur Road, Shahabuddinpur, Bilariyaganj, District Azamgarh, Uttar Pradesh, PIN: 276121
- **Phone**: +91 7860120688
- **WhatsApp**: +91 7860120688
- **Email**: samadnursighome@gmail.com

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🐛 Troubleshooting

### Common Issues

1. **Build fails on Vercel**
   - Ensure all dependencies are in `client/package.json`
   - Check TypeScript errors

2. **CORS errors**
   - Update CORS configuration with correct frontend URL
   - Verify environment variables

3. **Doctor availability not working**
   - Check time format in `doctors.json`
   - Verify day names match exactly

### Support

For technical support or questions, please open an issue on GitHub.
