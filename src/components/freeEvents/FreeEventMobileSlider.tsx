import { useState } from "react";
import { FOOD_DATA } from "../../data";
import Card, { type FoodType } from "../shared/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../shared/Slider.css";

export default function FreeEventMobileSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="md:hidden w-full -mt-6 relative z-20 ">
            <Swiper
                modules={[Autoplay, Pagination]}
                dir="ltr"
                loop={true}
                centeredSlides={true}
                slidesPerView={2.3}
                spaceBetween={0}
                slidesPerGroup={2}
                speed={500}
                pagination={{
                    el: ".free-event-pagination-mobile",
                    clickable: true,
                }}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="food-slider-mobile w-full !overflow-y-visible !overflow-x-hidden bg-transparent"
            >
                {FOOD_DATA.map((food: FoodType, index) => (
                    <SwiperSlide
                        key={index}
                        className="!flex !items-end !justify-center "
                    >
                        <div
                            dir="rtl"
                            className={`
                                w-full
                                transition-all duration-500 ease-in-out
                                origin-bottom
                                ${
                                    index === activeIndex
                                        ? "scale-100  z-20"
                                        : "scale-80  z-10"
                                }
                            `}
                        >
                            <Card
                                PicAddress={food.PicAddress}
                                title={food.title}
                                price={food.price}
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* pagination bullets */}
            <div className="free-event-pagination-mobile flex items-center justify-center gap-2 mt-4"></div>
        </div>
    );
}
