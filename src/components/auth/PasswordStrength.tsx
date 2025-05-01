import React, { useEffect, useState } from 'react';

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const [strength, setStrength] = useState(0);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    calculateStrength(password);
  }, [password]);
  
  const calculateStrength = (password: string) => {
    if (!password) {
      setStrength(0);
      setMessage('');
      return;
    }
    
    let score = 0;
    
    // Length check
    if (password.length > 6) score += 1;
    if (password.length > 10) score += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    setStrength(score);
    
    // Set appropriate message
    if (score === 0) setMessage('Very weak');
    else if (score <= 2) setMessage('Weak');
    else if (score <= 3) setMessage('Medium');
    else if (score <= 4) setMessage('Strong');
    else setMessage('Very strong');
  };
  
  const getColorClass = () => {
    if (strength === 0) return 'bg-gray-200';
    if (strength <= 2) return 'bg-red-500';
    if (strength <= 3) return 'bg-yellow-500';
    if (strength <= 4) return 'bg-green-400';
    return 'bg-green-600';
  };
  
  const getTextColorClass = () => {
    if (strength === 0) return 'text-gray-400';
    if (strength <= 2) return 'text-red-500';
    if (strength <= 3) return 'text-yellow-500';
    if (strength <= 4) return 'text-green-500';
    return 'text-green-600';
  };
  
  const getWidthPercentage = () => {
    if (strength === 0) return '0%';
    return `${(strength / 5) * 100}%`;
  };
  
  if (!password) return null;
  
  return (
    <div className="mt-1 mb-4">
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColorClass()} transition-all duration-300 ease-in-out`}
          style={{ width: getWidthPercentage() }}
        ></div>
      </div>
      <p className={`text-xs mt-1 ${getTextColorClass()} transition-colors duration-300`}>
        {message}
      </p>
    </div>
  );
};

export default PasswordStrength;