import React from 'react';

const SuccessComponent = ({message}) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center" role="alert">
      <svg className="h-6 w-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm9.293-3.707a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L9 10.414l-2.293 2.293a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0z"/>
      </svg>
      <p>{message}</p>
    </div>
  );
};

export default SuccessComponent;
