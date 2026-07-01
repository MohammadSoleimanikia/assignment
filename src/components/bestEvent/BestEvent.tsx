export default function BestEvent() {
  return (
    <div className="relative mx-auto w-11/12 rounded-xl bg-white p-4 md:flex md:flex-row-reverse md:justify-between md:rounded-2xl lg:w-9/12">
      {/* main pic*/}
      {/* md:w-3/5 lg:w-2/3 xl:w-3/6 */}
      <div className="relative z-2 mt-10 overflow-hidden rounded-xl md:mt-0 md:w-1/3">
        <img
          src="/images/bestEvents/Rectangle 29469.png"
          className="relative aspect-square h-full w-full object-cover"
          alt=""
        />

        {/* save */}
        <button
          type="button"
          className="absolute top-3 right-3 z-20 flex items-center justify-center"
        >
          <span className="sr-only">save event</span>
          <img src="/save-icon.svg" alt="" className="size-7" />
        </button>

        {/* rating */}
        <span className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full bg-white px-2 text-[10px] font-semibold">
          <span className="text-sm">5/</span>
          <span className="text-lg text-[#f0d034]"> 5 </span>
          <img src="/public/images/bestEvents/star.svg" alt="" />
        </span>

        {/* discount */}
        <div className="absolute bottom-2 left-2 z-20">
          <div className="relative">
            <img
              src="/images/bestEvents/Star 1.svg"
              alt=""
              className="size-14"
            />

            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
              %20
            </span>
          </div>
        </div>

{/* profile pic */}
        <img
          src="/images/bestEvents/profilePic.png"
          alt="user"
          className="absolute right-2 bottom-2 z-20 size-14 rounded-md object-cover"
        />
      </div>

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
      <div className="absolute top-5 -right-2 hidden md:block">
        <img
          src="/images/bestEvents/desktopLabel.png"
          className="h-[70px] 2xl:h-[88px]"
          alt=""
        />

        <span className="absolute inset-0 flex items-center justify-center text-xl  text-white">
          بهترین رویداد هفته
        </span>
      </div>

      {/* card detail */}
      {/* lg:w-2/3 xl:w-3/6 */}
      <div className="mt-8 z-20 space-y-4 md:mt-20 md:flex md:w-2/3 md:flex-col md:justify-end lg:pl-10 xl:w-6/12">
        {/* user count */}
        <div className="flex items-baseline gap-1 md:mt-10 md:text-xs 2xl:text-base">
          <span className="ml-1 rounded-lg bg-amber-300 px-1 py-0.5 text-white">
            132
          </span>
          <p className="text-[#3e7cb1]">نفر در این رویداد شرکت کردن</p>
        </div>
        <h2 className="text-lg font-semibold  md:text-sm 2xl:text-lg">
          سفالگری ، تجربه ای از لمس تا خلق{" "}
        </h2>
        <div>
          <p className="text-sm/relaxed font-light text-gray-700 md:mb-5 md:text-xs 2xl:text-base">
            در این رویداد سفالگری، با دستان خودت خاک را شکل می‌دهی و از یک تکه
            گل ساده، اثری منحصربه‌فرد خلق می‌کنی. از آشنایی با اصول اولیه کار با
            چرخ سفال تا فرم‌دهی و پرداخت نهایی، همه‌چیز در فضایی آرام و
            الهام‌بخش تجربه می‌شود. این فقط یک کلاس نیست؛ فرصتی است برای مکث،
            تمرکز و ساختن چیزی که امضای تو را دارد.
          </p>
        </div>
        <div className="flex items-center justify-between md:gap-3">
          {/* CTA */}
          <div className="md:flex md:gap-3">
            <button
              type="button"
              className="relative w-28 md:w-40 overflow-hidden rounded-lg bg-[#1d60a4] py-3 text-xs text-white before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#4a80b6] before:transition-all before:duration-700 before:ease-in-out before:content-[''] hover:before:w-5/6 md:w-32 md:py-1.5 2xl:w-56 2xl:py-3.5"
            >
              <span className="relative z-10 text-base md:text-sm">
                رزرو رویداد
              </span>
            </button>
            {/* save btn */}
            <button
              type="button"
              className="group hidden items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-2 py-2 transition-all duration-300 hover:border-gray-700 hover:text-gray-900 md:flex"
            >
              <span className="text-[10px] text-nowrap text-gray-500 transition-colors duration-300 group-hover:text-gray-900">
                نشان کردن
              </span>

              <svg
                width="15"
                height="15"
                viewBox="0 0 32 32"
                fill="none"
                className="stroke-gray-400 transition-colors duration-300 group-hover:stroke-gray-900"
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
            <p className="text-sm text-[#B3DADE] line-through">1250000</p>
            <p className="text-base font-semibold text-nowrap">1000000 تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
}
