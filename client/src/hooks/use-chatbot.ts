import { useState, useEffect, useCallback } from 'react';
import { usePageReload } from './use-page-reload';

interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    isTyping?: boolean;
}

interface UseChatbotReturn {
    messages: ChatMessage[];
    isTyping: boolean;
    unreadCount: number;
    isMuted: boolean;
    isMinimized: boolean;
    isOpen: boolean;
    inputValue: string;
    setInputValue: (value: string) => void;
    setIsOpen: (open: boolean) => void;
    setIsMinimized: (minimized: boolean) => void;
    setIsMuted: (muted: boolean) => void;
    sendMessage: (text: string) => Promise<void>;
    resetChat: () => void;
    initializeChat: () => void;
}

export function useChatbot(currentLang: string): UseChatbotReturn {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [unreadCount, setUnreadCount] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // Initialize chat when component mounts or language changes
    useEffect(() => {
        initializeChat();
    }, [currentLang]);

    // Reset unread count when chat is opened
    useEffect(() => {
        if (isOpen) {
            setUnreadCount(0);
        }
    }, [isOpen]);

    // Handle page reload
    usePageReload({
        onReload: () => {
            // Reset chatbot state on page reload
            initializeChat();
            setIsOpen(false);
            setIsMinimized(false);
            setIsTyping(false);
            setInputValue('');
        }
    });

    const initializeChat = useCallback(() => {
        const welcomeMessage: ChatMessage = {
            id: Date.now().toString(),
            text: currentLang === 'hi'
                ? 'नमस्ते! मैं आपका स्वास्थ्य सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?'
                : 'Hello! I\'m your healthcare assistant. How can I help you today?',
            isUser: false,
            timestamp: new Date()
        };
        setMessages([welcomeMessage]);
        setUnreadCount(1);
        setIsTyping(false);
    }, [currentLang]);

    const resetChat = useCallback(() => {
        initializeChat();
    }, [initializeChat]);

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isTyping) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            text: text.trim(),
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);
        setUnreadCount(0);

        // Simulate typing delay with random variation
        const typingDelay = 800 + Math.random() * 1200;
        await new Promise(resolve => setTimeout(resolve, typingDelay));

        // Generate bot response
        const botResponse = generateBotResponse(text.toLowerCase());

        const botMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            text: botResponse,
            isUser: false,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);

        // Play notification sound if not muted
        if (!isMuted) {
            playNotificationSound();
        }
    }, [isTyping, isMuted, currentLang]);

    const generateBotResponse = (userInput: string): string => {
        const isHindi = currentLang === 'hi';

        // Enhanced keyword matching with more comprehensive patterns
        const keywords = {
            'timing': ['timing', 'hours', 'open', 'close', 'time', 'schedule', 'समय', 'घंटे', 'खुला', 'बंद', 'शेड्यूल'],
            'doctor': ['doctor', 'available', 'schedule', 'physician', 'specialist', 'डॉक्टर', 'उपलब्ध', 'चिकित्सक', 'विशेषज्ञ'],
            'emergency': ['emergency', 'urgent', 'contact', 'help', 'critical', 'आपातकाल', 'जरूरी', 'संपर्क', 'मदद', 'गंभीर'],
            'location': ['location', 'address', 'where', 'place', 'directions', 'स्थान', 'पता', 'कहाँ', 'जगह', 'दिशा'],
            'appointment': ['appointment', 'book', 'schedule', 'visit', 'meeting', 'अपॉइंटमेंट', 'बुक', 'मिलना', 'भेंट'],
            'services': ['services', 'treatment', 'care', 'service', 'facility', 'सेवाएं', 'उपचार', 'देखभाल', 'सुविधा'],
            'fees': ['fees', 'cost', 'price', 'charge', 'payment', 'फीस', 'लागत', 'मूल्य', 'शुल्क', 'भुगतान']
        };

        for (const [key, keywordList] of Object.entries(keywords)) {
            if (keywordList.some(keyword => userInput.includes(keyword))) {
                return getFAQResponse(key, isHindi);
            }
        }

        return isHindi
            ? "मैं मदद के लिए यहाँ हूं! आप मुझसे अस्पताल के समय, डॉक्टर की उपलब्धता, आपातकालीन संपर्क, स्थान, सेवाएं, फीस, या अपॉइंटमेंट बुकिंग के बारे में पूछ सकते हैं। आप क्या जानना चाहते हैं?"
            : "I'm here to help! You can ask me about hospital timings, doctor availability, emergency contacts, location, services, fees, or appointment booking. What would you like to know?";
    };

    const getFAQResponse = (key: string, isHindi: boolean): string => {
        const FAQ_DATA = {
            'timing': {
                answer: 'We are open Monday to Saturday. Morning: 9:00 AM - 3:00 PM, Evening: 5:00 PM - 10:00 PM. Emergency services available 24/7.',
                answerHindi: 'हम सोमवार से शनिवार तक खुले हैं। सुबह: 9:00 बजे - 3:00 बजे, शाम: 5:00 बजे - 10:00 बजे। आपातकालीन सेवाएं 24/7 उपलब्ध हैं।'
            },
            'doctor': {
                answer: 'Dr. Zeeshan Ahmad (General Physician) and Dr. Badakhshan Malik (Gynecologist) are available during their scheduled hours. Check the doctors section for real-time availability.',
                answerHindi: 'डॉ. जीशान अहमद (सामान्य चिकित्सक) और डॉ. बदख्शन मलिक (स्त्री रोग विशेषज्ञ) अपने निर्धारित समय के दौरान उपलब्ध हैं। वास्तविक समय की उपलब्धता के लिए डॉक्टरों के खंड की जांच करें।'
            },
            'emergency': {
                answer: 'Emergency: +91 7860120688. For urgent medical assistance, call this number 24/7.',
                answerHindi: 'आपातकाल: +91 7860120688। तत्काल चिकित्सा सहायता के लिए, इस नंबर पर 24/7 कॉल करें।'
            },
            'location': {
                answer: 'Samad Nursing Home, Hengaipur Road, Shahabuddinpur, Bilariyaganj, District Azamgarh, Uttar Pradesh, PIN: 276121',
                answerHindi: 'समद नर्सिंग होम, हेंगईपुर रोड, शहाबुद्दीनपुर, बिलरियागंज, जिला आजमगढ़, उत्तर प्रदेश, पिन: 276121'
            },
            'appointment': {
                answer: 'You can call us at +91 7860120688 or send a WhatsApp message to book your appointment. Walk-ins are also welcome during clinic hours.',
                answerHindi: 'आप अपना अपॉइंटमेंट बुक करने के लिए +91 7860120688 पर कॉल कर सकते हैं या WhatsApp संदेश भेज सकते हैं। क्लिनिक के घंटों के दौरान वॉक-इन का भी स्वागत है।'
            },
            'services': {
                answer: 'We offer general consultation, gynecology, emergency care, laboratory services, pharmacy, and 24/7 emergency support.',
                answerHindi: 'हम सामान्य परामर्श, स्त्री रोग, आपातकालीन देखभाल, प्रयोगशाला सेवाएं, फार्मेसी और 24/7 आपातकालीन सहायता प्रदान करते हैं।'
            },
            'fees': {
                answer: 'Our consultation fees are affordable and vary by doctor. Please call us for current pricing information.',
                answerHindi: 'हमारी परामर्श फीस किफायती है और डॉक्टर के अनुसार अलग-अलग होती है। वर्तमान मूल्य जानकारी के लिए कृपया हमें कॉल करें।'
            }
        };

        const faq = FAQ_DATA[key as keyof typeof FAQ_DATA];
        return isHindi ? faq?.answerHindi : faq?.answer;
    };

    const playNotificationSound = () => {
        try {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (error) {
            // Fallback for browsers that don't support Web Audio API
            console.log('Audio notification played');
        }
    };

    return {
        messages,
        isTyping,
        unreadCount,
        isMuted,
        isMinimized,
        isOpen,
        inputValue,
        setInputValue,
        setIsOpen,
        setIsMinimized,
        setIsMuted,
        sendMessage,
        resetChat,
        initializeChat
    };
} 