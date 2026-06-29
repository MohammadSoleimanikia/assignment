import Card from "../shared/Card";

export default function TestimonialMobileGrid() {
    return (
        <div className="grid grid-cols-2 gap-5 justify-center ">
            <div className="col-span-2 pl-5 bg-amber-300 flex justify-end rounded-2xl ">
                {" "}
                <img
                    src="/public/stickers-container.svg"
                    alt=""
                    className="size-32"
                />
            </div>
            <div>
                <Card
                    PicAddress="/public/Rectangle 29266-1.png"
                    price={25000}
                    title="در برج میلاد پذیرای شماییم"
                    className="w-10"
                />
            </div>
            <div>
                <Card
                    PicAddress="/public/Rectangle 29266-1.png"
                    price={25000}
                    title="در برج میلاد پذیرای شماییم"
                    className="w-10"
                />
            </div>
            <div>
                <Card
                    PicAddress="/public/Rectangle 29266-1.png"
                    price={25000}
                    title="در برج میلاد پذیرای شماییم"
                    className="w-10"
                />
            </div>
            <div>
                <Card
                    PicAddress="/public/Rectangle 29266-1.png"
                    price={25000}
                    title="در برج میلاد پذیرای شماییم"
                    className="w-10"
                />
            </div>
        </div>
    );
}
