import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Cleansers', path: '/categories/cleansers' },
    { name: 'Moisturizers', path: '/categories/moisturizers' },
    { name: 'Serums', path: '/categories/serums' },
    { name: 'Sunscreens', path: '/categories/sunscreens' },
    { name: 'Face Masks', path: '/categories/face-masks' },
    { name: 'Exfoliators', path: '/categories/exfoliators' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <Link
              to={category.path}
              className="text-green-600 font-semibold hover:underline"
            >
              Explore {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

