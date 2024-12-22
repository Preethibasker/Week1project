import React from 'react';
import serum from '../assets/serum.jpg';
import anti from '../assets/135_AntiAgeingNightCream_both-scaled.jpg';
import Bright from '../assets/brighteningmask.webp';

const Home = () => {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <div className="logo">
          <h1 className="text-3xl font-semibold">GlowSkin</h1>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#products" className="hover:text-gray-400">Products</a></li>
          <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6836093.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-white p-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Glow from Within</h2>
            <p className="text-lg mb-6">Your skincare journey starts here.</p>
            <a href="#products" className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition">Shop Now</a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-10">Featured Products</h2>
        <div className="flex justify-center space-x-8 flex-wrap">
          {/* Product 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <img src={serum} alt="Hydrating Serum" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Hydrating Serum</h3>
            <p className="text-gray-600 mb-4">For smooth, glowing skin.</p>
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition">Buy Now</button>
          </div>
          {/* Product 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <img src={anti} alt="Anti-Aging Cream" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Anti-Aging Cream</h3>
            <p className="text-gray-600 mb-4">Reduce fine lines and wrinkles.</p>
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition">Buy Now</button>
          </div>
          {/* Product 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <img src={Bright} alt="Brightening Mask" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Brightening Mask</h3>
            <p className="text-gray-600 mb-4">For a radiant complexion.</p>
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition">Buy Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
