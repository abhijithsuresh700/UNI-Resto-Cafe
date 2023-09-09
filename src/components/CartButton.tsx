"use client";
import React, { useState, useEffect } from "react";
import { incrementCart, decrementCart } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

interface CartButtonProps {
  item: {
    id: number;
    dish_Availability: boolean;
    dish_id: number;
  };
  cartCount?: (cart: any) => void;
  category: string;
  setActiveTab: any;
}

const CartButton: React.FC<CartButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const countt = useAppSelector((state) => state.cart.items);

  const currentDishId = props.item.dish_id;

  const currentDishCount =
    countt.find((item) => item.dishId === currentDishId)?.count || 0;

  const handleAddToCart = (incrementValue: number) => {
    if (count === 0 && incrementValue === -1) {
      setText("");
    } else {
      if (incrementValue === 1) {
        dispatch(incrementCart(props?.item?.dish_id));
      } else {
        dispatch(decrementCart(props?.item?.dish_id));
      }
      setCount(count + incrementValue);
      setText("Customization available");
    }
  };

  useEffect(() => {
    setCount(currentDishCount);
    if (currentDishCount >= 1) {
      setText("Customization available");
    } else {
      setText("");
    }
  }, [props.category, count]);

  return (
    <>
      <div className="flex bg-green-700 rounded-full w-32 my-3 ">
        <button className="px-4 text-white" onClick={() => handleAddToCart(-1)}>
          -
        </button>
        <div className="text-center text-white pl-5">{count}</div>
        <button
          onClick={() => handleAddToCart(1)}
          className="mx-5 px-4 text-white"
        >
          +
        </button>
      </div>
      {props.item.dish_Availability ? (
        <h4 className="text-red-600 font-serif my-3">{text}</h4>
      ) : (
        ""
      )}
    </>
  );
};

export default CartButton;
