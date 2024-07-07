import "@/styles/globals.css";

import { CartProvider } from "@/libs/CartContext";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import {Oswald } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const inter = Oswald({ subsets: ["latin"], weight: '400' });

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },

  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  exit: {
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <main className={`${inter.className}`}>
    <CartProvider>
    
    <AnimatePresence mode="wait">
      <motion.div
      key={router.pathname}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}>
      <Component {...pageProps}/>
      </motion.div>
    </AnimatePresence>
      <Toaster />
    </CartProvider>
  </main>
}
