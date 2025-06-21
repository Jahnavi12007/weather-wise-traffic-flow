
import React from 'react';
import { Cloud, AlertCircle, Navigation, Phone, Monitor, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Cloud,
      title: "Real-time Weather & Traffic Updates",
      description: "Continuous monitoring of weather conditions and traffic patterns with live data integration from multiple sources."
    },
    {
      icon: AlertCircle,
      title: "Disruption Alerts",
      description: "Proactive notifications about weather-related traffic disruptions, road closures, and hazardous conditions."
    },
    {
      icon: Navigation,
      title: "Alternate Route Suggestions",
      description: "Intelligent routing algorithms that suggest optimal alternate paths based on current weather and traffic conditions."
    },
    {
      icon: Phone,
      title: "Emergency Service Access",
      description: "Direct integration with emergency services for quick response coordination during severe weather events."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and capabilities that make our traffic management system effective
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <feature.icon className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">System Interface Screenshots</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <Monitor className="w-6 h-6 mr-3 text-blue-600" />
                Frontend Dashboard
              </h4>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Monitor className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <p className="text-gray-600">Frontend UI Screenshot</p>
                  <p className="text-sm text-gray-500 mt-2">(Upload your dashboard screenshot here)</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Interactive dashboard showing real-time weather conditions, traffic flow, and route recommendations.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <Smartphone className="w-6 h-6 mr-3 text-green-600" />
                Mobile Application
              </h4>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 mx-auto mb-4 text-green-600" />
                  <p className="text-gray-600">Mobile App Screenshot</p>
                  <p className="text-sm text-gray-500 mt-2">(Upload your mobile app screenshot here)</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Mobile interface for commuters to receive alerts, view routes, and access emergency services.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Highlights</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">&lt;2s</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
