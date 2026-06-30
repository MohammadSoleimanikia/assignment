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
                relative
                bg-gradient-to-br from-[#FF7777] to-[#EF234C]
                pt-5
                w-11/12 lg:w-9/12 md:mx-auto md:rounded-2xl
                md:min-h-[300px]
            "
        >
            {/* desktop buttons - top left */}
            <div className="hidden md:flex items-center gap-3 absolute top-5 left-5 z-30">
                <SliderPrevButton onClick={handlePrevDesktop} />
                <SliderNextButton onClick={handleNextDesktop} />
            </div>

            <div
                className="
                    flex flex-col md:flex-row
                    space-y-2 md:space-y-0
                    justify-between
                    
                    
                "
            >
                {/* Info - right side on desktop */}
                <div className="md:w-3/12 md:pr-2 text-white md:space-y-8">
                    <div className="px-5 flex mt-5 justify-between relative">
                        <div className="flex items-center">
                            <h2 className="text-lg lg:text-2xl xl:text-2xl
                                            md:font-semibold md:text-base ">
                                از دستت در نره
                            </h2>

                            <img
                                src="/ExclamationMark.svg"
                                alt="exclamation mark"
                                className="size-6"
                            />
                        </div>

                        {/* mobile buttons */}
                        <div className="flex md:hidden items-center gap-3">
                            <SliderPrevButton onClick={handlePrevMobile} />
                            <SliderNextButton onClick={handleNextMobile} />
                        </div>
                    </div>

                    <div className="text-center
                                    text-xs lg:text-sm xl:text-lg
                                    md:text-right lg:px-3 space-y-3 ">
                        <p>رویداد های در حال برگزاری</p>

                        <p className="
                        text-xs lg:text-xs xl:text-md
                        font-light">
                            از امروز تا یک هفته بعد ...
                        </p>

                        <img
                            src="/purple-clock.png"
                            alt="purple clock icon"
                            className="mr-8 mt-5 hidden md:block
                            w-16 lg:w-20
                            xl:mb-3 drop-shadow-[12px_14px_25px_rgba(81,65,255,0.3)]"
                        />
                    </div>
                </div>

                {/* Slider - left side on desktop */}
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
