import Router from 'next/router';
import { useState } from 'react';
import { getCart } from '@/libs/Cart';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


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
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
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
                <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 translate-x-full'} fixed inset-0 z-20 w-full h-full transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 backdrop-blur-sm flex flex-col items-center justify-center lg:hidden`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link className="text-green-600 hover:text-green-500 uppercase" href="/">Home</Link>
                        <Link className="text-green-600 hover:text-green-500 uppercase" href="/products">Shop</Link>
                    </div>

                    <div className="flex justify-center md:block mt-4">
                        <Link className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="/cart">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                        </Link>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:items-center">
                    <div className="flex flex-col gap-6 md:flex-row md:mx-6">
                    <Link className="text-green-600 hover:text-green-500 uppercase" href="/">Home</Link>
                    <Link className="text-green-600 hover:text-green-500 uppercase" href="/products">Shop</Link>
                    <Link className="text-green-600 hover:text-green-500 uppercase" href="/contact">Contact</Link>
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
