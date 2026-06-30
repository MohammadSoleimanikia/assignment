import { FOOD_DATA } from "../../data";
import Card, { type FoodType } from "../shared/Card";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
type FeaturesSliderMobileProps = {
    onSwiperReady?: (swiper: SwiperType) => void;
};
export default function FeaturesSliderMobile({
    onSwiperReady,
}: FeaturesSliderMobileProps) {

    return (
        <div className="md:hidden w-full my-4  relative z-20 ">
            <Swiper
                modules={[Autoplay]}
                dir="ltr"
                centeredSlides={true}
                slidesPerView={2}
                spaceBetween={20}
                slidesPerGroup={1}
                loop={true}
                speed={500}
                onSwiper={(swiper) => {
                    onSwiperReady?.(swiper);
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="food-slider-mobile w-full !
                overflow-y-visible !overflow-x-hidden bg-transparent"
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
        </div>
    );
}
