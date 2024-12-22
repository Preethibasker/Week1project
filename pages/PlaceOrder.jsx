import React, { useState } from "react";

const PlaceOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log("Order Details:", orderDetails);
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Place Your Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={orderDetails.name}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block font-medium mb-1">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={orderDetails.address}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={orderDetails.phone}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="paymentMethod" className="block font-medium mb-1">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={orderDetails.paymentMethod}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
