// src/pages/Offers.jsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: '20% Off on Laptops',
      description: 'Limited-time offer on selected laptops. Hurry before it’s gone!',
      image: 'https://i.ibb.co.com/DMMyWDC/image.png',
    },
    {
      id: 2,
      title: '15% Off on Smartphones',
      description: 'Grab the latest smartphones at unbeatable prices!',
      image: 'https://i.ibb.co.com/DMMyWDC/image.png',
    },
    {
      id: 3,
      title: 'Buy 1 Get 1 Free - Accessories',
      description: 'Exclusive offer on accessories. Perfect time to upgrade!',
      image: 'https://i.ibb.co.com/DMMyWDC/image.png',
    },
    {
      id: 4,
      title: '30% Off on Smart Watches',
      description: 'Stay smart and stylish with this deal on smartwatches.',
      image: 'https://i.ibb.co.com/DMMyWDC/image.png',
    },
    {
      id: 5,
      title: 'Special Deal on MacBooks',
      description: 'Upgrade to MacBook with our special discount this week!',
      image: 'https://i.ibb.co.com/DMMyWDC/image.png',
    },
    {
      id: 6,
      title: '10% Cashback on All Orders',
      description: 'Get 10% cashback on all orders above $200!',
      image: 'https://i.ibb.co.com/DMMyWDC/image.png',
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
                 <Helmet>
        <title>offer</title>
      </Helmet>
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Exclusive Special Offers</h1>
        <p className="text-lg text-gray-600">
          Discover the best deals on the latest gadgets, accessories, and more. Limited time only!
        </p>
      </header>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <Link to={'/'} >
              <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                Shop Now
              </button></Link>
            </div>
          </div>
        ))}
      </div>

      {/* Highlight Section */}
      <div className="mt-16 bg-blue-100 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Limited-Time Offers</h2>
        <p className="text-gray-600 mb-6">
          These offers won't last long. Take advantage of exclusive deals while stocks last!
        </p>
        <Link to={'/'}>
        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
          Browse All Deals
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Offers;
