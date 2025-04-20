import React, { useState } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: 'Hello! How can I help you today?',
      userId: 'assistant',
      timestamp: new Date(),
    }
  ]);

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
    <ThemeProvider>
      <div className="flex h-screen bg-[#1A1B1E]">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Header */}
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

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto">
            <MessageList messages={messages} />
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <MessageInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
