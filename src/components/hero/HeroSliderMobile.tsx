import { useState } from "react";
import { FOOD_DATA } from "../../data";
import Card, { type  FoodType } from "../shared/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Slider.css";
import PrimaryButton from "../shared/PrimaryButton";

export default function HeroSliderMobile() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeFood = FOOD_DATA[activeIndex];

    return (
        <div className="md:hidden w-full -mt-6 relative z-20 ">
            <Swiper
                modules={[Autoplay]}
                dir="ltr"
                centeredSlides={true}
                slidesPerView={2.3}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                speed={500}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
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

            {/* Details about active card*/}
            <div className="flex flex-col items-center">
                <div className=" mt-4  rounded-2xl  px-3 " dir="rtl">
                    <div className="flex items-center gap-2">
                        <img
                            src="/File_dock_fill.svg"
                            className="size-6"
                            alt="icon"
                        />

                        <h2 className="text-base font-semibold text-blue-900">
                            {activeFood.title}
                        </h2>
                    </div>

                    <p className="mt-2 text-[#1e1e1e] text-sm leading-6">
                        لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم
                        ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم.
                    </p>
                </div>

                <PrimaryButton>رزرو رویداد</PrimaryButton>
            </div>
        </div>
    );
}
