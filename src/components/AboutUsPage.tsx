import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About NutriTrain</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-600 mb-6">
          NutriTrain is dedicated to helping individuals achieve their health and fitness goals through expert nutrition guidance and personalized training programs. Our team of certified nutritionists and fitness professionals is committed to providing you with the knowledge, tools, and support you need to transform your life.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <Award className="mx-auto text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Certified professionals with years of experience in nutrition and fitness.</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto text-green-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
            <p className="text-gray-600">Tailored programs designed to meet your unique needs and goals.</p>
          </div>
          <div className="text-center">
            <Heart className="mx-auto text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Holistic Wellness</h3>
            <p className="text-gray-600">Focus on overall health, combining nutrition, exercise, and lifestyle factors.</p>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At NutriTrain, our mission is to empower individuals to take control of their health through education, support, and actionable strategies. We believe that everyone deserves access to quality nutrition and fitness guidance, and we're committed to making that a reality for our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;