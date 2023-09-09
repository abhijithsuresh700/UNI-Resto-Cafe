"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useSwiper } from "swiper/react";;
import CategoryDishes from "./CategoryDishes";

interface MenuListProps {
  list: any[]
}

const MenuList: React.FC<MenuListProps> = ({list}) => {
  const swiper = useSwiper();
  const [dishes, setDishes] = useState<any[]>([]); 
  const [activeTab, setActiveTab] = useState<number>(0);



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
    <div className="w-full shadow-lg h-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5 ">
        <div className="cursor-pointer flex justify-center items-center">
          <Swiper
            touchStartPreventDefault={false}
            spaceBetween={50}
            slidesPerView={4}
            loop={true}
          >
            {list?.map((item:any, index:any) => {
              return (
                <SwiperSlide
                  onClick={() =>
                    handleSlideClick(item.menu_category,item.category_dishes, index)
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
              dishes.length > 0 ? dishes : list[0]?.category_dishes
            }
            category={dishes.length > 0 ? dishes : list[0]?.menu_category}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuList;