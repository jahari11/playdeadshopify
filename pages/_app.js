import "@/styles/globals.css";
import Navbar from "@/Components/Navbar";
import { CartProvider } from "@/libs/CartContext";

import {Oswald } from "next/font/google";

const inter = Oswald({ subsets: ["latin"], weight: '400' });

export default function App({ Component, pageProps }) {
  return <main className={`${inter.className}`}>
    <Navbar />
    <CartProvider>
    <Component {...pageProps}/>
    </CartProvider>
  </main>
}
