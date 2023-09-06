import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCart, decrementCart } from "../redux/cartSlice";
import { RootState } from "../redux/store";

interface CartButtonProps {
  item: {
    id: number;
    dish_Availability: boolean; 
  };
  cartCount?: (cart: any) => void;
}

const CartButton: React.FC<CartButtonProps> = (props) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const cartCount = useSelector((state: RootState) => state.cart.cartCount); // Use RootState
  const dispatch = useDispatch();

  const handleAddToCart = (incrementValue: number) => {
    if (count === 0 && incrementValue === -1) {
      setText("");
    } else {
      if (incrementValue === 1) {
        dispatch(incrementCart(props.item.id));
      } else {
        dispatch(decrementCart(props.item.id));
      }
      setCount(count + incrementValue);
      setText("Customization available");
    }
  };

  return (
    <>
      <div className="flex bg-green-700 rounded-full w-32 my-3 ">
        <button
          className="px-4 text-white"
          onClick={() => handleAddToCart(-1)}
        >
          -
        </button>
        <div className="text-center text-white pl-5">{count}</div>
        <button onClick={() => handleAddToCart(1)} className="mx-5 px-4 text-white">
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






