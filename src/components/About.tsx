
import React from 'react';
import { AlertTriangle, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Project</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the challenges and solutions in weather-based traffic management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <AlertTriangle className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem Statement</h3>
            <p className="text-gray-600 leading-relaxed">
              Weather conditions significantly impact traffic flow and road safety. Current traffic management 
              systems lack real-time weather integration, leading to inefficient routing and increased accident 
              risks during adverse weather conditions such as heavy rain, fog, snow, and storms.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <Target className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h3>
            <p className="text-gray-600 leading-relaxed">
              Our Smart Traffic Management System integrates real-time weather data with traffic monitoring 
              to provide intelligent route suggestions, disruption alerts, and emergency response coordination. 
              The system aims to reduce travel time, improve road safety, and enhance overall traffic efficiency 
              during weather-related disruptions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <Users className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Partner Need</h3>
            <p className="text-gray-600 leading-relaxed">
              Local transportation authorities and emergency services require a unified platform that can 
              predict weather-related traffic disruptions, coordinate emergency responses, and provide 
              real-time updates to commuters. This system addresses the critical need for proactive 
              traffic management during adverse weather conditions.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Key Objectives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-gray-700">Integrate real-time weather and traffic data for comprehensive monitoring</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-gray-700">Provide intelligent route optimization based on weather conditions</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-gray-700">Enable proactive disruption alerts and emergency coordination</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-gray-700">Enhance road safety through predictive analytics and real-time updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
