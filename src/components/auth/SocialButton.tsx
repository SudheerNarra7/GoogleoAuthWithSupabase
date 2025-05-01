import React from 'react';

interface SocialButtonProps {
  provider: string;
  icon: React.ReactNode;
  onClick: () => void;
  loading?: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  icon,
  onClick,
  loading = false,
}) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-3"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <span className="mr-2">{icon}</span>
      )}
      <span className="text-gray-700 font-medium">
        {loading ? 'Connecting...' : `Continue with ${provider}`}
      </span>
    </button>
  );
};

export default SocialButton;