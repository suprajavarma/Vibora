import React from 'react';

const reviews = [
    { text: "The bobo balloon bouquet with roses was absolutely magical! Made our anniversary unforgettable.", author: "Priya & Rahul", occasion: "Anniversary", rating: 5 },
    { text: "Customized name balloon for my daughter's birthday was perfect. The quality exceeded expectations!", author: "Sneha Patel", occasion: "Birthday", rating: 5 },
    { text: "Proposal setup was dreamy! She said yes and the balloons added that perfect romantic touch.", author: "Arjun Mehta", occasion: "Proposal", rating: 5 },
    { text: "The teddy bear in bobo balloon was the highlight of the baby shower. Everyone loved it!", author: "Kavya Sharma", occasion: "Baby Shower", rating: 5 }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-[D4A5A5]">
            <div className="max-w-[1400px] mx-auto px-6 text-center">
                <h2 className="text-[34px] font-semibold text-[#222] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What Our Clients Say</h2>
                <p className="text-gray-500 text-[16px] mb-20 font-light">Moments that touched hearts</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((rev, idx) => (
                        <div key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-sm text-left flex flex-col justify-between">
                            <div>
                                <div className="text-[#e2ba3d] mb-4 text-[15px] flex space-x-1">
                                    {Array(rev.rating).fill('★').map((star, i) => (
                                        <span key={i}>{star}</span>
                                    ))}
                                </div>
                                <p className="text-[#555] text-[13px] leading-relaxed mb-10">"{rev.text}"</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#333] text-[15px] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{rev.author}</h4>
                                <p className="text-[#D4A5A5] text-[12px]">{rev.occasion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
