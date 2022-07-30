import React, { createContext, ReactNode, useState } from "react";
import { Product } from "../types";

interface IStateContext {
  name: string;
}

const StateContext = createContext<IStateContext | null>(null);

interface IStateContextProvider {
  children: ReactNode;
}

interface ICartItems {
  _createdAt: string;
  _id: string;
  details: string;
  name: string;
  price: number;
  slug: {
    current: string;
  };
  quantity: number;
}

export const StateContextProvider: React.FC<IStateContextProvider> = ({
  children,
}) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<[ICartItems] | []>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);

  let foundProduct: boolean;
  let index: number;

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems?.find(
      (item) => item._id === product._id
    );

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);

    if (checkProductInCart) {
      const updateCartItems = cartItems?.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      // setCartItems(prevCartItems);
    }
  };

  return (
    <StateContext.Provider
      value={{
        name: "James",
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
