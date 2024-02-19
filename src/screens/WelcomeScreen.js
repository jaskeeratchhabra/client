import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-500">
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .animate-fade-in {
            animation: fadeIn 2s ease-in-out;
          }
        `}
      </style>
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl text-gray-800 font-bold mb-4">Welcome to pgDekho</h1>
        <p className="text-lg text-white mb-8">Sign up / Login to proceed</p>
        <Link to="/register" className="px-6 py-3 m-4 bg-blue-500 text-white rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-600">Sign Up</Link>
        <Link to="/login" className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-600">Login</Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
