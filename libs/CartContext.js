import { createContext, useContext, useState, useEffect } from 'react';
import { addProductToCart, getCart, createCheckout, storeCart } from '../libs/Cart.js';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    async function fetchCart() {
      const storedCart = await getCart();
      if (storedCart) {
        setCart(storedCart);
      }
    }
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    await addProductToCart(product);
    const updatedCart = await getCart();
    setCart(updatedCart);
  };

  const updateCartQuantity = async (lineItemId, quantity) => {
    // Update quantity logic
  };

  const removeFromCart = async (lineItemId) => {
    // Remove item logic
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
