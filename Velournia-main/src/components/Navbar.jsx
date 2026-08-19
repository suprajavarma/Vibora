import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' : 'bg-transparent border-b border-[#d8a8a4]/30 py-6'}`}>
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                <div className="flex items-center cursor-pointer">
                    <span className="text-3xl font-serif text-[#2d3032] font-semibold tracking-wide flex items-baseline">
                        Velo<span className="text-[#d8a8a4]">urnia</span>
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-10 text-[#555] text-[14px] font-medium tracking-wide">
                    <a href="#collections" onClick={(e) => { e.preventDefault(); document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#d8a8a4] transition-colors cursor-pointer">Collections</a>
                    <a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#d8a8a4] transition-colors cursor-pointer">Gallery</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-customize-modal')); }} className="bg-[#d8a8a4] text-white px-7 py-2.5 rounded-full text-[14px] font-medium hover:bg-[#c69a97] hover:shadow-md transition-all duration-300 cursor-pointer">
                        Customize
                    </a>
                </div>
                {/* Mobile Hamburger Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#333] transition-colors focus:outline-none p-1">
                        {isMobileMenuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[300px] py-4' : 'max-h-0 py-0'}`}>
                <div className="flex flex-col space-y-4 px-8">
                    <a href="#collections" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-[#555] font-medium tracking-wide hover:text-[#d8a8a4] transition-colors py-2 border-b border-gray-100">Collections</a>
                    <a href="#gallery" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-[#555] font-medium tracking-wide hover:text-[#d8a8a4] transition-colors py-2 border-b border-gray-100">Gallery</a>
                    <div className="pt-2 pb-1">
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.dispatchEvent(new Event('open-customize-modal')); }} className="block text-center bg-[#d8a8a4] text-white px-7 py-2.5 rounded-full text-[14px] font-medium hover:bg-[#c69a97] hover:shadow-md transition-all duration-300">
                            Customize
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
