import React from 'react';

const occasions = [
    { icon: '🎂', label: 'Birthday' },
    { icon: '💕', label: 'Anniversary' },
    { icon: '💍', label: 'Proposal' },
    { icon: '👶', label: 'Baby Shower' },
    { icon: '🎓', label: 'Graduation' },
    { icon: '💼', label: 'Corporate' },
];

export default function ShopByOccasion() {
    return (
        <section className="py-24 bg-[#fcf8f8] relative overflow-hidden">
            {/* Subtle radial gradients behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-64 bg-gradient-to-r from-transparent via-[#faeaea] to-transparent opacity-60 blur-3xl pointer-events-none rounded-[100%]"></div>
            
            <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
                <h2 className="text-[34px] font-serif font-medium text-[#2d3032] mb-3">Shop by Occasion</h2>
                <p className="text-gray-500 font-light text-[15px] mb-14 tracking-wide">Find the perfect gift for every special moment</p>

                <div className="flex flex-wrap justify-center gap-5 md:gap-6">
                    {occasions.map((occ, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-[16px] w-[160px] h-[110px] flex flex-col items-center justify-center shadow-[0_4px_25px_rgba(235,210,210,0.5)] hover:shadow-[0_8px_30px_rgba(235,210,210,0.8)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <span className="text-[42px] leading-none mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm inline-block translate-y-1" style={{fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Segoe UI Symbol", sans-serif'}}>{occ.icon}</span>
                            <span className="text-[#2d3032] font-medium font-serif text-[15px]">{occ.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
