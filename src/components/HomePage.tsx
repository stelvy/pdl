import React from 'react';
import { Dumbbell, Apple } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to NutriTrain</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Apple className="mr-2 text-green-500" /> Nutrition
          </h2>
          <p className="text-gray-600">
            Discover the power of balanced nutrition. Our expert-crafted meal plans and nutritional advice will help you fuel your body for optimal performance and health.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Dumbbell className="mr-2 text-blue-500" /> Training
          </h2>
          <p className="text-gray-600">
            Transform your body and mind with our comprehensive training programs. Whether you're a beginner or an athlete, we have the perfect workout plan for you.
          </p>
        </div>
      </div>
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-gray-600 mb-4">
          Join NutriTrain and start your journey towards a healthier, stronger you. Our personalized approach combines nutrition and training to help you achieve your fitness goals.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;