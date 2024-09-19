import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar pizza al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);

      if (existingPizza) {
        // Si la pizza ya está, incrementa su cantidad
        return prevCart.map(item =>
          item.id === pizza.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Si la pizza no está en el carrito, la agrega 
        return [...prevCart, { ...pizza, cantidad: 1 }];
      }
    });
  };

  // Resta una pizza
  const removeFromCart = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map(item =>
          item.id === pizzaId ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  // Elimina una pizza del carrito
  const deleteFromCart = (pizzaId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== pizzaId));
  };

  // Calcula el total
  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


