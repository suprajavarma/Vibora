import React, { useState, useEffect } from 'react';
import luxuryBalloonSvg from '../assets/Luxury balloon bouquet.svg';
import profilePic from '../assets/collection/Picture11.png';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        occasion: '',
        collection: '',
        message: '',
        color: '',
        phone: '',
        email: '',
        hasReferencePhoto: false
    });

    useEffect(() => {
        const handleOpenModal = () => setIsModalOpen(true);
        window.addEventListener('open-customize-modal', handleOpenModal);
        return () => window.removeEventListener('open-customize-modal', handleOpenModal);
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, occasion, collection, message, color, phone, email, hasReferencePhoto } = formData;
        
        let text = `Hello Velournia, I would like to customize a gift!\n\n`;
        text += `*Name:* ${name}\n`;
        text += `*Occasion:* ${occasion}\n`;
        text += `*Collection:* ${collection}\n`;
        text += `*Phone:* ${phone}\n`;
        if (email) text += `*Email:* ${email}\n`;
        if (color) text += `*Color Preference:* ${color}\n`;
        if (message) text += `*Personal Message:* ${message}\n`;
        
        if (hasReferencePhoto) {
            text += `\n*Note:* I have an inspiration photo to share! I will send it to you directly below.`;
        }
        
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/918897748920?text=${encodedText}`;
        window.open(whatsappUrl, '_blank');
        setIsModalOpen(false);
    };

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#fdf7f6] via-[#f8ede9] to-[#f4dfda]">
            {/* Transparent background girl image */}
            <div className="absolute inset-0 z-0 flex items-start justify-center  opacity-70 pointer-events-none">
                <img
                    src={luxuryBalloonSvg}
                    alt="Background Model"
                    className="w-auto h-auto min-w-[120%] min-h-[120%] -translate-y-[15%] object-cover object-top mix-blend-multiply"
                    style={{ filter: 'contrast(0.9) brightness(1.1)' }}
                />
            </div>

            {/* Gradient overlay to fade out the edges, bottom, and top to match the new background gradient */}
            <div className="absolute inset-x-0 top-0 h-40 md:h-56 bg-gradient-to-b from-[#fdf7f6] via-[#fdf7f6]/90 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#f4dfda] via-[#f8ede9]/80 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#fdf7f6] to-transparent z-0 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#f4dfda] to-transparent z-0 pointer-events-none"></div>

            <div className="relative z-10 text-center flex flex-col items-center max-w-4xl px-6 w-full">
                <span className="text-[#d8a8a4] tracking-wider mb-2" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '36px' }}>
                    Handcrafted with love
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-serif text-[#2d3032] mb-4 leading-tight font-bold tracking-tight">
                    Where Every Gift Feels Magical
                </h1>

                <p className="text-gray-500 mb-8 tracking-wide text-[14.5px] font-light">
                    Luxury Customized Balloon Bouquets & Personalized Gifts
                </p>

                <div className="flex flex-row items-center justify-center gap-4 mb-14">
                    <button onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#dfb2af] text-white px-8 py-3 rounded-full text-[15px] font-medium tracking-wide hover:bg-[#d49996] hover:shadow-md transition-all duration-300 cursor-pointer">
                        Shop Now
                    </button>
                    <button onClick={() => setIsModalOpen(true)} className="bg-transparent border border-[#cdad3d] text-gray-500 px-8 py-3 rounded-full text-[15px] font-medium tracking-wide hover:bg-[#cdad3d] hover:text-white hover:border-[#cdad3d] hover:shadow-md transition-all duration-300">
                        Customize Your Gift
                    </button>
                </div>

                <div className="w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative mt-2">
                    <img src={profilePic} alt="Featured Collection" className="w-full h-full object-cover" />
                </div>

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 pointer-events-auto">
                    <div className="bg-[#cfcdcc] w-full max-w-2xl rounded-2xl shadow-xl relative animate-in fade-in zoom-in-95 duration-200 max-h-[96vh] flex flex-col">
                        <div className="p-5 sm:p-7 overflow-y-auto rounded-2xl">
                            <div className="flex justify-between items-center mb-5 shrink-0">
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#333]">Customize Your Gift</h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-black transition-colors rounded-full p-1 hover:bg-black/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[#4a4a4a] text-[13px] font-medium mb-1">Your Name *</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" className="w-full bg-white border-0 rounded-xl px-4 py-2.5 text-[#333] placeholder-gray-300 focus:ring-2 focus:ring-[#dfb2af] outline-none transition-all shadow-sm" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[#4a4a4a] text-[13px] font-medium mb-1">Occasion *</label>
                                        <select required name="occasion" value={formData.occasion} onChange={handleInputChange} className="w-full bg-white border-0 rounded-xl px-4 py-2.5 text-[#333] focus:ring-2 focus:ring-[#dfb2af] outline-none transition-all shadow-sm appearance-none">
                                            <option value="" disabled>Select Occasion</option>
                                            <option value="Birthday">Birthday</option>
                                            <option value="Anniversary">Anniversary</option>
                                            <option value="Proposal">Proposal</option>
                                            <option value="Baby Shower">Baby Shower</option>
                                            <option value="Graduation">Graduation</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[#4a4a4a] text-[13px] font-medium mb-1">Collection *</label>
                                        <select required name="collection" value={formData.collection} onChange={handleInputChange} className="w-full bg-white border-0 rounded-xl px-4 py-2.5 text-[#333] focus:ring-2 focus:ring-[#dfb2af] outline-none transition-all shadow-sm appearance-none">
                                            <option value="" disabled>Select Collection</option>
                                            <option value="Bobo Balloon - Teddy">Bobo Balloon - Teddy</option>
                                            <option value="Bobo Flower">Bobo Flower</option>
                                            <option value="Combo Bouquet">Combo Bouquet</option>
                                            <option value="Accessories Bouquet">Accessories Bouquet</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[#4a4a4a] text-[13px] font-medium mb-1">Personal Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Add a special message..." rows="2" className="w-full bg-white border-0 rounded-xl px-4 py-2.5 text-[#333] placeholder-gray-300 focus:ring-2 focus:ring-[#dfb2af] outline-none transition-all shadow-sm resize-none"></textarea>
                                </div>

                                <div>
                                    <label className="block text-[#4a4a4a] text-[13px] font-medium mb-1">Color Preference</label>
                                    <input type="text" name="color" value={formData.color} onChange={handleInputChange} placeholder="e.g., Pink & Gold, Pastel Blue" className="w-full bg-white border-0 rounded-xl px-4 py-2.5 text-[#333] placeholder-gray-300 focus:ring-2 focus:ring-[#dfb2af] outline-none transition-all shadow-sm" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[#4a4a4a] text-[13px] font-medium mb-1">Phone Number *</label>
                                        <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" className="w-full bg-white border-0 rounded-xl px-4 py-2.5 text-[#333] placeholder-gray-300 focus:ring-2 focus:ring-[#dfb2af] outline-none transition-all shadow-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-[#4a4a4a] text-[13px] font-medium mb-1">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" className="w-full bg-white border-0 rounded-xl px-4 py-2.5 text-[#333] placeholder-gray-300 focus:ring-2 focus:ring-[#dfb2af] outline-none transition-all shadow-sm" />
                                    </div>
                                </div>

                                <div className="bg-[#fdf9f8] border border-[#f5e8e7] rounded-xl px-4 py-3.5 flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d8a8a4] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-[13px] font-medium text-[#4a4a4a] mb-0.5">Have an inspiration photo?</p>
                                        <p className="text-[12px] text-gray-500 leading-snug">
                                            We can't upload photos automatically to WhatsApp yet. Check the box below, and simply send us your photo directly in the chat!
                                        </p>
                                    </div>
                                </div>
                                
                                <label className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                                    <input 
                                        type="checkbox" 
                                        name="hasReferencePhoto" 
                                        checked={formData.hasReferencePhoto} 
                                        onChange={handleInputChange} 
                                        className="w-4 h-4 rounded text-[#dfb2af] border-gray-300 focus:ring-[#dfb2af] focus:ring-2 cursor-pointer transition-all"
                                    />
                                    <span className="text-[#4a4a4a] text-[13px] font-medium select-none">
                                        Yes, I'll send a reference photo in the chat
                                    </span>
                                </label>

                                <div className="flex flex-col sm:flex-row gap-3 pt-2 mt-4 shrink-0">
                                    <button type="submit" className="flex-1 bg-[#d8a8a4] text-white py-2.5 rounded-full font-medium tracking-wide hover:bg-[#c69a97] transition-colors shadow-sm text-[14px]">
                                        Submit Order
                                    </button>
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-2.5 rounded-full font-medium tracking-wide text-[#686868] bg-transparent border border-[#cdad3d] hover:bg-[#cdad3d] hover:text-white transition-all text-[14px]">
                                        Cancel
                                    </button>
                                </div>
                                <div className="text-center shrink-0">
                                    <p className="text-[#686868] text-[12px] bg-black/5 w-max mx-auto px-4 py-1.5 rounded-lg">After submitting, you'll be redirected to WhatsApp to finalize your order</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
