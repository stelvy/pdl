import React, { useState } from 'react';
import { Menu, X, Home, Newspaper, Users, DollarSign } from 'lucide-react';
import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import AboutUsPage from './components/AboutUsPage';
import PlansPage from './components/PlansPage';
import DetailedPlanPage from './components/DetailedPlanPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'news':
        return <NewsPage />;
      case 'about':
        return <AboutUsPage />;
      case 'plans':
        return selectedPlan ? (
          <DetailedPlanPage plan={selectedPlan} onBack={() => setSelectedPlan(null)} />
        ) : (
          <PlansPage onSelectPlan={setSelectedPlan} />
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <main className="flex-1 p-6">
        {renderPage()}
      </main>

      <nav className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
        <ul className="mt-16 space-y-4">
          <li>
            <button onClick={() => { setCurrentPage('home'); setSelectedPlan(null); toggleMenu(); }} className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Home size={20} className="mr-2" /> Home
            </button>
          </li>
          <li>
            <button onClick={() => { setCurrentPage('news'); setSelectedPlan(null); toggleMenu(); }} className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Newspaper size={20} className="mr-2" /> News
            </button>
          </li>
          <li>
            <button onClick={() => { setCurrentPage('plans'); setSelectedPlan(null); toggleMenu(); }} className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
              <DollarSign size={20} className="mr-2" /> Plans
            </button>
          </li>
          <li>
            <button onClick={() => { setCurrentPage('about'); setSelectedPlan(null); toggleMenu(); }} className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Users size={20} className="mr-2" /> About Us
            </button>
          </li>
        </ul>
      </nav>

      <button onClick={toggleMenu} className="fixed top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md">
        <Menu size={24} />
      </button>
    </div>
  );
}

export default App;