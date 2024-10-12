import React from 'react';
import { Dumbbell, Apple, Zap, Star } from 'lucide-react';

const PlanCard = ({ title, description, price, icon: Icon, onSelect }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
    <div className="flex items-center mb-4">
      <Icon className="mr-2 text-blue-500" size={24} />
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
    <p className="text-gray-600 flex-grow">{description}</p>
    <div className="mt-4">
      <span className="text-3xl font-bold text-blue-600">${price}</span>
      <span className="text-gray-500">/month</span>
    </div>
    <button 
      onClick={onSelect}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
    >
      Choose Plan
    </button>
  </div>
);

const PlansPage = ({ onSelectPlan }) => {
  const plans = [
    {
      title: "Training Plan",
      description: "Access to our comprehensive workout library and personalized training programs tailored to your fitness goals.",
      price: 29.99,
      icon: Dumbbell,
      fullDescription: "Our Training Plan is designed to help you achieve your fitness goals through personalized workout programs. You'll have access to our extensive library of exercises, video tutorials, and customized training schedules. Whether you're a beginner or an experienced athlete, our expert trainers will guide you every step of the way.",
      features: [
        "Personalized workout programs",
        "Access to exercise library and video tutorials",
        "Progress tracking and performance analytics",
        "Weekly check-ins with a fitness coach",
        "Mobile app access for on-the-go workouts"
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Nutrition Plan",
      description: "Customized meal plans, nutritional guidance, and access to our recipe database for a healthier lifestyle.",
      price: 24.99,
      icon: Apple,
      fullDescription: "Our Nutrition Plan offers personalized meal planning and nutritional guidance to help you achieve optimal health. You'll receive customized meal plans based on your dietary preferences and goals, along with access to our extensive recipe database. Our certified nutritionists will provide ongoing support and education to help you make informed food choices.",
      features: [
        "Personalized meal plans",
        "Access to recipe database",
        "Nutritional guidance and education",
        "Grocery lists and meal prep tips",
        "Regular consultations with a nutritionist"
      ],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Full Plan",
      description: "Combine our Training and Nutrition plans for a holistic approach to your health and fitness journey.",
      price: 49.99,
      icon: Zap,
      fullDescription: "Our Full Plan combines the best of both worlds, offering a comprehensive approach to your health and fitness. You'll receive all the benefits of our Training and Nutrition plans, allowing you to optimize your workouts and fuel your body for maximum results. This integrated approach ensures that all aspects of your wellness journey are covered.",
      features: [
        "All features of Training and Nutrition plans",
        "Integrated workout and meal planning",
        "Enhanced progress tracking across fitness and nutrition",
        "Priority support from both trainers and nutritionists",
        "Exclusive webinars and workshops on health topics"
      ],
      image: "https://images.unsplash.com/photo-1551763034-7fd9c715f7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Premium Plan",
      description: "Get everything in the Full Plan plus one-on-one coaching sessions, priority support, and exclusive content.",
      price: 79.99,
      icon: Star,
      fullDescription: "Our Premium Plan offers the ultimate personalized experience for those seeking to maximize their health and fitness potential. In addition to all the features of our Full Plan, you'll receive one-on-one coaching sessions, priority support, and access to exclusive content. This plan is perfect for those who want a truly tailored approach and the highest level of support.",
      features: [
        "All features of the Full Plan",
        "Weekly one-on-one coaching sessions",
        "24/7 priority support",
        "Personalized fitness and nutrition strategy sessions",
        "Access to exclusive workshops and events",
        "Advanced health metrics tracking and analysis"
      ],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Plans</h1>
      <p className="text-center text-gray-600 mb-12">Choose the perfect plan to achieve your health and fitness goals</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} onSelect={() => onSelectPlan(plan)} />
        ))}
      </div>
    </div>
  );
};

export default PlansPage;