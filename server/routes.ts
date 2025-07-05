import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  });

  // Serve static data
  app.get('/api/doctors', (req, res) => {
    try {
      const doctorsData = [
        {
          "id": 1,
          "name": "Dr. Zeeshan Ahmad",
          "specialty": "General Physician and child specialist",
          "registration": false,
          "email": "Zeeshanshaikh5045@gmail.com",
          "mobile": "+91 7860120688",
          "image": "/images/doctors/doctImage1.jpeg",
          "morningHours": "9:00 AM - 03:00 PM",
          "eveningHours": "5:00 PM - 10:00 PM",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "isAvailable": true
        },
        {
          "id": 2,
          "name": "Dr. Badakhshan Malik",
          "specialty": "Gynecologist",
          "registration": false,
          "email": "imabadakhshanmalik@gmail.com",
          "mobile": "+91 7309886038",
          "image": "/images/doctors/doctImage2.jpeg",
          "morningHours": "08:00 AM - 2:00 PM",
          "eveningHours": "4:00 PM - 09:00 PM",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "isAvailable": true
        }
      ];
      res.json(doctorsData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to load doctors data' });
    }
  });

  app.get('/api/reviews', (req, res) => {
    try {
      const reviewsData = [
        {
          "id": 1,
          "name": "Ramesh Gupta",
          "rating": 5,
          "text": "Excellent medical care and very caring staff. Dr. Zeeshan is very experienced and patient with his treatment.",
          "date": "2 weeks ago",
          "avatar": "R"
        },
        {
          "id": 2,
          "name": "Priyanka Singh",
          "rating": 5,
          "text": "Dr. Badakhshan provided excellent care during my pregnancy. The staff is very supportive and the facilities are clean.",
          "date": "1 month ago",
          "avatar": "P"
        },
        {
          "id": 3,
          "name": "Anita Sharma",
          "rating": 4.2,
          "text": "क्षेत्र के सबसे बेहतरीन बाल रोग विशेषज्ञ। डॉ. ज़ीशान बच्चों के साथ बहुत ही सौम्य व्यवहार करते हैं और बेहतरीन चिकित्सकीय सलाह देते हैं",
          "date": "3 weeks ago",
          "avatar": "A"
        },
        {
          "id": 4,
          "name": "Sunil Kumar",
          "rating": 4.5,
          "text": "Quick and efficient service. The hospital is well-maintained and the staff is professional.",
          "date": "1 week ago",
          "avatar": "S"
        },
        {
          "id": 5,
          "name": "Vikas Parjapati",
          "rating": 5,
          "text": "Dr. Zeeshan's expertise saved my father's life. Highly recommended hospital.",
          "date": "2 months ago",
          "avatar": "V"
        },
        {
          "id": 6,
          "name": "Maya Devi",
          "rating": 5,
          "text": "Affordable healthcare with no compromise on quality. The entire team is dedicated to patient care.",
          "date": "1 month ago",
          "avatar": "M"
        }
      ];
      res.json(reviewsData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to load reviews data' });
    }
  });

  app.get('/api/translations', (req, res) => {
    try {
      const translationsData = {
        "en": {
          "language": "हिंदी",
          "emergency": "Emergency: +91 7860120688",
          "hospital-name": "Samad Nursing Home",
          "tagline": "Your Health, Our Responsibility",
          "nav-home": "Home",
          "nav-doctors": "Doctors",
          "nav-timings": "Timings",
          "nav-gallery": "Gallery",
          "nav-contact": "Contact",
          "hero-title": "Excellence in Care, Trusted by Many",
          "hero-subtitle": "Providing 24x7 quality healthcare with compassion and excellence since 2020",
          "value-happy-patients": "Happy Patients",
          "value-years-experience": "Years Experience",
          "value-emergency-care": "Emergency Care",
          "view-doctors": "View Our Doctors",
          "get-directions": "Get Directions",
          "mission-title": "Our Mission",
          "mission-text": "At Samad Nursing Home, we are committed to providing accessible, affordable, and quality healthcare services. Our experienced medical team works tirelessly to ensure every patient receives personalized care with dignity and respect.",
          "value-compassion": "Compassionate Care",
          "value-compassion-desc": "Treating every patient with empathy and understanding",
          "value-excellence": "Medical Excellence",
          "value-excellence-desc": "Maintaining highest standards of medical practice",
          "value-community": "Community Service",
          "value-community-desc": "Dedicated to serving our local community",
          "doctors-title": "Our Medical Team",
          "doctors-subtitle": "Meet our experienced healthcare professionals",
          "timings-title": "Clinic Timings",
          "timings-subtitle": "Visit us during these hours",
          "hospital-hours": "Hospital Operating Hours",
          "weekdays": "Monday - Saturday",
          "sunday": "Sunday",
          "morning": "Morning",
          "evening": "Evening",
          "tuesday-thursday": "Tue, Thu, Sat",
          "open-now": "🟢 Open Now",
          "closed-now": "🔴 Closed",
          "gallery-title": "Our Facilities",
          "gallery-subtitle": "Take a look at our modern healthcare facilities",
          "reception": "Reception Area",
          "patient-room": "Patient Room",
          "equipment": "Medical Equipment",
          "laboratory": "Laboratory",
          "pharmacy": "Pharmacy",
          "waiting-area": "Waiting Area",
          "reviews-title": "Patient Reviews",
          "reviews-subtitle": "What our patients say about us",
          "contact-title": "Visit Us",
          "contact-subtitle": "Find us easily and get in touch",
          "hospital-address": "Hospital Address",
          "address-english": "Samad Nursing Home\nHengaipur Road, Shahabuddinpur, Bilariyaganj\nDistrict Azamgarh, UttarPradesh, PIN: 276121",
          "get-directions-btn": "Get Directions",
          "contact-info": "Contact Information",
          "main-number": "Main Reception",
          "emergency-number": "Emergency",
          "whatsapp": "WhatsApp",
          "email": "Email",
          "quick-actions": "Quick Actions",
          "chat-whatsapp": "Chat on WhatsApp",
          "call-emergency": "Emergency Call",
          "quick-links": "Quick Links",
          "footer-address": "Bilariyaganj\nDistrict Azamgarh, UttarPradesh\nPIN: 276121",
          "footer-description": "Providing quality healthcare services to our rural community since 2020. Your health is our priority.",
          "copyright": "© 2024 Samad Nursing Home. All rights reserved.",
          "privacy": "Privacy Policy",
          "terms": "Terms of Service"
        },
        "hi": {
          "language": "English",
          "emergency": "आपातकाल: +91 7860120688",
          "hospital-name": "समद नर्सिंग होम",
          "tagline": "आपकी सेहत, हमारी जिम्मेदारी",
          "nav-home": "होम",
          "nav-doctors": "डॉक्टर",
          "nav-timings": "समय",
          "nav-gallery": "गैलरी",
          "nav-contact": "संपर्क",
          "hero-title": "उत्कृष्ट सेवा, जिस पर हजारों लोगों ने भरोसा किया है।",
          "hero-subtitle": "साल 2020 से हम करुणा और उत्कृष्टता के साथ 24x7 गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान कर रहे हैं।",
          "value-happy-patients": "खुश रोगी",
          "value-years-experience": "वर्षों का अनुभव",
          "value-emergency-care": "आपातकालीन देखभाल",
          "value-patient-satisfaction": "रोगी संतुष्टि",
          "view-doctors": "हमारे डॉक्टर देखें",
          "get-directions": "दिशा निर्देश",
          "mission-title": "हमारा मिशन",
          "mission-text": "समद नर्सिंग होम में, हम सुलभ, किफायती और गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं। हमारी अनुभवी चिकित्सा टीम यह सुनिश्चित करने के लिए अथक प्रयास करती है कि प्रत्येक रोगी को गरिमा और सम्मान के साथ व्यक्तिगत देखभाल मिले।",
          "value-compassion": "दयालु देखभाल",
          "value-compassion-desc": "प्रत्येक रोगी के साथ सहानुभूति और समझ के साथ व्यवहार",
          "value-excellence": "चिकित्सा उत्कृष्टता",
          "value-excellence-desc": "चिकित्सा अभ्यास के उच्चतम मानकों को बनाए रखना",
          "value-community": "सामुदायिक सेवा",
          "value-community-desc": "हमारे स्थानीय समुदाय की सेवा के लिए समर्पित",
          "doctors-title": "हमारी चिकित्सा टीम",
          "doctors-subtitle": "हमारे अनुभवी स्वास्थ्य सेवा पेशेवरों से मिलें",
          "timings-title": "क्लिनिक का समय",
          "timings-subtitle": "इन घंटों के दौरान हमसे मिलें",
          "hospital-hours": "अस्पताल के संचालन घंटे",
          "weekdays": "सोमवार - शनिवार",
          "sunday": "रविवार",
          "morning": "सुबह",
          "evening": "शाम",
          "tuesday-thursday": "मंगल, गुरु, शनि",
          "open-now": "🟢 अभी खुला है",
          "closed-now": "🔴 बंद है",
          "gallery-title": "हमारी सुविधाएं",
          "gallery-subtitle": "हमारी आधुनिक स्वास्थ्य सुविधाओं पर एक नज़र डालें",
          "reception": "रिसेप्शन क्षेत्र",
          "patient-room": "रोगी कक्ष",
          "equipment": "चिकित्सा उपकरण",
          "laboratory": "प्रयोगशाला",
          "pharmacy": "फार्मेसी",
          "waiting-area": "प्रतीक्षा क्षेत्र",
          "reviews-title": "रोगी समीक्षा",
          "reviews-subtitle": "हमारे रोगी हमारे बारे में क्या कहते हैं",
          "contact-title": "हमसे मिलें",
          "contact-subtitle": "आसानी से हमें खोजें और संपर्क करें",
          "hospital-address": "अस्पताल का पता",
          "address-english": "समद नर्सिंग होम\nहेंगईपुर रोड, शहाबुद्दीनपुर, बिलरियागंज\nजिला आज़मगढ़, उत्तर प्रदेश, पिन: 276121",
          "get-directions-btn": "दिशा निर्देश",
          "contact-info": "संपर्क जानकारी",
          "main-number": "मुख्य रिसेप्शन",
          "emergency-number": "आपातकाल",
          "whatsapp": "व्हाट्सऐप",
          "email": "ईमेल",
          "quick-actions": "त्वरित कार्य",
          "chat-whatsapp": "व्हाट्सऐप पर चैट करें",
          "call-emergency": "आपातकालीन कॉल",
          "quick-links": "त्वरित लिंक",
          "footer-address": "बिलरियागंज\nजिला आज़मगढ़, उत्तर प्रदेश\nपिन: 276121",
          "footer-description": "2020 से गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान करना। आपका स्वास्थ्य हमारी प्राथमिकता है।",
          "copyright": "© 2024 समद नर्सिंग होम। सभी अधिकार सुरक्षित।",
          "privacy": "गोपनीयता नीति",
          "terms": "सेवा की शर्तें"
        }
      };
      res.json(translationsData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to load translations data' });
    }
  });

  // User management routes (using in-memory storage for now)
  app.post('/api/users', async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
      }

      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(409).json({ error: 'Username already exists' });
      }

      const newUser = await storage.createUser({ username, password });
      res.status(201).json({ id: newUser.id, username: newUser.username });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  });

  app.get('/api/users/:id', async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await storage.getUser(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ id: user.id, username: user.username });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
