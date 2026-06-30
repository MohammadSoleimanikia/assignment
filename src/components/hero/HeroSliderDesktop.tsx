import { useRef, useState } from "react";
import { FOOD_DATA } from "../../data";
import Card, { type FoodType } from "../shared/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import SliderNextButton from "../shared/SliderNextButton";
import PrimaryButton from "../shared/PrimaryButton";

export default function HeroSliderDesktop() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const activeFood = FOOD_DATA[activeIndex];

    const handleNextSlide = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <div className="hidden md:flex w-full mt-10 items-start pl-30">
            {/* Slider */}
            <div className="w-2/3">
                <Swiper
                    dir="ltr"
                    modules={[Autoplay]}
                    slidesPerView={3.5}
                    slidesPerGroup={1}
                    spaceBetween={0}
                    loop={true}
                    speed={700}
                    centeredSlides={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setActiveIndex(swiper.realIndex);
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="!overflow-y-visible !overflow-x-hidden bg-transparent"
                >
                    {FOOD_DATA.map((food: FoodType, index) => (
                        <SwiperSlide
                            key={index}
                            className="!flex !items-end !justify-center py-8"
                        >
                            <div
                                dir="rtl"
                                className={`
                                    relative
                                    transition-all duration-500 ease-in-out
                                    origin-bottom
                                    ${
                                        index === activeIndex
                                            ? "scale-100 opacity-100 z-20"
                                            : "scale-85 z-10"
                                    }
                                `}
                            >
                                <Card
                                    PicAddress={food.PicAddress}
                                    title={food.title}
                                    price={food.price}
                                    className="hover:-translate-y-5"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* active card data */}
            <div className="p-10 md:w-1/3 ">
                <div key={activeIndex} className="animate-cta-slide-up">
                    <div className="flex items-center gap-2">
                        <img
                            src="/File_dock_fill.svg"
                            className="size-7"
                            alt="icon"
                        />

                        <h2 className="text-sm font-semibold text-blue-900">
                            {activeFood.title}
                        </h2>
                    </div>

                    <p className="text-[#1e1e1e] text-[10px]/[22px]">
                        لورم ایپسوملورم ایپسوم لورم ایپسوم لورم ایپسوملورم
                        ایپسوم لورم ایپسوم لورم ایپسوملورم ایپسوم لورم ایپسوم
                        لورم ایپسوم ایپسوم لورم ایپسوملورم ایپسوم لورم ایپسوم
                        لورم ایپسوملورم ایپسوم لورم ایپسوم لورم ایپسوملورم
                        ایپسوم لورم ایپسوم لورم ایپسوملورم ایپسوم لورم ایپسوم
                        لورم ایپسوملورم ایپسوم لورم ایپسوم لورم ایپسوم
                    </p>
                </div>

                <div className="mt-25 flex justify-center md:justify-between">
                    <SliderNextButton onClick={handleNextSlide} />

                    <PrimaryButton>رزرو رویداد</PrimaryButton>
                </div>
            </div>
        </div>
    );
}
