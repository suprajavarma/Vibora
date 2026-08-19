import React from 'react';

import heartIcon from '../assets/icons/heart.svg';
import twinkleIcon from '../assets/icons/twinkle.svg';
import giftIcon from '../assets/icons/gift.svg';
import starIcon from '../assets/icons/star.svg';

const reasons = [
    {
        icon: <img src={heartIcon} alt="Heart" className="w-14 h-14 mb-6 transition-transform duration-300 group-hover:scale-110" />,
        title: 'Handcrafted with Love',
        desc: 'Every piece is made with attention to detail'
    },
    {
        icon: <img src={twinkleIcon} alt="Sparkles" className="w-14 h-14 mb-6 transition-transform duration-300 group-hover:scale-110" />,
        title: 'Premium Imported Balloons',
        desc: 'Highest quality materials for lasting beauty'
    },
    {
        icon: <img src={giftIcon} alt="Gift" className="w-14 h-14 mb-6 transition-transform duration-300 group-hover:scale-110" />,
        title: 'Same-Day Delivery',
        desc: 'Express delivery available across the city'
    },
    {
        icon: <img src={starIcon} alt="Star" className="w-14 h-14 mb-6 transition-transform duration-300 group-hover:scale-110" />,
        title: 'Custom Designs',
        desc: 'Personalized for every special occasion'
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#D4A5A5]/10">
            <div className="max-w-[1400px] mx-auto px-6 text-center">
                <h2 className="text-[34px] font-semibold text-[#222] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Why Choose Velournia</h2>
                <p className="text-gray-500 text-[16px] mb-20 font-light">Crafting moments that last forever</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-[#FAF9F6] p-10 rounded-2xl border border-transparent hover:bg-white hover:border-[#dfb2af]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group cursor-default">
                            {item.icon}
                            <h3 className="text-[#222] text-[18px] font-semibold mb-3 leading-tight px-4" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                            <p className="text-gray-500 text-[13px] font-light leading-relaxed max-w-[200px]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
