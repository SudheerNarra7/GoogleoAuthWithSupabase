import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, Star, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">FarmFresh Market</h1>
            </div>
            <nav className="flex items-center space-x-4">
              {currentUser ? (
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
                  <Link to="/signup" className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Fresh from Farm to Table
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Connect directly with local farmers and get fresh produce delivered to your doorstep.
            </p>
            <div className="mt-8">
              <Link to="/signup" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Users className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Connect with Farmers</h3>
              <p className="mt-2 text-gray-600">Build direct relationships with local farmers and support your community.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Star className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Premium Quality</h3>
              <p className="mt-2 text-gray-600">Get access to the freshest and highest quality produce available.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Local Sourcing</h3>
              <p className="mt-2 text-gray-600">All products are sourced from farms within your local area.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;