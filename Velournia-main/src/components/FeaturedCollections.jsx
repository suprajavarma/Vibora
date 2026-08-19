import React from "react";

import pic7 from "../assets/collection/Picture7.png";
import pic8 from "../assets/collection/Picture8.png";
import pic9 from "../assets/collection/Picture9.png";
import pic10 from "../assets/collection/Picture10.png";
import pic11 from "../assets/collection/Picture11.png";
import pic12 from "../assets/collection/Picture12.png";
import pic13 from "../assets/collection/Picture13.png";
import pic14 from "../assets/collection/Picture14.png";
import pic15 from "../assets/collection/Picture15.png";
import pic16 from "../assets/collection/Picture16.png";
import pic17 from "../assets/collection/Picture17.png";
import addon1 from "../assets/addons/Picture1.png";
import addon2 from "../assets/addons/Picture2.png";
import addon3 from "../assets/addons/Picture3.png";
import addon4 from "../assets/addons/Picture4.png";
import addon5 from "../assets/addons/Picture5.png";
import addon6 from "../assets/addons/Picture6.png";
import flower1 from "../assets/collection/flowerbouquet1.png";
import flower3 from "../assets/collection/bouquet3.png";
import singleflower from "../assets/collection/singleflower.png";
import balloonone from "../assets/collection/balloon1.png";

const boboBalloons = [
  { name: "Bobo Balloon Teddy - Small", price: "₹249", img: balloonone },
  { name: "Bobo Balloon Teddy - Medium", price: "₹549", img: pic13 },
  { name: "Bobo Balloon Teddy - Large", price: "₹949", img: pic12 },
];

const pipeCleaners = [
  { name: "Pipe Cleaners Bobo - Small", price: "₹249", img: singleflower },
  { name: "Pipe Cleaners Bobo - Medium", price: "₹549", img: flower1 },
  { name: "Pipe Cleaners Bobo - Large", price: "₹949", img: flower3 },
];

const combos = [
  { name: "Combo Bouquet - Small", price: "₹499", img: pic16 },
  { name: "Combo Bouquet - Medium", price: "₹849", img: pic17 },
  { name: "Combo Bouquet - Large", price: "₹1,499", img: pic11 },
];

const addons = [
  { name: "Accessories Bouquet", price: "From ₹349", img: addon2 },
  { name: "Add On Option 1", price: "Custom", img: addon3 },
  { name: "Add On Option 2", price: "Custom", img: addon4 },
  { name: "Add On Option 3", price: "Custom", img: addon5 },
  { name: "Add On Option 4", price: "Custom", img: addon6 },
];

const ProductCard = ({ prod }) => (
  <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
    <div className="aspect-square w-full overflow-hidden bg-[#faf8f5]">
      <img
        src={prod.img}
        alt={prod.name}
        className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
          prod.img === balloonone ? "object-top" : "object-center"
        }`}
      />
    </div>
    <div className="p-5 flex flex-col bg-white">
      <h3 className="font-serif text-[17px] text-[#333] font-medium tracking-wide mb-3 leading-snug">
        {prod.name}
      </h3>
      <div className="flex justify-between items-center">
        <p className="text-[#d8a8a4] font-medium text-[19px] tracking-wide">
          {prod.price}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event("open-customize-modal"));
          }}
          className="bg-[#dfb2af] text-white px-5 py-1.5 rounded-full text-[13px] font-medium tracking-wide hover:bg-[#c69a97] transition-colors duration-300 whitespace-nowrap cursor-pointer"
        >
          Customize
        </button>
      </div>
    </div>
  </div>
);

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#333] mb-3">
            Featured Collections
          </h2>
          <p className="text-gray-500 text-sm tracking-wide">
            Curated luxury gifts that make hearts flutter
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif text-[#333] mb-8 border-b pb-4">
            Pipe Cleaners Bouquet{" "}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pipeCleaners.map((prod, idx) => (
              <ProductCard key={idx} prod={prod} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif text-[#333] mb-8 border-b pb-4">
            Bobo Balloon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boboBalloons.map((prod, idx) => (
              <ProductCard key={idx} prod={prod} />
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-serif text-[#333] mb-8 border-b pb-4">
            Combo of Both
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {combos.map((prod, idx) => (
              <ProductCard key={idx} prod={prod} />
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#333] mb-3">Add-Ons</h2>
          <p className="text-gray-500 text-sm tracking-wide">
            Perfect little extras to complete your gift
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addons.map((prod, idx) => (
            <ProductCard key={idx} prod={prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
