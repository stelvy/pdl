import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

const DetailedPlanPage = ({ plan, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-600 transition duration-300"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Plans
      </button>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={plan.image} alt={plan.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{plan.title}</h1>
          <p className="text-gray-600 mb-6">{plan.fullDescription}</p>
          <h2 className="text-2xl font-semibold mb-4">What's Included:</h2>
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-blue-600">${plan.price}</span>
              <span className="text-gray-500">/month</span>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPlanPage;