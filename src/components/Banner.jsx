import React from 'react';

const Banner = ({ h, p, b,hi,k, children }) => {
  return (
    <div className= {`bg-[rgba(149,56,226,1)] p-8 text-center relative px-5 pb-20 ${hi && `h-${hi}`} h-[400px] `}>
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mb-4 w-2/3 mx-auto">
        {h || 'Default Title'}
      </h1>
      
      {/* Paragraph */}
      <p className="text-sm text-white mb-6">
        {p || b || 'Default description text goes here.'}
      </p>

      {/* Render Children */}
     

      {/* Example "Shop Now" button */}
      <button className={`bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-color ${k === 'hidden' ? 'hidden' : ''}`}>
      {b}
      </button>
      {children}
    </div>
  );
};

export default Banner;
