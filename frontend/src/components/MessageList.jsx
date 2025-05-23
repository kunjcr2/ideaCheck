import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="p-4 space-y-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.userId === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          {message.userId === 'assistant' && (
            <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 mr-3 p-1">
              <img src="/logo.svg" alt="Assistant" className="w-full h-full" />
            </div>
          )}
          <div
            className={`max-w-[70%] rounded-lg px-4 py-2 ${message.userId === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
              }`}
          >
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            <div className="mt-1 flex items-center justify-end space-x-2">
              {message.userId === 'assistant' && (
                <>
                  <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Copy
                  </button>
                  <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Regenerate
                  </button>
                </>
              )}
              <span className="text-xs opacity-50">
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>
          {message.userId === 'user' && (
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0 ml-3 flex items-center justify-center">
              <span className="text-sm">U</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;