import React from 'react';

const LearnMoreSection = ({ isDarkMode }) => {
    return (
        <div id="features" className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-20`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Our AI-powered platform combines cutting-edge technology with startup expertise to help you make informed decisions and generate innovative ideas.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <FeatureCard
                        isDarkMode={isDarkMode}
                        icon={<ValidateIcon />}
                        title="Idea Validation"
                        description="Get comprehensive feedback on your startup idea in minutes, not weeks. Our AI analyzes:"
                        items={[
                            "Market size and potential",
                            "Competitive landscape",
                            "Revenue model viability",
                            "Technical feasibility"
                        ]}
                    />

                    <FeatureCard
                        isDarkMode={isDarkMode}
                        icon={<GenerateIcon />}
                        title="Idea Generation"
                        description="Need inspiration? Our AI can generate innovative startup ideas based on:"
                        items={[
                            "Current market trends",
                            "Your interests and expertise",
                            "Emerging technologies",
                            "Market opportunities"
                        ]}
                    />

                    <FeatureCard
                        isDarkMode={isDarkMode}
                        icon={<StrategyIcon />}
                        title="Strategic Planning"
                        description="Get actionable insights and recommendations for:"
                        items={[
                            "MVP development roadmap",
                            "Go-to-market strategy",
                            "Resource allocation",
                            "Risk assessment"
                        ]}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <DetailCard
                        isDarkMode={isDarkMode}
                        title="For Idea Validation"
                        items={[
                            {
                                title: "Comprehensive Analysis",
                                description: "Get detailed insights about market size, competition, potential challenges, and opportunities."
                            },
                            {
                                title: "Validation Framework",
                                description: "Uses proven startup validation methodologies combined with real-time market data."
                            }
                        ]}
                    />

                    <DetailCard
                        isDarkMode={isDarkMode}
                        title="For Idea Generation"
                        items={[
                            {
                                title: "AI-Powered Brainstorming",
                                description: "Generate unique startup ideas based on your interests, skills, and market opportunities."
                            },
                            {
                                title: "Trend Analysis",
                                description: "Identifies emerging market trends and opportunities in your areas of interest."
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ isDarkMode, icon, title, description, items }) => (
    <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="text-blue-500 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            {description}
        </p>
        <ul className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2 ml-4 list-disc`}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

const DetailCard = ({ isDarkMode, title, items }) => (
    <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ValidateIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const GenerateIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const StrategyIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);

export default LearnMoreSection;