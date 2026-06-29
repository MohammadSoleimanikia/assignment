import { useState } from "react";
import { FOOD_DATA } from "../../data";
import Card, { type FoodCard } from "../shared/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Slider.css";

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
                {FOOD_DATA.map((food: FoodCard, index) => (
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

            {/* CTA مربوط به کارت اکتیو وسط */}
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

                <button
                    type="button"
                    className="
                        relative mt-5 w-42 overflow-hidden rounded-md
                        bg-[#1d60a4] py-2 text-sm font-semibold text-white
                        
                        before:content-['']
                        before:absolute
                        before:left-0
                        before:top-0
                        before:h-full
                        before:w-0
                        before:bg-[#4a80b6]
                        before:transition-all
                        before:duration-500
                        before:ease-in-out

                        hover:before:w-1/2
                    "
                >
                    <span className="relative z-10">رزرو رویداد</span>
                </button>
            </div>
        </div>
    );
}
