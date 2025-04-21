import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from './context/ThemeContext';

const ChatInterface = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Set initial message based on the mode
    const mode = location.state?.mode || 'validate';
    const initialMessage = {
      id: 1,
      content: mode === 'validate'
        ? "Hello! I'm ready to help validate your startup idea. Share your concept, and I'll provide detailed analysis on its market potential, competition, and viability."
        : "Hi! I'll help you generate innovative startup ideas. Tell me about your interests, skills, or the type of startup you'd like to build, and I'll suggest some unique concepts.",
      userId: 'assistant',
      timestamp: new Date(),
    };
    setMessages([initialMessage]);

    // If there's an initial message from the landing page, add it
    if (location.state?.initialMessage) {
      const userMessage = {
        id: 2,
        content: location.state.initialMessage,
        userId: 'user',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMessage]);

      // Add response based on mode
      setTimeout(() => {
        const responseMessage = {
          id: 3,
          content: mode === 'validate'
            ? "I'll analyze your startup idea. Let me break it down and evaluate different aspects like market potential, competition, and viability..."
            : "Based on your interests, let me generate some innovative startup ideas that align with current market trends...",
          userId: 'assistant',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, responseMessage]);
      }, 1000);
    }
  }, [location.state]);

  const handleSendMessage = (content) => {
    const newMessage = {
      id: messages.length + 1,
      content,
      userId: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-[#1A1B1E]">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col bg-white">
        <div className="h-14 border-b flex items-center justify-between px-4">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-full mr-2"
              aria-label="Toggle sidebar"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <h1 className="text-xl font-semibold">Chat</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <MessageList messages={messages} />
        </div>

        <div className="border-t p-4">
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
