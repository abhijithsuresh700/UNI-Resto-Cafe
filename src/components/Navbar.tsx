"use client";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useAppSelector } from "@/redux/hooks";

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const count = useAppSelector((state) => state.cart.items);
  const totalItemCount = count.reduce((total, item) => total + item.count, 0);

  const categoryCount = count.length;

  return (
    <div
      className="w-full m-auto flex bg-white justify-between h-13 pt-3 "
      style={{ width: "100%" }}
    >
      <div>
        <h1 className="my-3 font-bold mx-3 text-zinc-600 ml-20">{name}</h1>
      </div>
      <div className="flex my-3 mr-14">
        <h3 className="text-zinc-600 ">My Orders</h3>
        <div className="mx-8">
          <Badge color="error" badgeContent={totalItemCount} showZero>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
