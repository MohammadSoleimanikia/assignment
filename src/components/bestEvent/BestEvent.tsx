import PrimaryButton from "../shared/PrimaryButton";
import BestEventCard from "./BestEventCard";

export default function BestEvent() {
  return (
    <div className="relative mx-auto w-11/12 rounded-xl 2xl:rounded-4xl bg-white p-4 md:flex md:flex-row-reverse md:justify-between md:rounded-2xl lg:w-9/12">
      <BestEventCard discount={30} rating={4} imageAddress="/images/bestEvents/Rectangle 29469.png"/>

      {/* label mobile */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:hidden">
        <img src="/images/bestEvents/mobileLabel.svg" className="" alt="" />

        <span className="absolute inset-0 flex items-center justify-center text-sm text-white">
          بهترین رویداد هفته
        </span>
      </div>
      <img
        src="/public/line.png"
        className="absolute top-0 left-0 z-1 hidden md:block"
        alt=""
      />
      {/* label desktop */}
      <div className="absolute top-8 -right-3 hidden md:block">
        <img
          src="/images/bestEvents/desktopLabel.png"
          className="h-[70px] 2xl:h-[88px]"
          alt=""
        />

        <span className="absolute inset-0 flex items-center justify-center text-xl text-white 2xl:text-3xl">
          بهترین رویداد هفته
        </span>
      </div>

      {/* card detail */}
      {/* lg:w-2/3 xl:w-3/6 */}
      <div className="z-20 mt-8 space-y-4 md:mt-20 md:flex md:w-2/3 md:flex-col md:justify-end xl:w-6/12">
        {/* user count */}
        <div className="flex items-baseline gap-1 md:mt-10 md:text-[10px] 2xl:text-xl">
          <span className="ml-1 rounded-lg bg-amber-300 px-1 py-0.5 text-white">
            132
          </span>
          <p className="text-[#3e7cb1]">نفر در این رویداد شرکت کردن</p>
        </div>
        <h2 className="text-lg font-semibold md:text-sm 2xl:text-2xl">
          سفالگری ، تجربه ای از لمس تا خلق{" "}
        </h2>
        <div>
          <p className="text-sm/relaxed  md:mb-5 md:text-[10px] 2xl:text-base 2xl:font-medium">
            در این رویداد سفالگری، با دستان خودت خاک را شکل می‌دهی و از یک تکه
            گل ساده، اثری منحصربه‌فرد خلق می‌کنی. از آشنایی با اصول اولیه کار با
            چرخ سفال تا فرم‌دهی و پرداخت نهایی، همه‌چیز در فضایی آرام و
            الهام‌بخش تجربه می‌شود. این فقط یک کلاس نیست؛ فرصتی است برای مکث،
            تمرکز و ساختن چیزی که امضای تو را دارد.
          </p>
        </div>
        <div className="flex items-center justify-between md:gap-3">
          {/* CTA */}
          <div className="flex-1 md:flex md:gap-3">
            <PrimaryButton className=" xl:w-44 2xl:w-56">رزرو رویداد</PrimaryButton>

            {/* save btn */}
            <button
              type="button"
              className="group hidden items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-2 py-2 transition-all duration-300 hover:border-gray-700 hover:text-gray-900 md:flex"
            >
              <span className="text-[10px] text-nowrap text-gray-500 transition-colors duration-300 group-hover:text-gray-900 2xl:text-lg">
                نشان کردن
              </span>

              <svg
                width="15"
                height="15"
                viewBox="0 0 32 32"
                fill="none"
                className="size-4 stroke-gray-400 transition-colors duration-300 group-hover:stroke-gray-900"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66797 12.2917C6.66797 8.38296 6.66797 6.42858 7.69309 5.21429C8.71822 4 10.3681 4 13.668 4H18.3346C21.6345 4 23.2844 4 24.3095 5.21429C25.3346 6.42858 25.3346 8.38296 25.3346 12.2917V21.7271C25.3346 25.4353 25.3346 27.2894 24.3496 27.8565C23.3646 28.4236 22.1338 27.2781 19.6723 24.9871L18.8845 24.2539C17.5004 22.9657 16.8083 22.3216 16.0013 22.3216C15.1943 22.3216 14.5022 22.9657 13.1181 24.2539L12.3303 24.9871C9.86877 27.2781 8.63799 28.4236 7.65298 27.8565C6.66797 27.2894 6.66797 25.4353 6.66797 21.7271V12.2917Z"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>

          {/* price section */}
          <div className="flex items-baseline justify-start gap-2">
            <p className="text-sm text-[#B3DADE] line-through 2xl:text-xl">
              1250000
            </p>
            <p className="text-base font-semibold text-nowrap 2xl:text-2xl">
              1000000 تومان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
