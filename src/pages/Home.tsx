import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, BarChartIcon, MapIcon } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to TruckShare AI</h1>
      <p className="text-xl mb-8">Optimize your freight logistics with AI-powered solutions</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<TruckIcon size={48} />}
          title="AI-Based Matching"
          description="Connect shippers and truckers efficiently"
        />
        <FeatureCard
          icon={<BarChartIcon size={48} />}
          title="Dynamic Pricing"
          description="Get real-time, market-driven pricing"
        />
        <FeatureCard
          icon={<MapIcon size={48} />}
          title="Route Optimization"
          description="Save time and fuel with smart routing"
        />
      </div>
      
      <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Get Started
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;