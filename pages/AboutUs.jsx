import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">About Us</h2>
        <p className="text-lg text-gray-600 mt-4">Our journey to create natural and effective skincare products.</p>
      </div>

      {/* Our Story Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          PureSkin was founded with a mission to provide high-quality skincare products that not only deliver results but also promote a natural, healthy glow. Our team of skincare experts and beauty enthusiasts carefully crafts each product with the finest natural ingredients. We believe that glowing skin starts with healthy habits and self-care, which is why our products are designed to cater to all skin types and concerns.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          With a commitment to sustainability, we also strive to reduce our environmental impact by using eco-friendly packaging and supporting ethical practices in sourcing our ingredients. We are passionate about helping you achieve radiant, healthy skin at every stage of life.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to provide everyone with access to effective, safe, and eco-friendly skincare. We believe that beauty is not just skin deep – it’s about feeling confident, empowered, and embracing self-care routines that nourish your mind and body.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">Meet the Team</h3>
        <div className="flex justify-center gap-12 flex-wrap">
          {/* Team Member 1 */}
          <div className="w-72 text-center">
            <img
              src="path/to/team-member1.jpg"
              alt="Team Member 1"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">Sarah Johnson</h4>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="w-72 text-center">
            <img
              src="path/to/team-member2.jpg"
              alt="Team Member 2"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">Michael Lee</h4>
            <p className="text-gray-600">Head of Product Development</p>
          </div>
          {/* Team Member 3 */}
          <div className="w-72 text-center">
            <img
              src="path/to/team-member3.jpg"
              alt="Team Member 3"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">Emma Williams</h4>
            <p className="text-gray-600">Skincare Expert</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
