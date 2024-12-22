import React, { useState } from "react";

const Cart = () => {
  // Example cart items (replace with your own cart state management)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Moisturizing Cream",
      price: 20.0,
      quantity: 2,
      image: "/assets/product1.jpg",
    },
    {
      id: 2,
      name: "Sunscreen SPF 50",
      price: 15.0,
      quantity: 1,
      image: "/assets/product2.jpg",
    },
  ]);

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Update item quantity
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* Quantity Controls */}
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  -
                </button>
                <p className="w-6 text-center">{item.quantity}</p>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-4 flex justify-end">
            <p className="text-lg font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </p>
          </div>

          {/* Checkout Button */}
          <button className="self-end px-4 py-2 bg-blue-500 text-white rounded-md">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
