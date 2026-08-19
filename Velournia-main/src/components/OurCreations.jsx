import React from "react";

import customNameBalloons from "../assets/Custom Name Balloons.svg";
import rosesInBoboBalloon from "../assets/Roses in Bobo Balloon.svg";
import luxuryBalloonBouquet from "../assets/Luxury balloon bouquet.svg";
import teddyInBoboBalloon from "../assets/Teddy in Bobo Balloon.svg";
import personalizedKeychains from "../assets/Personalized Keychains.svg";
import pipeCleanerArtBouquets from "../assets/Pipe Cleaner Art Bouquets.svg";
import flowerBouquet1 from "../assets/collection/flowerbouquet1.png";
import lightbouquet from "../assets/collection/bouquetlight.png";
import flower3 from "../assets/collection/bouquet3.png";
import singleflower from "../assets/collection/singleflower.png";
import balloonone from "../assets/collection/balloon1.png";

const images = [
  flowerBouquet1,
  balloonone,
  flower3,
  lightbouquet,
  singleflower,
  // personalizedKeychains,
  // pipeCleanerArtBouquets,
];

export default function OurCreations() {
  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <div className="mb-16">
          <h2
            className="text-[34px] font-semibold text-[#222] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Creations
          </h2>
          <p className="text-gray-500 text-[16px] font-light">
            Every gift tells a story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden group aspect-square cursor-pointer"
            >
              <img
                src={img}
                alt={`Creation ${idx + 1}`}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  img === balloonone ? "object-top" : "object-center"
                }`}
              />
              {/* Overlay */}
              <a
                href="https://www.instagram.com/_velournia_?igsh=anlzMWpkcTh6emdt&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                {/* Instagram Icon */}
                <svg
                  className="w-16 h-16 text-white drop-shadow-md"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="6"
                    ry="6"
                    strokeWidth="1.5"
                  ></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    strokeWidth="1.5"
                  ></path>
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
