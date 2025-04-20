import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ isOpen }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { id: 'chats', icon: '💬', label: 'Chats' },
    { id: 'search', icon: '🔍', label: 'Search' },
    { id: 'subscription', icon: '💳', label: 'Manage subscription' },
    { id: 'faq', icon: '❓', label: 'Updates & FAQ' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div 
      className={`
        fixed md:relative
        w-64 h-full bg-[#1A1B1E] text-gray-300 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-20'}
        z-20
      `}
    >
      {/* Logo */}
      <div className="h-14 flex items-center px-4 border-b border-gray-800">
        <div className="flex items-center space-x-2 overflow-hidden">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8 flex-shrink-0" />
          <span className={`text-white font-semibold text-lg transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
            Successyne
          </span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors overflow-hidden"
          >
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className={`p-4 border-t border-gray-800 ${!isOpen && 'md:hidden'}`}>
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
          <div className={`flex-1 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-sm font-medium text-white">User Name</div>
            <div className="text-xs text-gray-400">user@example.com</div>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className={`p-4 border-t border-gray-800 ${!isOpen && 'md:hidden'}`}>
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors overflow-hidden"
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl flex-shrink-0">{isDarkMode ? '🌙' : '☀️'}</span>
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              {isDarkMode ? 'Dark' : 'Light'}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 