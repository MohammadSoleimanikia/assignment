import { FOOD_DATA } from "../../data";
import Card, { type FoodType } from "../shared/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
type FeaturesSliderDesktopProps = {
    onSwiperReady?: (swiper: SwiperType) => void;
};
export default function FeaturesSliderDesktop({
    onSwiperReady,
}: FeaturesSliderDesktopProps) {
    return (
        <div className="hidden md:flex w-full mt-5 ">
            {/* Slider */}
            <div className="w-full">
                <Swiper
                    dir="rtl"
                    modules={[Autoplay]}
                    breakpoints={{
                        768:{
                            slidesPerView:2.7
                        },
                        1024:{
                            slidesPerView:3.3
                        },
                        1200:{
                            slidesPerView:4.2
                        },
                        1600:{
                            slidesPerView:5.2
                        }
                    }}
                    slidesPerGroup={1}
                    spaceBetween={10}
                    loop={true}
                    speed={700}
                    centeredSlides={false}
                    onSwiper={(swiper) => {
                        onSwiperReady?.(swiper);
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="!overflow-y-visible !overflow-x-hidden bg-transparent"
                >
                    {FOOD_DATA.map((food: FoodType, index) => (
                        <SwiperSlide
                            key={index}
                            className="max-w-lg !flex !items-start !justify-center py-3"
                        >
                            <div
                                className={`
                                    relative
                                    transition-all duration-500 ease-in-out
                                    origin-bottom
                                    
                                `}
                            >
                                <Card
                                    PicAddress={food.PicAddress}
                                    title={food.title}
                                    price={food.price}
                                    className="scale-90 hover:scale-100 "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
