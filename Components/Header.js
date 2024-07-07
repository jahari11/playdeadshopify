import { useState } from "react";
import Link from "next/link";
import { Transition } from '@headlessui/react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const menuIcon = (
    <svg
      className="w-6 h-6 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  );

  const closeIcon = (
    <svg
      className="w-6 h-6 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
    return (
    <>
     <div className="relative z-50">
      <div className="absolute right-4 top-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-500 focus:outline-none"
        >
          {isOpen ? closeIcon : menuIcon}
        </button>
      </div>
      <div className="absolute top-4 left-0 right-0 z-40 flex justify-center">
        <Link href='/' className="text-2xl text-green-500 uppercase">playdeadglobal</Link>
      </div>
      <Transition
        show={isOpen}
        as="div"
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed inset-0 z-40"
      >
        <div className="fixed inset-0  bg-opacity-50 backdrop-filter backdrop-blur-md"></div>
        <div className="fixed inset-0 shadow-lg p-4 ">
          <div className="flex justify-center items-center flex-col h-full gap-6">
            <Link href="/" className="text-green-500 text-5xl uppercase hover:underline">
              Home
            </Link>
            <Link href="/products" className="text-green-500 text-5xl uppercase hover:underline">
              Shop
            </Link>
            <Link href="/contact" className="text-green-500 text-5xl uppercase hover:underline">
              Contact
            </Link>
            <Link href="/cart" className="text-red-500 text-5xl uppercase hover:underline">
              Cart
            </Link>
          </div>
        </div>
      </Transition>
    </div>
    </>)
}