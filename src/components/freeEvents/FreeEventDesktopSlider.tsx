import { FOOD_DATA } from "../../data";
import Card, { type FoodType } from "../shared/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../shared/Slider.css";

type FeaturesSliderDesktopProps = {
    onSwiperReady?: (swiper: SwiperType) => void;
};
export default function FreeEventDesktopSlider({
    onSwiperReady,
}: FeaturesSliderDesktopProps) {
    return (
        <div className="hidden md:flex flex-col w-full md:w-11/12 mx-auto lg:w-9/12 mt-5 ">
            {/* Slider */}
            <div className="w-full">
                <Swiper
                    dir="rtl"
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                        1600: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                        },
                    }}
                    slidesPerGroup={1}
                    spaceBetween={5}
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
                    pagination={{
                        el: ".free-event-pagination-desktop",
                        clickable: true,
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

                {/* pagination bullets */}
                <div className="free-event-pagination-desktop flex items-center justify-center gap-2 mt-2"></div>
            </div>
        </div>
    );
}
