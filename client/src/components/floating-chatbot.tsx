import { useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { MessageCircle, X, Send, Bot, Clock, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const FAQ_DATA = {
  'hospital-timing': {
    question: 'What are your hospital timings?',
    answer: 'We are open Monday to Saturday. Morning: 9:00 AM - 3:00 PM, Evening: 5:00 PM - 10:00 PM. Emergency services available 24/7.',
    answerHindi: 'हम सोमवार से शनिवार तक खुले हैं। सुबह: 9:00 बजे - 3:00 बजे, शाम: 5:00 बजे - 10:00 बजे। आपातकालीन सेवाएं 24/7 उपलब्ध हैं।'
  },
  'doctor-availability': {
    question: 'Are doctors available now?',
    answer: 'Dr. Zeeshan Ahmad (General Physician) and Dr. Badakhshan Malik (Gynecologist) are available during their scheduled hours. Check the doctors section for real-time availability.',
    answerHindi: 'डॉ. जीशान अहमद (सामान्य चिकित्सक) और डॉ. बदख्शन मलिक (स्त्री रोग विशेषज्ञ) अपने निर्धारित समय के दौरान उपलब्ध हैं। वास्तविक समय की उपलब्धता के लिए डॉक्टरों के खंड की जांच करें।'
  },
  'emergency-contact': {
    question: 'What is your emergency contact?',
    answer: 'Emergency: +91 7860120688. For urgent medical assistance, call this number 24/7.',
    answerHindi: 'आपातकाल: +91 7860120688। तत्काल चिकित्सा सहायता के लिए, इस नंबर पर 24/7 कॉल करें।'
  },
  'location': {
    question: 'Where are you located?',
    answer: 'Samad Nursing Home, Hengaipur Road, Shahabuddinpur, Bilariyaganj, District Azamgarh, Uttar Pradesh, PIN: 276121',
    answerHindi: 'समद नर्सिंग होम, हेंगईपुर रोड, शहाबुद्दीनपुर, बिलरियागंज, जिला आजमगढ़, उत्तर प्रदेश, पिन: 276121'
  },
  'appointment': {
    question: 'How can I book an appointment?',
    answer: 'You can call us at +91 7860120688 or send a WhatsApp message to book your appointment. Walk-ins are also welcome during clinic hours.',
    answerHindi: 'आप अपना अपॉइंटमेंट बुक करने के लिए +91 7860120688 पर कॉल कर सकते हैं या WhatsApp संदेश भेज सकते हैं। क्लिनिक के घंटों के दौरान वॉक-इन का भी स्वागत है।'
  }
};

export default function FloatingChatbot() {
  const { currentLang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: currentLang === 'hi' ? 'नमस्ते! मैं आपका स्वास्थ्य सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?' : 'Hello! I\'m your healthcare assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(text.toLowerCase());
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const isHindi = currentLang === 'hi';
    
    if (userInput.includes('timing') || userInput.includes('hours') || userInput.includes('open') || userInput.includes('समय') || userInput.includes('घंटे')) {
      return isHindi ? FAQ_DATA['hospital-timing'].answerHindi : FAQ_DATA['hospital-timing'].answer;
    }
    if (userInput.includes('doctor') || userInput.includes('available') || userInput.includes('schedule') || userInput.includes('डॉक्टर') || userInput.includes('उपलब्ध')) {
      return isHindi ? FAQ_DATA['doctor-availability'].answerHindi : FAQ_DATA['doctor-availability'].answer;
    }
    if (userInput.includes('emergency') || userInput.includes('urgent') || userInput.includes('contact') || userInput.includes('आपातकाल') || userInput.includes('जरूरी')) {
      return isHindi ? FAQ_DATA['emergency-contact'].answerHindi : FAQ_DATA['emergency-contact'].answer;
    }
    if (userInput.includes('location') || userInput.includes('address') || userInput.includes('where') || userInput.includes('स्थान') || userInput.includes('पता')) {
      return isHindi ? FAQ_DATA['location'].answerHindi : FAQ_DATA['location'].answer;
    }
    if (userInput.includes('appointment') || userInput.includes('book') || userInput.includes('schedule') || userInput.includes('अपॉइंटमेंट') || userInput.includes('बुक')) {
      return isHindi ? FAQ_DATA['appointment'].answerHindi : FAQ_DATA['appointment'].answer;
    }
    
    return isHindi 
      ? "मैं मदद के लिए यहाँ हूं! आप मुझसे अस्पताल के समय, डॉक्टर की उपलब्धता, आपातकालीन संपर्क, स्थान, या अपॉइंटमेंट बुकिंग के बारे में पूछ सकते हैं। आप क्या जानना चाहते हैं?"
      : "I'm here to help! You can ask me about hospital timings, doctor availability, emergency contacts, location, or appointment booking. What would you like to know?";
  };

  const quickQuestions = [
    { 
      text: currentLang === 'hi' ? 'अस्पताल का समय' : 'Hospital Timings', 
      icon: Clock,
      keywords: ['timing', 'hours', 'open', 'समय', 'घंटे']
    },
    { 
      text: currentLang === 'hi' ? 'डॉक्टर की उपलब्धता' : 'Doctor Availability', 
      icon: Bot,
      keywords: ['doctor', 'available', 'schedule', 'डॉक्टर', 'उपलब्ध']
    },
    { 
      text: currentLang === 'hi' ? 'आपातकालीन संपर्क' : 'Emergency Contact', 
      icon: Phone,
      keywords: ['emergency', 'urgent', 'contact', 'आपातकाल', 'जरूरी']
    },
    { 
      text: currentLang === 'hi' ? 'स्थान' : 'Location', 
      icon: MapPin,
      keywords: ['location', 'address', 'where', 'स्थान', 'पता']
    }
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          1
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-md h-[500px] glassmorphism rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{currentLang === 'hi' ? 'स्वास्थ्य सहायक' : 'Healthcare Assistant'}</h3>
                    <p className="text-sm text-blue-100">{currentLang === 'hi' ? 'ऑनलाइन • मदद के लिए तैयार' : 'Online • Ready to help'}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-80">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
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
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-white/20 bg-white/10">
              <p className="text-xs text-gray-600 mb-3 font-medium">
                {currentLang === 'hi' ? 'त्वरित प्रश्न:' : 'Quick Questions:'}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {quickQuestions.map((question, index) => {
                  const Icon = question.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question.keywords[0])}
                      className="flex items-center gap-2 p-3 text-xs bg-white/70 hover:bg-white/90 rounded-lg transition-colors text-gray-700 font-medium shadow-sm"
                    >
                      <Icon className="w-3 h-3" />
                      <span className="break-words">{question.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder={currentLang === 'hi' ? 'अपना संदेश टाइप करें...' : 'Type your message...'}
                  className="flex-1 px-3 py-2 bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 p-2 rounded-lg"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 