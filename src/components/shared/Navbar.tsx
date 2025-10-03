// components/Navbar.js
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import logo from './../../assets/Bakite.jpg';

// Download Icon SVG
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

// Menu Icon SVG
const MenuIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

// Close Icon SVG
const CloseIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'হোম', href: '/' },
        { name: 'দোকান', href: '/shop' },
        { name: 'টিম', href: '/team' },
        { name: 'যোগাযোগ', href: '/contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center" onClick={closeMenu}>
                            <Image 
                                src={logo} 
                                alt="Bakite Logo" 
                                width={120} 
                                height={50}
                                className="sm:w-[140px] sm:h-[60px]"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-cyan-100 text-[#0aa9a2]'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Download Button */}
                    <div className="hidden md:block">
                        <button className="flex items-center justify-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base text-white bg-[#0aa9a2] hover:bg-cyan-600 rounded-lg shadow-md transition-colors duration-200">
                            <DownloadIcon />
                            <span className="whitespace-nowrap">অ্যাপ ডাউনলোড</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0aa9a2]"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                        ? 'max-h-screen opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
                    {/* Mobile Navigation Links */}
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                                    isActive
                                        ? 'bg-cyan-100 text-[#0aa9a2]'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    
                    {/* Mobile Download Button */}
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base text-white bg-[#0aa9a2] hover:bg-cyan-600 rounded-lg shadow-md transition-colors duration-200 mt-4">
                        <DownloadIcon />
                        <span>অ্যাপ ডাউনলোড</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}