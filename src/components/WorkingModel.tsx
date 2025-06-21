
import React from 'react';
import { Layers, ArrowDown, Database, Cpu, Smartphone } from 'lucide-react';

const WorkingModel = () => {
  return (
    <section id="model" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Working Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            System architecture and application flow of our Smart Traffic Management System
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">System Architecture</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Collection Layer</h4>
                  <p className="text-gray-600">
                    Weather APIs, traffic sensors, GPS data, and emergency service feeds are continuously monitored 
                    and collected for real-time processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Processing Engine</h4>
                  <p className="text-gray-600">
                    Machine learning algorithms analyze weather patterns, predict disruptions, and calculate 
                    optimal routes based on current conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">User Interface Layer</h4>
                  <p className="text-gray-600">
                    Web dashboard and mobile applications provide real-time updates, alerts, and route 
                    recommendations to users and traffic management authorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Application Flow</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-gray-700">Real-time data collection from weather and traffic sources</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-gray-700">Data processing and analysis using ML algorithms</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-gray-700">Disruption prediction and route optimization</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <p className="text-gray-700">Alert generation and user notification</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <p className="text-gray-700">Emergency service coordination when required</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">System Block Diagram</h4>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Layers className="w-20 h-20 mx-auto mb-4 text-gray-600" />
                  <p className="text-gray-600 font-medium">Block Diagram</p>
                  <p className="text-sm text-gray-500 mt-2">(Upload your system block diagram here)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Frontend</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• React.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• React Native (Mobile)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Backend</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Node.js/Python</li>
                    <li>• Express/FastAPI</li>
                    <li>• MongoDB/PostgreSQL</li>
                    <li>• Redis (Caching)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingModel;
