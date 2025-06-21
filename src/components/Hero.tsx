
import React from 'react';
import { Cloud, Car, MapPin, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Smart Traffic Management for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Weather-Based Disruptions
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            An innovative app that tackles traffic disruptions caused by rain, fog, snow, and storms 
            by integrating real-time weather and traffic data for safe and efficient travel.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Cloud className="w-12 h-12 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Weather Integration</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Car className="w-12 h-12 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Traffic Monitoring</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <MapPin className="w-12 h-12 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Route Optimization</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Shield className="w-12 h-12 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Safety First</h3>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              View Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
