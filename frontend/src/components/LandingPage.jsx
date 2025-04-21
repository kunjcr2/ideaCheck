import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import LearnMoreSection from './LearnMoreSection';

const LandingPage = () => {
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('validate');

    const handleNavigate = (mode) => {
        navigate('/chat', { state: { mode } });
    };

    return (
        <div className={`${isDarkMode ? 'bg-[#1A1B1E] text-white' : 'bg-white text-gray-900'}`}>
            {/* Hero Section */}
            <div className="h-screen relative">
                <div className="container mx-auto px-4 h-full">
                    <nav className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-2">
                            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
                            <span className="text-2xl font-bold">IdeaCheck</span>
                        </div>
                        <div className="space-x-6">
                            <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
                            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
                            <button
                                onClick={() => navigate('/chat')}
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Get Started
                            </button>
                        </div>
                    </nav>

                    <div className="grid md:grid-cols-2 gap-12 items-center h-[calc(100%-5rem)] py-8">
                        <div>
                            <h1 className="text-5xl font-bold leading-tight mb-6">
                                Your AI-Powered <span className="text-blue-500">Startup Companion</span>
                            </h1>
                            <p className="text-lg mb-8 text-gray-400">
                                Whether you need your startup idea validated or want AI to generate fresh innovative concepts, we've got you covered.
                            </p>

                            {/* Mode Selection Tabs */}
                            <div className="flex space-x-4 mb-6">
                                <button
                                    onClick={() => setActiveTab('validate')}
                                    className={`px-6 py-2 rounded-lg transition-colors ${activeTab === 'validate'
                                            ? 'bg-blue-500 text-white'
                                            : isDarkMode
                                                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    Validate Idea
                                </button>
                                <button
                                    onClick={() => setActiveTab('generate')}
                                    className={`px-6 py-2 rounded-lg transition-colors ${activeTab === 'generate'
                                            ? 'bg-blue-500 text-white'
                                            : isDarkMode
                                                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    Generate Ideas
                                </button>
                            </div>

                            {/* Conditional Content Based on Tab */}
                            <div className="mb-8">
                                {activeTab === 'validate' ? (
                                    <div>
                                        <button
                                            onClick={() => navigate('/chat')}
                                            className={`w-full p-4 text-left rounded-lg mb-4 ${isDarkMode
                                                    ? 'bg-gray-800 hover:bg-gray-700'
                                                    : 'bg-gray-100 hover:bg-gray-200'
                                                } transition-colors`}
                                        >
                                            <span className="block font-semibold mb-2">🔍 Validate Your Idea</span>
                                            <span className="text-sm text-gray-400">
                                                Get comprehensive analysis of your startup idea's market potential, competition, and viability.
                                            </span>
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <button
                                            onClick={() => navigate('/chat')}
                                            className={`w-full p-4 text-left rounded-lg mb-4 ${isDarkMode
                                                    ? 'bg-gray-800 hover:bg-gray-700'
                                                    : 'bg-gray-100 hover:bg-gray-200'
                                                } transition-colors`}
                                        >
                                            <span className="block font-semibold mb-2">💡 Generate Fresh Ideas</span>
                                            <span className="text-sm text-gray-400">
                                                Let AI help you brainstorm innovative startup ideas based on your interests and market trends.
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="space-x-4">
                                <button
                                    onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                                    className={`px-8 py-3 rounded-lg border ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} transition-colors`}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative z-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 shadow-xl">
                                <h3 className="text-2xl font-semibold mb-4">Smart Analysis</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Market Viability Score
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Competitor Analysis
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        MVP Recommendations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learn More Section */}
            <LearnMoreSection isDarkMode={isDarkMode} />

            {/* Team Section */}
            <div id="about" className="min-h-screen flex items-center py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600">
                                {/* Add Kunj's photo here if available */}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Kunj</h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Founder</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600">
                                {/* Add Atharva's photo here if available */}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Atharva</h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
                            <span className="font-semibold">IdeaCheck</span>
                        </div>
                        <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            © 2025 IdeaCheck. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;