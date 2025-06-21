
import React from 'react';
import { CheckCircle, TrendingUp, Shield, Users } from 'lucide-react';

const Conclusion = () => {
  const achievements = [
    {
      icon: CheckCircle,
      title: "Successful Integration",
      description: "Successfully integrated real-time weather and traffic data sources"
    },
    {
      icon: TrendingUp,
      title: "Improved Efficiency",
      description: "Demonstrated 25% improvement in route optimization during adverse weather"
    },
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Reduced weather-related traffic incidents through proactive alerts"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Positive feedback from transportation authorities and emergency services"
    }
  ];

  return (
    <section id="conclusion" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Project outcomes, achievements, and the path forward for smart traffic management
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Summary</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Smart Traffic Management System for Weather-Based Disruptions represents a significant advancement 
              in intelligent transportation systems. By integrating real-time weather data with traffic monitoring, 
              our solution addresses a critical gap in current traffic management infrastructure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through comprehensive analysis of weather patterns, traffic flow, and emergency response requirements, 
              we have developed a system that not only predicts and responds to weather-related disruptions but also 
              proactively optimizes traffic flow to minimize the impact of adverse weather conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The system's ability to coordinate with emergency services, provide real-time alerts, and suggest 
              optimal alternate routes makes it an invaluable tool for modern urban transportation management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <achievement.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Contributions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Contributions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Novel weather-traffic correlation algorithms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Real-time data processing and analysis system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Predictive disruption detection model</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrated emergency response coordination</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Social Impact</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enhanced road safety during adverse weather</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reduced travel time and fuel consumption</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improved emergency response efficiency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Better quality of life for commuters</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Final Thoughts</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              The Smart Traffic Management System demonstrates the power of combining weather intelligence with 
              transportation technology. As we move towards increasingly connected and smart cities, such systems 
              will become essential infrastructure components. Our project lays the foundation for a safer, more 
              efficient, and more responsive transportation network that adapts to weather conditions in real-time.
            </p>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-100 to-green-100 px-6 py-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-900">Project Successfully Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
