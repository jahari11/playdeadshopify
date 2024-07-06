import { createContext, useContext, useState, useEffect } from 'react';
import { addProductToCart, getCart, createCheckout, storeCart, updateProductQuantity, removeProductFromCart } from '../libs/Cart.js';
import toast from 'react-hot-toast';


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
    if (quantity <= 0) {
      await removeFromCart(lineItemId);

    } else {
      await updateProductQuantity(lineItemId, quantity);
      const updatedCart = await getCart();
      setCart(updatedCart);
    }
  };

  const removeFromCart = async (lineItemId) => {
    await removeProductFromCart(lineItemId);
    const updatedCart = await getCart();
    setCart(updatedCart);
    toast.error('Product removed')
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
