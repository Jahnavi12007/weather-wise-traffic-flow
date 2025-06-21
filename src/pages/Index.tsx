
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import WorkingModel from '../components/WorkingModel';
import FutureWork from '../components/FutureWork';
import Conclusion from '../components/Conclusion';
import Team from '../components/Team';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <Hero />
      <About />
      <Features />
      <WorkingModel />
      <FutureWork />
      <Conclusion />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
