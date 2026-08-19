import React from 'react';
import logoUrl from '../assets/logo.svg';

export default function LogoSection() {
    return (
        <section className="w-full py-20 bg-[#fffafc] flex justify-center items-center">
            <div className="w-[350px] md:w-[480px] lg:w-[600px] h-auto flex justify-center items-center">
                <img src={logoUrl} alt="Velournia Logo" className="w-full h-auto drop-shadow-sm" />
            </div>
        </section>
    );
}
