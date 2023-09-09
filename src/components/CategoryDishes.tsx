import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import CartButton from "./CartButton";

interface CategoryDishesProps {
  category: string;
  dishes?: any[]; 
  setCart?: (cart: any) => void; 
  setActiveTab?: any;
  cart?: any;
}

const CategoryDishes: React.FC<CategoryDishesProps> = (props) => {

  return (
    <div className="w-full">
      {props.dishes === undefined
        ? ""
        : props.dishes.map((item, index) => {
            return (
              <div className="cart_box container flex" key={index}>
                <div>
                  <div className="flex items-center">
                    <AdjustIcon
                      className={`mr-2 ${
                        item?.dish_Type === 1
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    />
                    <h1 className="text-zinc-600 shadow-sm font-bold text-2xl">
                      {item?.dish_name}
                    </h1>
                  </div>
                  <h3 className="text-zinc-600 font-bold text-md ml-8">
                    {item?.dish_currency}
                    {""} {item?.dish_price}
                  </h3>
                  <h4 className="text-zinc-500 font-sans ml-8">
                    {item?.dish_description}
                  </h4>
                  <div className="ml-8">
                    {item.dish_Availability ? (
                      <CartButton item={item} cartCount={props?.setCart} category={props.category} key={index} setActiveTab={props?.setActiveTab}/>
                    ) : (
                      <h4 className="text-red-600 mt-3 font-serif my-3">
                        Not Available
                      </h4>
                    )}
                  </div>
                </div>
                <div className="flex">
                  <h3 className="text-zinc-500 font-medium mx-5 text-center justify-end mt-6">
                    {item?.dish_calories} Calories
                  </h3>
                  <div className="flex m-auto w-100 justify-end object-cover">
                    <img src={item?.dish_image} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default CategoryDishes;