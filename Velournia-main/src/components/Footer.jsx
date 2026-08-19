import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#2a2a2a] text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-8">
                <div className="flex flex-col items-start pr-0 md:pr-12">
                    <h2 className="text-[32px] mb-6 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                        <span className="text-white">Velo<span className="text-[#dfb2af]">urnia</span></span>
                    </h2>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                        Creating magical moments with handcrafted luxury gifts
                    </p>
                    <div className="flex space-x-5">
                        <a href="https://www.instagram.com/_velournia_?igsh=anlzMWpkcTh6emdt&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="4" ry="4" strokeWidth="1.5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line>
                            </svg>
                        </a>
                        <a href="https://wa.me/918897748920" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                            <span className="sr-only">Chat</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:pl-4">
                    <h4 className="mb-6 font-semibold text-white text-[18px]" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li><a href="#collections" onClick={(e) => { e.preventDefault(); document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition cursor-pointer">Collections</a></li>
                        <li><a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition cursor-pointer">Gallery</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-customize-modal')); }} className="hover:text-white transition cursor-pointer">Customize</a></li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="mb-6 font-semibold text-white text-[18px]" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 mr-3 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>Hyderabad, India</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span>+91 8897748920</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span>velournia1601@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
                <div className="border-t border-white/10 pt-8 text-sm text-gray-500">
                    <p>&copy; 2026 Velournia. All rights reserved. | Privacy Policy | Terms &amp; Conditions</p>
                </div>
            </div>
        </footer>
    );
}
