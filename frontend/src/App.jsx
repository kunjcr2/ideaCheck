import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from './context/ThemeContext';

const ChatInterface = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState('validate');

  // Initialize chat with welcome message
  useEffect(() => {
    const currentMode = location.state?.mode || 'validate';
    setMode(currentMode);

    // Reset messages when mode changes
    const initialMessage = {
      id: Date.now(),
      content: currentMode === 'validate'
        ? "Hello! I'm ready to help validate your startup idea. Share your concept, and I'll provide detailed analysis on its market potential, competition, and viability."
        : "Hi! I'll help you generate innovative startup ideas. Tell me about your interests, skills, or the type of startup you'd like to build, and I'll suggest some unique concepts.",
      userId: 'assistant',
      timestamp: new Date(),
    };

    setMessages([initialMessage]);
  }, [location.state?.mode]);

  // Handle initial message from landing page
  useEffect(() => {
    if (location.state?.initialMessage) {
      const message = location.state.initialMessage;
      handleSendMessage(message);
    }
  }, []); // Run only once on mount

  const handleSendMessage = useCallback(async (content) => {
    if (!content.trim() || isLoading) return;

    try {
      // Add user message
      const userMessage = {
        id: Date.now(),
        content: content.trim(),
        userId: 'user',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMessage]);
      setIsLoading(true);

      // Send to backend
      const response = await axios.post('http://localhost:5172/api/chat', {
        message: content.trim()
      });

      // Add assistant message
      const assistantMessage = {
        id: Date.now() + 1,
        content: response.data.content.output,
        userId: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        content: "Sorry, I encountered an error processing your request. Please try again.",
        userId: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-[#1A1B1E] overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 overflow-hidden">
        <div className="h-14 border-b dark:border-gray-700 flex items-center justify-between px-4">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full mr-2"
              aria-label="Toggle sidebar"
            >
              <svg
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
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
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              {mode === 'validate' ? 'Validate Idea' : 'Generate Ideas'}
            </h1>
          </div>
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <span className="text-sm">Thinking...</span>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-500 dark:border-gray-400 border-t-transparent"></div>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
          {messages.length > 0 && <MessageList messages={messages} />}
        </div>

        <div className="border-t dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
          <MessageInput onSendMessage={handleSendMessage} disabled={isLoading} />
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
