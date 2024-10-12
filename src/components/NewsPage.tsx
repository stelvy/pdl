import React from 'react';

const NewsPage = () => {
  const newsItems = [
    {
      title: "New Study Reveals Benefits of Intermittent Fasting",
      content: "A recent study published in the Journal of Nutrition has shown significant health benefits associated with intermittent fasting...",
      date: "2023-03-15"
    },
    {
      title: "5 Essential Exercises for Core Strength",
      content: "Building a strong core is crucial for overall fitness. Our trainers have compiled a list of 5 essential exercises that target your core muscles...",
      date: "2023-03-10"
    },
    {
      title: "The Rise of Plant-Based Proteins in Sports Nutrition",
      content: "More athletes are turning to plant-based protein sources. We explore the benefits and potential considerations of this growing trend...",
      date: "2023-03-05"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{item.date}</p>
            <p className="text-gray-600">{item.content}</p>
            <button className="mt-4 text-blue-500 hover:text-blue-600 transition duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;