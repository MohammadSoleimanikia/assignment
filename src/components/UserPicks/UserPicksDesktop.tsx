import Card from "../shared/Card";

export default function UserPicksDesktop() {
    return (
        <div
            className="
                relative hidden md:block 
                
            "
        >
            {/* BACKGROUND */}
            <img
                src="/Union.png"
                alt=""
                className="w-full h-auto object-contain"
            />

            {/* STICKERS */}
            <img
                src="/stickers-container.svg"
                alt=""
                className="
                    absolute top-[10%] left-[10%]
                    w-[clamp(120px,25vw,300px)]
                "
            />

            {/* TOP CARD */}
            <Card
                className="
                    absolute top-0 right-0
                    w-[23%] lg:w-[25%]
                    transition-transform duration-300
                    hover:scale-85
                "
                PicAddress="/Rectangle 29266-1.png"
                price={50000}
                title="خوشمزه خوشمزه"
            />

            {/* BOTTOM CARDS */}
            <div
                className="
                    absolute bottom-0 left-0
                    w-[55%] md:w-[58%] lg:w-[63%] 
                    flex gap-[clamp(8px,1.5vw,20px)]
                    justify-end
                "
            >
                <Card
                    className="transition-transform duration-300 hover:scale-125"
                    PicAddress="/Rectangle 29266.png"
                    price={50000}
                    title="خوشمزه خوشمزه"
                />
                <Card
                    className="transition-transform duration-300 hover:scale-125"
                    PicAddress="/Rectangle 29266-2.png"
                    price={50000}
                    title="خوشمزه خوشمزه"
                />
                <Card
                    className="transition-transform duration-300 hover:scale-125"
                    PicAddress="/Rectangle 29266.png"
                    price={50000}
                    title="خوشمزه خوشمزه"
                />
            </div>
        </div>
    );
}
