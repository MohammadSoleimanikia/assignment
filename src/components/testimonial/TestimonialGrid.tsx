import Card from "../shared/Card";

export default function TestimonialGrid() {
    return (
        <div className="grid grid-cols-4 ">
            <div className="bg-slate-200  rounded-bl-4xl mx-auto">
                <Card
                    PicAddress="/public/Rectangle 29266-1.png"
                    price={25000}
                    title="در برج میلاد پذیرای شماییم"
                    className="w-70"
                />
            </div>
            <div className=" bg-amber-300 col-span-3 rounded-4xl rounded-br-none flex justify-end p-5">
                <img
                    src="/public/stickers-container.svg"
                    alt=""
                    className="size-80 ml-20"
                />
            </div>
            <div className=" bg-amber-300 rounded-[100px] rounded-tl-none"></div>

            <div className="bg-slate-200  mx-auto rounded-tr-4xl ">
                <Card
                    PicAddress="/public/Rectangle 29266-1.png"
                    price={25000}
                    title="در برج میلاد پذیرای شماییم"
                    className=""
                />
            </div>
            <div className="bg-slate-200  mx-auto ">
                <Card
                    PicAddress="/public/Rectangle 29266-1.png"
                    price={25000}
                    title="در برج میلاد پذیرای شماییم"
                    className=""
                />
            </div>
            <div className=" bg-slate-200  mx-auto">
                <Card
                    PicAddress="/public/Rectangle 29266-1.png"
                    price={25000}
                    title="در برج میلاد پذیرای شماییم"
                    className=""
                />
            </div>
        </div>
    );
}
