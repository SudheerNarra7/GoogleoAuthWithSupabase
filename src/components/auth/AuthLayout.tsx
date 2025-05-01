import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-14 w-14 bg-indigo-600 rounded-xl mb-4 shadow-md">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 mt-2">{subtitle}</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-8 transition-all duration-300 hover:shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;