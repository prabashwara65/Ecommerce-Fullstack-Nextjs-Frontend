
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Load cart from localStorage on component mount
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, [ls]);

  useEffect(() => {
    // Save cart to localStorage whenever cartProducts change
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts, ls]);

  function addProduct(productId) {
    // Update cartProducts based on the current state
    setCartProducts(prev => {
      if (!Array.isArray(prev)) {
        // Handle cases where prev is not an array (e.g., during initial render)
        return [productId];
      }
      // Append productId to the existing cartProducts array
      return [...prev, productId];
    });
  }

  function removeProduct(productId) {
    setCartProducts(prev => {
      if (!prev) {
        return [];
      }
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  function clearCart() {
    setCartProducts([]);
  }


  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct ,removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
