import Router from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="relative">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <span className='uppercase text-green-600 font-extrabold md:text-2xl'>playdeadglobal</span>
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden z-30">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-green-600 hover:text-green-500"
                            aria-label="toggle menu"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 translate-x-full'} fixed inset-0 z-20 w-full h-full transition-all duration-300 ease-in-out bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center lg:hidden`}>
                    <div className="flex flex-col gap-6 md:flex-row md:mx-6">
                        <Link href="/" onClick={handleLinkClick} className="text-green-600 hover:text-green-500 uppercase text-4xl text-center">Home</Link>
                        <Link href="/products" onClick={handleLinkClick} className="text-green-600 hover:text-green-500 uppercase text-4xl text-center">Shop</Link>
                        <Link href="/contact" onClick={handleLinkClick} className="text-green-600 hover:text-green-500 uppercase text-4xl text-center">Contact</Link>
                        <Link href="/cart" onClick={handleLinkClick} className="text-red-600 hover:text-red-500 uppercase text-4xl text-center">Cart</Link>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:items-center">
                    <div className="flex flex-col gap-6 md:flex-row md:mx-6">
                        <Link href="/" className="text-green-600 hover:text-green-500 uppercase">Home</Link>
                        <Link href="/products" className="text-green-600 hover:text-green-500 uppercase">Shop</Link>
                        <Link href="/contact" className="text-green-600 hover:text-green-500 uppercase">Contact</Link>
                    </div>

                    <div className="flex justify-center md:block">
                        <Link href='/cart' className="relative uppercase text-red-600 hover:text-red-500">
                            Cart 🛒
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
