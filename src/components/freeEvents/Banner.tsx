export default function Banner() {
    return (
        <div className="relative w-full md:w-9/12 lg:w-7/12 md:mx-auto  py-10 flex items-center justify-center">
            {/* banner container */}
            <img alt="" className="absolute top-5 h-[90%] w-[80%]" src="/public/images/freeEvents/lines.png"  />
            <div
                className="
                    relative z-10 w-full overflow-hidden
                    min-h-[250px]
                    flex items-center justify-between
                    text-white p-6 md:p-10 md:px-20
                    bg-gradient-to-br from-[#FF2020] via-[#EF325F] to-[#59248A]
                    md:rounded-tl-[130px] md:rounded-tr-[30px] md:rounded-bl-[30px] md:rounded-br-[130px]
                "
            >
                <img alt="" src="/public/pattern.png" className="absolute top-0 left-0" />
                {/* right text */}
                <div className="relative text-right space-y-1 md:space-y-2">
                    <p className="text-sm md:text-base font-light">
                        رویداد های
                    </p>

                    {/* free word svg */}
                    <img
                        className="w-56"
                        src="/public/images/freeEvents/free.svg"
                        alt=""
                    />

                    <p className="text-xs mt-5 md:text-sm font-light ">
                        "چون حال خوب خریدنی نیست ..."
                    </p>
                </div>
                {/* gift image */}
                <img
                    src="/images/freeEvents/gift.png"
                    alt=""
                    className="relative origin-center z-10 w-28 md:w-36 animate-sway"
                />
            </div>
        </div>
    );
}
