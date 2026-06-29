import SliderNextButton from "../shared/SliderNextButton";
import SliderPrevButton from "../shared/SliderPrevButton";
import FeaturesSliderMobile from "./FeaturesSliderMobile";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function Features() {
    const swiperRef = useRef<SwiperType | null>(null);

    const handleNextSlide = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev();
    };
    return (
        <div
            className="
                        bg-gradient-to-br from-[#FF7777] to-[#EF234C]
                        mt-24 mb-10 py-5
                        md:w-9/12 md:mx-auto md:rounded-2xl
                        "
        >
            <div
                className="flex flex-col space-y-2 justify-between
                            text-white "
            >
                {/*Heading and slider   control button*/}
                <div className="px-5 flex justify-between relative">
                    <div className="flex items-center">
                        <h2 className="text-xl md:font-semibold md:text-2xl">
                            از دستت در نره{" "}
                        </h2>
                        <img
                            src="/public/ExclamationMark.svg"
                            alt="exclamation mark"
                            className="size-6"
                        />
                    </div>
                    {/* prev and next slide btn */}
                    <div className="space-x-3 
                                    md:absolute md:top-0 ">
                        <SliderPrevButton onClick={handlePrevSlide} />
                        <SliderNextButton onClick={handleNextSlide} />
                    </div>
                </div>
                <div className="text-center md:text-right md:px-5 space-y-3 mt-3">
                    <p>رویداد های در حال برگزاری </p>
                    <p className="text-xs font-light">
                        از امروز تا یک هفته بعد ...{" "}
                    </p>
                    <img src="/public/purple-clock.png" alt="purple clock icon" className="mr-10 hidden md:block w-22 drop-shadow-[12px_14px_25px_rgba(81,65,255,0.3)] " />
                </div>
                <div>
                    {/* sliders */}
                    <div className="w-full md:hidden">
                        <FeaturesSliderMobile
                            onSwiperReady={(swiper:SwiperType) => {
                                swiperRef.current = swiper;
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
