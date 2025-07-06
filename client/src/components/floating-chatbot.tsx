import { useRef, useEffect, useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const SUGGESTIONS = [
  { key: 'doctor-timing', en: "Doctor's Timing", hi: "डॉक्टर का समय", value: "doctor timing" },
  { key: 'location', en: "Location", hi: "स्थान", value: "location" },
  { key: 'emergency-number', en: "Emergency Number", hi: "आपातकालीन नंबर", value: "emergency number" },
  { key: 'hospital-timing', en: "Hospital Timing", hi: "अस्पताल का समय", value: "hospital timing" },
];

function getBotResponse(input: string, lang: string): string {
  const normalized = input.toLowerCase();
  if (lang === 'hi') {
    if (normalized.includes('doctor') || normalized.includes('डॉक्टर')) {
      return "डॉ. जीशान अहमद: सुबह 9:00 - दोपहर 3:00 बजे, डॉ. बदख़्शां मलिक: शाम 5:00 - रात 10:00 बजे।";
    }
    if (normalized.includes('location') || normalized.includes('स्थान')) {
      return "समद नर्सिंग होम, हेंगईपुर रोड, शहाबुद्दीनपुर, बिलरियागंज, आज़मगढ़, उत्तर प्रदेश, पिन: 276121।";
    }
    if (normalized.includes('emergency') || normalized.includes('आपातकाल')) {
      return "आपातकाल: +91 7860120688 (24/7 उपलब्ध)।";
    }
    if (normalized.includes('hospital') || normalized.includes('अस्पताल') || normalized.includes('timing') || normalized.includes('समय')) {
      return "सोमवार से शनिवार: सुबह 9:00 - दोपहर 3:00 बजे, शाम 5:00 - रात 10:00 बजे। आपातकालीन सेवाएं 24/7 उपलब्ध हैं।";
    }
    return "धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।";
  } else {
    if (normalized.includes('doctor')) {
      return "Dr. Zeeshan Ahmad: 9:00 AM - 3:00 PM, Dr. Badakhshan Malik: 5:00 PM - 10:00 PM.";
    }
    if (normalized.includes('location')) {
      return "Samad Nursing Home, Hengaipur Road, Shahabuddinpur, Bilariyaganj, Azamgarh, UP, PIN: 276121.";
    }
    if (normalized.includes('emergency')) {
      return "Emergency: +91 7860120688 (Available 24/7).";
    }
    if (normalized.includes('hospital') || normalized.includes('timing')) {
      return "Monday to Saturday: 9:00 AM - 3:00 PM, 5:00 PM - 10:00 PM. Emergency services available 24/7.";
    }
    return "Thank you for your message! We'll get back to you soon.";
  }
}

export default function FloatingChatbot() {
  const { currentLang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: Date.now().toString(),
    text: currentLang === 'hi' ? 'नमस्ते! मैं आपका स्वास्थ्य सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?' : "Hello! I'm your healthcare assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset welcome message when language changes
  useEffect(() => {
    setMessages([{
      id: Date.now().toString(),
      text: currentLang === 'hi' ? 'नमस्ते! मैं आपका स्वास्थ्य सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?' : "Hello! I'm your healthcare assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }]);
  }, [currentLang]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (customText?: string) => {
    const text = customText ?? inputValue;
    if (!text.trim()) return;
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text, currentLang),
        isUser: false,
        timestamp: new Date()
      }]);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-50 flex items-end justify-end p-4 md:p-8">
          <div className="w-[95vw] max-w-xs md:max-w-md flex flex-col rounded-2xl shadow-2xl border border-white/20 bg-white dark:bg-gray-900" style={{ height: 500, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}>
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 text-white flex items-center justify-between rounded-t-2xl" style={{ minHeight: 56 }}>
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-semibold truncate">{currentLang === 'hi' ? 'स्वास्थ्य सहायक' : 'Healthcare Assistant'}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-2 p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
                title={currentLang === 'hi' ? 'बंद करें' : 'Close'}
                style={{ lineHeight: 0 }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-2 space-y-4 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white/30" style={{ minHeight: 0 }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-end gap-2 max-w-xs">
                    {!message.isUser && (
                      <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.isUser
                          ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white'
                          : 'bg-white/80 backdrop-blur-sm text-gray-800 border border-white/20'
                      }`}
                    >
                      <p className="text-sm break-words">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.isUser && (
                      <div className="w-6 h-6 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 pb-2 flex flex-wrap gap-2 border-t border-white/10 bg-white/30">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.value}
                  onClick={() => handleSend(s.value)}
                  className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm hover:from-teal-200 hover:to-blue-200 transition-colors border border-teal-200"
                >
                  {currentLang === 'hi' ? s.hi : s.en}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20 bg-white/10 rounded-b-2xl">
              <div className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={currentLang === 'hi' ? 'अपना संदेश टाइप करें...' : 'Type your message...'}
                  className="flex-1 px-3 py-2 bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  style={{ minHeight: 40 }}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 p-2 rounded-lg disabled:opacity-50 text-white flex items-center justify-center"
                  style={{ minWidth: 40, minHeight: 40 }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 