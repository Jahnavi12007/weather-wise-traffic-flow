
import React from 'react';
import { Zap, Brain, Globe, Smartphone, Car, Cloud } from 'lucide-react';

const FutureWork = () => {
  const futureEnhancements = [
    {
      icon: Brain,
      title: "Advanced AI Integration",
      description: "Implement deep learning models for more accurate weather prediction and traffic pattern analysis.",
      timeline: "Phase 1 (6 months)"
    },
    {
      icon: Car,
      title: "Autonomous Vehicle Support",
      description: "Integration with autonomous vehicle systems for seamless weather-aware navigation.",
      timeline: "Phase 2 (12 months)"
    },
    {
      icon: Globe,
      title: "Multi-City Expansion",
      description: "Scale the system to cover multiple cities and regions with localized weather patterns.",
      timeline: "Phase 2 (12 months)"
    },
    {
      icon: Smartphone,
      title: "IoT Sensor Network",
      description: "Deploy IoT sensors for hyper-local weather and road condition monitoring.",
      timeline: "Phase 3 (18 months)"
    },
    {
      icon: Cloud,
      title: "Predictive Analytics",
      description: "Advanced weather modeling for long-term traffic planning and infrastructure management.",
      timeline: "Phase 3 (18 months)"
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "Dynamic traffic light control and road management based on weather conditions.",
      timeline: "Phase 4 (24 months)"
    }
  ];

  return (
    <section id="future" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Future Work & Enhancements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Roadmap for expanding and improving the Smart Traffic Management System
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {futureEnhancements.map((enhancement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <enhancement.icon className="w-12 h-12 text-blue-600 mb-4" />
              <div className="mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {enhancement.timeline}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{enhancement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{enhancement.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Roadmap</h3>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  Phase 1
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-sem text-gray-900 mb-2">Enhanced Intelligence (0-6 months)</h4>
                <p className="text-gray-600">Focus on improving AI algorithms, machine learning models, and predictive capabilities for better accuracy in weather-traffic correlation.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  Phase 2
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Expansion & Integration (6-12 months)</h4>
                <p className="text-gray-600">Scale to multiple cities, integrate with autonomous vehicle systems, and establish partnerships with transportation authorities.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  Phase 3
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">IoT & Advanced Analytics (12-18 months)</h4>
                <p className="text-gray-600">Deploy IoT sensor networks, implement advanced predictive analytics, and develop comprehensive weather modeling systems.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  Phase 4
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Infrastructure (18-24 months)</h4>
                <p className="text-gray-600">Implement dynamic traffic control systems, smart infrastructure management, and comprehensive city-wide optimization.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Research Opportunities</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Climate change impact on traffic patterns</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Machine learning for extreme weather prediction</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Urban planning optimization using weather data</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Emergency response coordination algorithms</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Partnership Goals</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Municipal transportation authorities</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Weather service providers and meteorological departments</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Emergency services and first responders</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Automotive and navigation technology companies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureWork;
