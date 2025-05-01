import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/auth/Button';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <Button 
            variant="outline" 
            onClick={handleLogout} 
            icon={<LogOut className="h-4 w-4" />}
          >
            Sign out
          </Button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome to your dashboard</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-500">
                You are signed in as:
              </p>
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-900">{currentUser?.name || 'User'}</p>
                <p className="text-sm text-gray-500">{currentUser?.email}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              This is a protected route that only authenticated users can access.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;