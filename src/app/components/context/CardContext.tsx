"use client";

import { createContext, useState } from "react";

export const createCartContext = createContext({});
export const CartProvider = ({ children }: any) => {
  
  const [quantity, setQuantity] = useState(1);
  
  const [cartItem, setCartItems] = useState<any[]>([]);
  
  const [totalQuantity, setTotalQuantity] = useState(0);
 
  const [total, setTotalPrice] = useState(0)


  const increaseQunatity = () => {
    setQuantity((prevQunality) => prevQunality + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQunality) => prevQunality - 1);
    }
  };


  const addProductToCart = (product: any, quantity: number) => {
    const checkProductInCart = cartItem.find(
      (item) => item._id === product._id
    );
    setTotalQuantity((prev) => prev + quantity);

    if (checkProductInCart) {
      const updateCartItems = cartItem.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        }
        return cartProduct; // Added return for non-matching products
      });
      setCartItems(updateCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItem, { ...product }]);
    }
  };

  const toggleCartItemQuantity = (id: any, value: any) => {
    const foundProduct = cartItem.find((item) => item._id === id);
    const otherProduct = cartItem.filter((item) => item._id !== id);
    if (value === "plus") {
      setCartItems([...otherProduct, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalQuantity((prevQuantity)=>prevQuantity+1)
    } else if (value === "minus") {
      if (foundProduct.quantity > 1) {
        setCartItems([...otherProduct, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalQuantity((prevQuantity)=>prevQuantity-1)
      }
    }
  };
  
  const removeItemsFromCart = (product:any)=>{
    const foundProduct = cartItem.find((item) => item._id === product._id);
    const newCardItems = cartItem.filter((item)=>item._id !== product._id);

    setCartItems(newCardItems);
    setTotalPrice((previousTotal)=>previousTotal - foundProduct.price*foundProduct.quantity);
    setTotalQuantity((prevTotalQty) => prevTotalQty - foundProduct.quantity);

  }
  return (
    <createCartContext.Provider
      value={{ quantity, increaseQunatity,  decreaseQuantity, cartItem, addProductToCart, totalQuantity, toggleCartItemQuantity, removeItemsFromCart}}
    >
      <div>{children}</div>
    </createCartContext.Provider>
  );
};
