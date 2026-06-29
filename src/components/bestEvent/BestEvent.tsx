export default function BestEvent() {
    return (
        <div className="w-11/12 md:w-9/12 md:flex md:flex-row-reverse rounded-xl md:rounded-2xl p-4 bg-white mx-auto relative  ">
            {/* عکس اصلی + اکشن‌ها */}
            <div className="relative w-full mt-10 md:mt-0  overflow-hidden rounded-xl ">
                <img
                    src="/images/bestEvents/Rectangle 29469.png"
                    className="w-full h-full"
                    alt=""
                />

                {/* بالا راست: save */}
                <button
                    type="button"
                    className="
                        absolute top-3 right-3 z-20
                        flex items-center justify-center
                    "
                >
                    <span className="sr-only">save event</span>
                    <img src="/save-icon.svg" alt="" className="size-7" />
                </button>

                {/* بالا چپ: امتیاز */}
                <span
                    className="
                        absolute flex gap-2 items-center top-3 left-3 z-20
                        rounded-full bg-white px-2 
                        text-[10px] font-semibold 
                    "
                >
                    <span className="text-sm">5/</span>
                    <span className="text-lg text-[#f0d034]"> 5 </span>
                    <img src="/public/images/bestEvents/star.svg" alt="" />
                </span>

                {/* پایین چپ: تخفیف */}
                <div className="absolute bottom-2 left-2 z-20">
                    <div className="relative">
                        <img
                            src="/images/bestEvents/Star 1.svg"
                            alt=""
                            className="size-14"
                        />

                        {/* عدد دقیق وسط ستاره */}
                        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                            %20
                        </span>
                    </div>
                </div>

                <img
                    src="/images/bestEvents/profilePic.png"
                    alt="user"
                    className="
                        absolute bottom-2  right-2 z-20
                        size-14 rounded-md
                        object-cover
                    "
                />
            </div>

            {/* label mobile */}
            <div className="absolute md:hidden -top-5 left-1/2 -translate-x-1/2">
                <img
                    src="/images/bestEvents/mobileLabel.svg"
                    className=""
                    alt=""
                />

                <span
                    className="
                        absolute inset-0
                        flex items-center justify-center
                        text-white  text-sm
                    "
                >
                    بهترین رویداد هفته
                </span>
            </div>
            {/* label desktop */}
            <div className="hidden md:block absolute top-5 -right-2">
                <img
                    src="/images/bestEvents/desktopLabel.png"
                    className="h-12"
                    alt=""
                />

                <span
                    className="
                        absolute inset-0
                        flex items-center justify-center
                        text-white text-xl font-bold
                    "
                >
                    بهترین رویداد هفته
                </span>
            </div>

            {/* card detail */}
            <div className="mt-5 space-y-3 md:mt-20  lg:pl-20 ">
                {/* user count */}
                <div className="flex gap-1 items-baseline">
                    <span className="bg-amber-300 text-white md:text-xs rounded-lg px-1 py-0.5 ml-1">
                        132
                    </span>
                    <p className="text-[#3e7cb1] md:text-xs">
                        نفر در این رویداد شرکت کردن
                    </p>
                </div>
                <h2 className="text-lg md:text-sm md:mt-10  font-semibold">
                    سفالگری ، تجربه ای از لمس تا خلق{" "}
                </h2>
                <div>
                    <p className="text-sm/relaxed md:mb-5 md:text-xs text-gray-700 font-light">
                        در این رویداد سفالگری، با دستان خودت خاک را شکل می‌دهی و
                        از یک تکه گل ساده، اثری منحصربه‌فرد خلق می‌کنی. از
                        آشنایی با اصول اولیه کار با چرخ سفال تا فرم‌دهی و پرداخت
                        نهایی، همه‌چیز در فضایی آرام و الهام‌بخش تجربه می‌شود.
                        این فقط یک کلاس نیست؛ فرصتی است برای مکث، تمرکز و ساختن
                        چیزی که امضای تو را دارد.
                    </p>
                </div>
                <div className="flex items-center md:gap-3">
                    <button
                        type="button"
                        className="
                        py-2 md:py-1.5
                        text-xs
                        relative overflow-hidden
                        bg-[#1d60a4] w-28 md:w-44  text-white rounded-lg
                        before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-[#4a80b6] before:transition-all before:duration-700 before:ease-in-out hover:before:w-5/6"
                    >
                        <span className="text-base md:text-sm relative z-10">
                            رزرو رویداد
                        </span>
                    </button>
                    {/* save btn */}
                    <button
                        type="button"
                        className="
                                    hidden
                                    group
                                    md:flex items-center gap-2
                                    rounded-lg border border-gray-300
                                    px-2 py-2
                                    bg-transparent

                                    transition-all duration-300
                                    hover:border-gray-700
                                    hover:text-gray-900"
                    >
                        <span
                            className="
                                    text-[10px] text-gray-500
                                    transition-colors duration-300
                                    group-hover:text-gray-900"
                        >
                            نشان کردن
                        </span>

                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 32 32"
                            fill="none"
                            className="
                            stroke-gray-400
                            transition-colors duration-300
                            group-hover:stroke-gray-900
        "
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.66797 12.2917C6.66797 8.38296 6.66797 6.42858 7.69309 5.21429C8.71822 4 10.3681 4 13.668 4H18.3346C21.6345 4 23.2844 4 24.3095 5.21429C25.3346 6.42858 25.3346 8.38296 25.3346 12.2917V21.7271C25.3346 25.4353 25.3346 27.2894 24.3496 27.8565C23.3646 28.4236 22.1338 27.2781 19.6723 24.9871L18.8845 24.2539C17.5004 22.9657 16.8083 22.3216 16.0013 22.3216C15.1943 22.3216 14.5022 22.9657 13.1181 24.2539L12.3303 24.9871C9.86877 27.2781 8.63799 28.4236 7.65298 27.8565C6.66797 27.2894 6.66797 25.4353 6.66797 21.7271V12.2917Z"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </button>

                    <div className="flex justify-start items-baseline gap-2">
                        <p className="text-base line-through text-[#B3DADE]">
                            1250000
                        </p>
                        <p className="text-base ">1000000 تومان</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
