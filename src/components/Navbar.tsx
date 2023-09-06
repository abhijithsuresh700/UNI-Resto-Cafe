import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { RootState} from "../redux/store"

const Navbar: React.FC = () => {
  const cartCount = useSelector((state :RootState) => state.cart.cartCount);
  const result = useQuery("For-Navbar", () => {
    return axios.get(
      `https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`
    );
  });

  const details = result?.data?.data?.[0];


  return (
    <div
      className="w-full m-auto flex bg-white justify-between h-13 pt-3 "
      style={{ width: "100%" }}
    >
      <div>
        <h1 className="my-3 font-bold mx-3 text-zinc-600 ml-20">
          {details?.restaurant_name}
        </h1>
      </div>
      <div className="flex my-3 mr-14">
        <h3 className="text-zinc-600 ">My Orders</h3>
        <div className="mx-8">
          <Badge color="error" badgeContent={cartCount} showZero>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;