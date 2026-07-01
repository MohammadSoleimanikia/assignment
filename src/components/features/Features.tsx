import SliderNextButton from "../shared/SliderNextButton";
import SliderPrevButton from "../shared/SliderPrevButton";
import FeaturesSliderDesktop from "./FeaturesSliderDesktop";
import FeaturesSliderMobile from "./FeaturesSliderMobile";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function Features() {
    const mobileSwiperRef = useRef<SwiperType | null>(null);
    const desktopSwiperRef = useRef<SwiperType | null>(null);

    const handleNextMobile = () => {
        mobileSwiperRef.current?.slideNext();
    };

    const handlePrevMobile = () => {
        mobileSwiperRef.current?.slidePrev();
    };

    const handleNextDesktop = () => {
        desktopSwiperRef.current?.slidePrev();
    };

    const handlePrevDesktop = () => {
        desktopSwiperRef.current?.slideNext();
    };

    return (
        <div
            className="
                bg-gradient-to-br from-[#FF7777] to-[#EF234C]
                lg:w-9/12 mx-auto lg:rounded-3xl py-5
                md:min-h-[350px]
            "
        >
            {/* heading */}
            <div className="flex pt-5 mx-5 justify-between">
                <div className="flex items-center">
                    <h2
                        className="text-lg text-white lg:text-2xl xl:text-2xl 2xl:text-4xl
                                            md:font-semibold md:text-base "
                    >
                        از دستت در نره
                    </h2>

                    <img
                        src="/ExclamationMark.svg"
                        alt="exclamation mark"
                        className="size-6"
                    />
                </div>
                {/* desktop buttons - top left */}
                <div className="hidden md:flex items-center gap-3 ">
                    <SliderPrevButton onClick={handlePrevDesktop} />
                    <SliderNextButton onClick={handleNextDesktop} />
                </div>
                {/* mobile buttons */}
                <div className="flex md:hidden items-center gap-3">
                    <SliderPrevButton onClick={handlePrevMobile} />
                    <SliderNextButton onClick={handleNextMobile} />
                </div>
            </div>
            {/* main section */}
            <div className="md:flex md:justify-between md:items-center md:flex-1">
                {/* text */}
                <div
                    className="text-center text-white mt-3 mr-5 
                                    md:text-right md:mt-10 lg:px-3 space-y-3 "
                >
                    <p className="lg:text-sm xl:text-lg 2xl:text-2xl">رویداد های در حال برگزاری</p>

                    <p
                        className="
                        text-xs lg:text-xs xl:text-md 2xl:text-base
                        font-light"
                    >
                        از امروز تا یک هفته بعد ...
                    </p>

                    <img
                        src="/purple-clock.png"
                        alt="purple clock icon"
                        className="mr-8 mt-5 hidden md:block
                            w-16 lg:w-20 xl:w-28 2xl:w-36
                            xl:mb-3 drop-shadow-[12px_14px_25px_rgba(81,65,255,0.3)]"
                    />
                </div>

                {/* slider */}
                <div className="md:w-9/12 ">
                    <FeaturesSliderMobile
                        onSwiperReady={(swiper: SwiperType) => {
                            mobileSwiperRef.current = swiper;
                        }}
                    />

                    <FeaturesSliderDesktop
                        onSwiperReady={(swiper: SwiperType) => {
                            desktopSwiperRef.current = swiper;
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
