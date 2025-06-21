
import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, Star } from 'lucide-react';

const Team = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', message: '', rating: 5 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Team & Contact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our development team and project supervisors
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Team Member Template - Replace with actual details */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student Name 1</h3>
              <p className="text-gray-600 mb-1">Roll No: XXX-XXX-XXX</p>
              <p className="text-gray-600 mb-3">Lead Developer</p>
              <div className="flex justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <Phone className="w-5 h-5 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student Name 2</h3>
              <p className="text-gray-600 mb-1">Roll No: XXX-XXX-XXX</p>
              <p className="text-gray-600 mb-3">Backend Developer</p>
              <div className="flex justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <Phone className="w-5 h-5 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student Name 3</h3>
              <p className="text-gray-600 mb-1">Roll No: XXX-XXX-XXX</p>
              <p className="text-gray-600 mb-3">Frontend Developer</p>
              <div className="flex justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <Phone className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          {/* Guide Information */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Supervision</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Project Guide</h4>
                <p className="text-gray-600 mb-1">Dr. [Guide Name]</p>
                <p className="text-gray-600 mb-1">Professor, Department of [Department]</p>
                <p className="text-gray-600 mb-3">[University/Institution Name]</p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">guide.email@university.edu</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Department Head</h4>
                <p className="text-gray-600 mb-1">Dr. [HOD Name]</p>
                <p className="text-gray-600 mb-1">Head of Department, [Department]</p>
                <p className="text-gray-600 mb-3">[University/Institution Name]</p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hod.email@university.edu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <MessageSquare className="w-8 h-8 mr-3 text-blue-600" />
              Feedback Form
            </h3>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                  Rate Our Project
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className={`p-1 ${star <= formData.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                  <span className="ml-2 text-gray-600">({formData.rating}/5)</span>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please share your thoughts about our Smart Traffic Management System..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>project.email@university.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-600" />
                <span>+1 (XXX) XXX-XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
