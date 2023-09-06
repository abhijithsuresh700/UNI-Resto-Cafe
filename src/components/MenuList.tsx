"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useSwiper } from "swiper/react";
import { useQuery } from "react-query";
import axios from "axios";
import CategoryDishes from "./CategoryDishes";

interface MenuListProps {}

const MenuList: React.FC<MenuListProps> = () => {
  const swiper = useSwiper();
  const [dishes, setDishes] = useState<any[]>([]); 
  const [activeTab, setActiveTab] = useState<number>(0);

  const result = useQuery("For-Menulist", () => {
    return axios.get(
      `https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`
    );
  });

  const details = result?.data?.data?.[0];


  const handleSlideClick = (
    category: string,
    categoryDishes: any[], 
    index: number
  ) => {
    setDishes(categoryDishes);
    setActiveTab(index);
    if (swiper && swiper.slideTo) {
      swiper.destroy();
      swiper.slideTo(index, 0); 
      swiper.init();
    }
  };

  return (
    <div className="w-full shadow-lg h-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
        <div className="cursor-pointer">
          <Swiper
            touchStartPreventDefault={false}
            spaceBetween={50}
            slidesPerView={4}
            loop={true}
          >
            {details?.table_menu_list?.map((item:any, index:any) => {
              return (
                <SwiperSlide
                  onClick={() =>
                    handleSlideClick(item.menu_category, item.category_dishes, index)
                  }
                  key={index}
                  className={`swiper-tab ${
                    activeTab === index ? "active-tab" : ""
                  }`}
                >
                  {item?.menu_category}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="mt-10">
          <CategoryDishes
            dishes={
              dishes.length > 0 ? dishes : details?.table_menu_list[0]?.category_dishes
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MenuList;