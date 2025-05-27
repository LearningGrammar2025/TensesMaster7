import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import TensesSummary from '../components/Home/TensesSummary';
import CallToAction from '../components/Home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <TensesSummary />
      <CallToAction />
    </div>
  );
};

export default HomePage;