import React, { useState } from 'react';

const MessageInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={disabled ? "Waiting for response..." : "Type '/' for commands"}
        className={`w-full px-4 py-3 pr-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 
          focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
          ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={disabled}
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded-lg transition-colors
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          disabled={disabled}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;