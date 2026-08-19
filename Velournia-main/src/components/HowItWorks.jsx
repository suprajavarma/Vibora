import React from 'react';

const steps = [
    { num: '01', title: 'Choose Design', desc: 'Browse our collections' },
    { num: '02', title: 'Customize', desc: 'Add your personal touch' },
    { num: '03', title: 'Confirm & Pay', desc: 'Secure WhatsApp order' },
    { num: '04', title: 'Delivered with Love', desc: 'Same-day delivery available' }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-[34px] font-semibold text-[#222] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How It Works</h2>
                <p className="text-gray-500 text-[16px] mb-20 font-light">Four simple steps to the perfect gift</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 lg:gap-4 max-w-4xl mx-auto">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center z-10 w-full px-2">
                            <div className="w-[80px] h-[80px] rounded-full border-2 border-[#D4A5A5] bg-[#D4A5A5]/10 flex items-center justify-center text-[#D4A5A5] text-[28px] mb-6 font-semibold" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                <span>{step.num}</span>
                            </div>
                            <h3 className="text-[#333] text-[18px] font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                            <p className="text-gray-500 text-[14px] font-light">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
