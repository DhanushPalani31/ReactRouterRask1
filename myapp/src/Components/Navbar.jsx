import React from 'react';

export default function Navbar({ cartDetails, onCartClick }) {
  return (
    <div className="w-full p-4 flex items-center justify-between bg-gray-400">
      <div className="text-xl font-bold">MART</div>
      <button
        onClick={onCartClick}
        className="relative p-2 px-6 font-semibold bg-amber-400 rounded-sm"
      >
        Cart
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartDetails.length}
        </span>
      </button>
    </div>
  );
}
