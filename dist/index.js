// server/index.ts
import express2 from "express";
import cors from "cors";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.currentId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
};
var storage = new MemStorage();

// server/routes.ts
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var router = express.Router();
async function registerRoutes(app2) {
  app2.get("/api/health", (req, res) => {
    res.json({
      status: "OK",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });
  app2.get("/api/doctors", (req, res) => {
    try {
      const doctorsData = [
        {
          "id": 1,
          "name": "Dr. Zeeshan Ahmad",
          "specialty": "General Physician and child specialist",
          "registration": false,
          "email": "Zeeshanshaikh5045@gmail.com",
          "mobile": "+91 7860120688",
          "image": "/images/doctors/dr_zeeshan_img.webp",
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
          "image": "/images/doctors/dr_badakhshan_img.webp",
          "morningHours": "08:00 AM - 2:00 PM",
          "eveningHours": "4:00 PM - 09:00 PM",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "isAvailable": true
        }
      ];
      res.json(doctorsData);
    } catch (error) {
      res.status(500).json({ error: "Failed to load doctors data" });
    }
  });
  app2.get("/api/reviews", (req, res) => {
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
          "text": "\u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0915\u0947 \u0938\u092C\u0938\u0947 \u092C\u0947\u0939\u0924\u0930\u0940\u0928 \u092C\u093E\u0932 \u0930\u094B\u0917 \u0935\u093F\u0936\u0947\u0937\u091C\u094D\u091E\u0964 \u0921\u0949. \u091C\u093C\u0940\u0936\u093E\u0928 \u092C\u091A\u094D\u091A\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u092C\u0939\u0941\u0924 \u0939\u0940 \u0938\u094C\u092E\u094D\u092F \u0935\u094D\u092F\u0935\u0939\u093E\u0930 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u092C\u0947\u0939\u0924\u0930\u0940\u0928 \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u0915\u0940\u092F \u0938\u0932\u093E\u0939 \u0926\u0947\u0924\u0947 \u0939\u0948\u0902",
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
      res.status(500).json({ error: "Failed to load reviews data" });
    }
  });
  app2.get("/api/translations", (req, res) => {
    try {
      const translationsData = {
        "en": {
          "language": "\u0939\u093F\u0902\u0926\u0940",
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
          "open-now": "\u{1F7E2} Open Now",
          "closed-now": "\u{1F534} Closed",
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
          "copyright": "\xA9 2024 Samad Nursing Home. All rights reserved.",
          "privacy": "Privacy Policy",
          "terms": "Terms of Service"
        },
        "hi": {
          "language": "English",
          "emergency": "\u0906\u092A\u093E\u0924\u0915\u093E\u0932: +91 7860120688",
          "hospital-name": "\u0938\u092E\u0926 \u0928\u0930\u094D\u0938\u093F\u0902\u0917 \u0939\u094B\u092E",
          "tagline": "\u0906\u092A\u0915\u0940 \u0938\u0947\u0939\u0924, \u0939\u092E\u093E\u0930\u0940 \u091C\u093F\u092E\u094D\u092E\u0947\u0926\u093E\u0930\u0940",
          "nav-home": "\u0939\u094B\u092E",
          "nav-doctors": "\u0921\u0949\u0915\u094D\u091F\u0930",
          "nav-timings": "\u0938\u092E\u092F",
          "nav-gallery": "\u0917\u0948\u0932\u0930\u0940",
          "nav-contact": "\u0938\u0902\u092A\u0930\u094D\u0915",
          "hero-title": "\u0909\u0924\u094D\u0915\u0943\u0937\u094D\u091F \u0938\u0947\u0935\u093E, \u091C\u093F\u0938 \u092A\u0930 \u0939\u091C\u093E\u0930\u094B\u0902 \u0932\u094B\u0917\u094B\u0902 \u0928\u0947 \u092D\u0930\u094B\u0938\u093E \u0915\u093F\u092F\u093E \u0939\u0948\u0964",
          "hero-subtitle": "\u0938\u093E\u0932 2020 \u0938\u0947 \u0939\u092E \u0915\u0930\u0941\u0923\u093E \u0914\u0930 \u0909\u0924\u094D\u0915\u0943\u0937\u094D\u091F\u0924\u093E \u0915\u0947 \u0938\u093E\u0925 24x7 \u0917\u0941\u0923\u0935\u0924\u094D\u0924\u093E\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0947\u0935\u093E\u090F\u0902 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902\u0964",
          "value-happy-patients": "\u0916\u0941\u0936 \u0930\u094B\u0917\u0940",
          "value-years-experience": "\u0935\u0930\u094D\u0937\u094B\u0902 \u0915\u093E \u0905\u0928\u0941\u092D\u0935",
          "value-emergency-care": "\u0906\u092A\u093E\u0924\u0915\u093E\u0932\u0940\u0928 \u0926\u0947\u0916\u092D\u093E\u0932",
          "value-patient-satisfaction": "\u0930\u094B\u0917\u0940 \u0938\u0902\u0924\u0941\u0937\u094D\u091F\u093F",
          "view-doctors": "\u0939\u092E\u093E\u0930\u0947 \u0921\u0949\u0915\u094D\u091F\u0930 \u0926\u0947\u0916\u0947\u0902",
          "get-directions": "\u0926\u093F\u0936\u093E \u0928\u093F\u0930\u094D\u0926\u0947\u0936",
          "mission-title": "\u0939\u092E\u093E\u0930\u093E \u092E\u093F\u0936\u0928",
          "mission-text": "\u0938\u092E\u0926 \u0928\u0930\u094D\u0938\u093F\u0902\u0917 \u0939\u094B\u092E \u092E\u0947\u0902, \u0939\u092E \u0938\u0941\u0932\u092D, \u0915\u093F\u092B\u093E\u092F\u0924\u0940 \u0914\u0930 \u0917\u0941\u0923\u0935\u0924\u094D\u0924\u093E\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0947\u0935\u093E\u090F\u0902 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u0924\u093F\u092C\u0926\u094D\u0927 \u0939\u0948\u0902\u0964 \u0939\u092E\u093E\u0930\u0940 \u0905\u0928\u0941\u092D\u0935\u0940 \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u091F\u0940\u092E \u092F\u0939 \u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u0925\u0915 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0924\u0940 \u0939\u0948 \u0915\u093F \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0930\u094B\u0917\u0940 \u0915\u094B \u0917\u0930\u093F\u092E\u093E \u0914\u0930 \u0938\u092E\u094D\u092E\u093E\u0928 \u0915\u0947 \u0938\u093E\u0925 \u0935\u094D\u092F\u0915\u094D\u0924\u093F\u0917\u0924 \u0926\u0947\u0916\u092D\u093E\u0932 \u092E\u093F\u0932\u0947\u0964",
          "value-compassion": "\u0926\u092F\u093E\u0932\u0941 \u0926\u0947\u0916\u092D\u093E\u0932",
          "value-compassion-desc": "\u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0930\u094B\u0917\u0940 \u0915\u0947 \u0938\u093E\u0925 \u0938\u0939\u093E\u0928\u0941\u092D\u0942\u0924\u093F \u0914\u0930 \u0938\u092E\u091D \u0915\u0947 \u0938\u093E\u0925 \u0935\u094D\u092F\u0935\u0939\u093E\u0930",
          "value-excellence": "\u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u0909\u0924\u094D\u0915\u0943\u0937\u094D\u091F\u0924\u093E",
          "value-excellence-desc": "\u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u0905\u092D\u094D\u092F\u093E\u0938 \u0915\u0947 \u0909\u091A\u094D\u091A\u0924\u092E \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u094B \u092C\u0928\u093E\u090F \u0930\u0916\u0928\u093E",
          "value-community": "\u0938\u093E\u092E\u0941\u0926\u093E\u092F\u093F\u0915 \u0938\u0947\u0935\u093E",
          "value-community-desc": "\u0939\u092E\u093E\u0930\u0947 \u0938\u094D\u0925\u093E\u0928\u0940\u092F \u0938\u092E\u0941\u0926\u093E\u092F \u0915\u0940 \u0938\u0947\u0935\u093E \u0915\u0947 \u0932\u093F\u090F \u0938\u092E\u0930\u094D\u092A\u093F\u0924",
          "doctors-title": "\u0939\u092E\u093E\u0930\u0940 \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u091F\u0940\u092E",
          "doctors-subtitle": "\u0939\u092E\u093E\u0930\u0947 \u0905\u0928\u0941\u092D\u0935\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0947\u0935\u093E \u092A\u0947\u0936\u0947\u0935\u0930\u094B\u0902 \u0938\u0947 \u092E\u093F\u0932\u0947\u0902",
          "timings-title": "\u0915\u094D\u0932\u093F\u0928\u093F\u0915 \u0915\u093E \u0938\u092E\u092F",
          "timings-subtitle": "\u0907\u0928 \u0918\u0902\u091F\u094B\u0902 \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u0939\u092E\u0938\u0947 \u092E\u093F\u0932\u0947\u0902",
          "hospital-hours": "\u0905\u0938\u094D\u092A\u0924\u093E\u0932 \u0915\u0947 \u0938\u0902\u091A\u093E\u0932\u0928 \u0918\u0902\u091F\u0947",
          "weekdays": "\u0938\u094B\u092E\u0935\u093E\u0930 - \u0936\u0928\u093F\u0935\u093E\u0930",
          "sunday": "\u0930\u0935\u093F\u0935\u093E\u0930",
          "morning": "\u0938\u0941\u092C\u0939",
          "evening": "\u0936\u093E\u092E",
          "tuesday-thursday": "\u092E\u0902\u0917\u0932, \u0917\u0941\u0930\u0941, \u0936\u0928\u093F",
          "open-now": "\u{1F7E2} \u0905\u092D\u0940 \u0916\u0941\u0932\u093E \u0939\u0948",
          "closed-now": "\u{1F534} \u092C\u0902\u0926 \u0939\u0948",
          "gallery-title": "\u0939\u092E\u093E\u0930\u0940 \u0938\u0941\u0935\u093F\u0927\u093E\u090F\u0902",
          "gallery-subtitle": "\u0939\u092E\u093E\u0930\u0940 \u0906\u0927\u0941\u0928\u093F\u0915 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0941\u0935\u093F\u0927\u093E\u0913\u0902 \u092A\u0930 \u090F\u0915 \u0928\u091C\u093C\u0930 \u0921\u093E\u0932\u0947\u0902",
          "reception": "\u0930\u093F\u0938\u0947\u092A\u094D\u0936\u0928 \u0915\u094D\u0937\u0947\u0924\u094D\u0930",
          "patient-room": "\u0930\u094B\u0917\u0940 \u0915\u0915\u094D\u0937",
          "equipment": "\u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u0909\u092A\u0915\u0930\u0923",
          "laboratory": "\u092A\u094D\u0930\u092F\u094B\u0917\u0936\u093E\u0932\u093E",
          "pharmacy": "\u092B\u093E\u0930\u094D\u092E\u0947\u0938\u0940",
          "waiting-area": "\u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E \u0915\u094D\u0937\u0947\u0924\u094D\u0930",
          "reviews-title": "\u0930\u094B\u0917\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E",
          "reviews-subtitle": "\u0939\u092E\u093E\u0930\u0947 \u0930\u094B\u0917\u0940 \u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0915\u0939\u0924\u0947 \u0939\u0948\u0902",
          "contact-title": "\u0939\u092E\u0938\u0947 \u092E\u093F\u0932\u0947\u0902",
          "contact-subtitle": "\u0906\u0938\u093E\u0928\u0940 \u0938\u0947 \u0939\u092E\u0947\u0902 \u0916\u094B\u091C\u0947\u0902 \u0914\u0930 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902",
          "hospital-address": "\u0905\u0938\u094D\u092A\u0924\u093E\u0932 \u0915\u093E \u092A\u0924\u093E",
          "address-english": "\u0938\u092E\u0926 \u0928\u0930\u094D\u0938\u093F\u0902\u0917 \u0939\u094B\u092E\n\u0939\u0947\u0902\u0917\u0908\u092A\u0941\u0930 \u0930\u094B\u0921, \u0936\u0939\u093E\u092C\u0941\u0926\u094D\u0926\u0940\u0928\u092A\u0941\u0930, \u092C\u093F\u0932\u0930\u093F\u092F\u093E\u0917\u0902\u091C\n\u091C\u093F\u0932\u093E \u0906\u091C\u093C\u092E\u0917\u0922\u093C, \u0909\u0924\u094D\u0924\u0930 \u092A\u094D\u0930\u0926\u0947\u0936, \u092A\u093F\u0928: 276121",
          "get-directions-btn": "\u0926\u093F\u0936\u093E \u0928\u093F\u0930\u094D\u0926\u0947\u0936",
          "contact-info": "\u0938\u0902\u092A\u0930\u094D\u0915 \u091C\u093E\u0928\u0915\u093E\u0930\u0940",
          "main-number": "\u092E\u0941\u0916\u094D\u092F \u0930\u093F\u0938\u0947\u092A\u094D\u0936\u0928",
          "emergency-number": "\u0906\u092A\u093E\u0924\u0915\u093E\u0932",
          "whatsapp": "\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A",
          "email": "\u0908\u092E\u0947\u0932",
          "quick-actions": "\u0924\u094D\u0935\u0930\u093F\u0924 \u0915\u093E\u0930\u094D\u092F",
          "chat-whatsapp": "\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A \u092A\u0930 \u091A\u0948\u091F \u0915\u0930\u0947\u0902",
          "call-emergency": "\u0906\u092A\u093E\u0924\u0915\u093E\u0932\u0940\u0928 \u0915\u0949\u0932",
          "quick-links": "\u0924\u094D\u0935\u0930\u093F\u0924 \u0932\u093F\u0902\u0915",
          "footer-address": "\u092C\u093F\u0932\u0930\u093F\u092F\u093E\u0917\u0902\u091C\n\u091C\u093F\u0932\u093E \u0906\u091C\u093C\u092E\u0917\u0922\u093C, \u0909\u0924\u094D\u0924\u0930 \u092A\u094D\u0930\u0926\u0947\u0936\n\u092A\u093F\u0928: 276121",
          "footer-description": "2020 \u0938\u0947 \u0917\u0941\u0923\u0935\u0924\u094D\u0924\u093E\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0947\u0935\u093E\u090F\u0902 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0928\u093E\u0964 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0939\u092E\u093E\u0930\u0940 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E \u0939\u0948\u0964",
          "copyright": "\xA9 2024 \u0938\u092E\u0926 \u0928\u0930\u094D\u0938\u093F\u0902\u0917 \u0939\u094B\u092E\u0964 \u0938\u092D\u0940 \u0905\u0927\u093F\u0915\u093E\u0930 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924\u0964",
          "privacy": "\u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E \u0928\u0940\u0924\u093F",
          "terms": "\u0938\u0947\u0935\u093E \u0915\u0940 \u0936\u0930\u094D\u0924\u0947\u0902"
        }
      };
      res.json(translationsData);
    } catch (error) {
      res.status(500).json({ error: "Failed to load translations data" });
    }
  });
  app2.post("/api/users", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
      }
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(409).json({ error: "Username already exists" });
      }
      const newUser = await storage.createUser({ username, password });
      res.status(201).json({ id: newUser.id, username: newUser.username });
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  });
  app2.get("/api/users/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ id: user.id, username: user.username });
    } catch (error) {
      res.status(500).json({ error: "Failed to get user" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/index.ts
var app = express2();
var corsOptions = {
  origin: process.env.NODE_ENV === "production" ? [process.env.CORS_ORIGIN || "https://samad-nursing-home-client.vercel.app"] : ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path2 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson) {
    capturedJsonResponse = bodyJson;
    return originalResJson.call(res, bodyJson);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path2.startsWith("/api")) {
      let logLine = `${req.method} ${path2} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      console.log(logLine);
    }
  });
  next();
});
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
  });
  const port = process.env.PORT || 5e3;
  const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";
  server.listen({
    port: parseInt(port.toString()),
    host
  }, () => {
    console.log(`\u{1F680} Server running on ${host}:${port} in ${process.env.NODE_ENV || "development"} mode`);
  });
})();
