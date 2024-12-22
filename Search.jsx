import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Hydrating Serum', description: 'For smooth, glowing skin.', image: 'path/to/product1.jpg' },
  { id: 2, name: 'Anti-Aging Cream', description: 'Reduce fine lines and wrinkles.', image: 'path/to/product2.jpg' },
  { id: 3, name: 'Brightening Mask', description: 'For a radiant complexion.', image: 'path/to/product3.jpg' },
  // Add more products as needed
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    if (query === '') {
      setFilteredProducts(products); // Reset to all products if search query is empty
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-red-500"
        />
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Search Results</h2>
      </div>

      {/* Display filtered products */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProducts.length === 0 ? (
          <p className="text-lg text-gray-500">No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg w-80">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition">
                Buy Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
