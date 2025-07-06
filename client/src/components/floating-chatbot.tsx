import { useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { useChatbot } from '@/hooks/use-chatbot';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  Clock, 
  Phone, 
  MapPin, 
  User,
  Loader2,
  RefreshCw,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuickQuestion {
  text: string;
  icon: any;
  keywords: string[];
  action?: () => void;
}

export default function FloatingChatbot() {
  const { currentLang } = useTranslation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
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
    resetChat
  } = useChatbot(currentLang);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickQuestion = (question: QuickQuestion) => {
    sendMessage(question.keywords[0]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const quickQuestions: QuickQuestion[] = [
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
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      >
        <MessageCircle className="w-6 h-6" />
        {unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            {unreadCount}
          </div>
        )}
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className={`relative w-full max-w-md glassmorphism rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${
            isMinimized ? 'h-16' : 'h-[500px]'
          }`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{currentLang === 'hi' ? 'स्वास्थ्य सहायक' : 'Healthcare Assistant'}</h3>
                    <p className="text-sm text-blue-100 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      {currentLang === 'hi' ? 'ऑनलाइन • मदद के लिए तैयार' : 'Online • Ready to help'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    title={isMinimized ? 'Expand' : 'Minimize'}
                  >
                    <X className="w-4 h-4 rotate-45" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-80 bg-gradient-to-b from-gray-50/50 to-white/30">
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
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-end gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm text-gray-800 border border-white/20 px-4 py-2 rounded-2xl">
                          <div className="flex items-center gap-1">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span className="text-sm">{currentLang === 'hi' ? 'टाइप कर रहा है...' : 'Typing...'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                <div className="p-4 border-t border-white/20 bg-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-600 font-medium">
                      {currentLang === 'hi' ? 'त्वरित प्रश्न:' : 'Quick Questions:'}
                    </p>
                    <button
                      onClick={resetChat}
                      className="p-1 hover:bg-white/20 rounded transition-colors"
                      title="Reset Chat"
                    >
                      <RefreshCw className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {quickQuestions.map((question, index) => {
                      const Icon = question.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => handleQuickQuestion(question)}
                          disabled={isTyping}
                          className="flex items-center gap-2 p-3 text-xs bg-white/70 hover:bg-white/90 disabled:opacity-50 rounded-lg transition-colors text-gray-700 font-medium shadow-sm"
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
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={isTyping}
                      placeholder={currentLang === 'hi' ? 'अपना संदेश टाइप करें...' : 'Type your message...'}
                      className="flex-1 px-3 py-2 bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
                    />
                    <Button
                      onClick={() => sendMessage(inputValue)}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 p-2 rounded-lg disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
} 