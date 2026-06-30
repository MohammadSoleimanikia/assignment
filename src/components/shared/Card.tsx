export type FoodType = {
    PicAddress: string;
    title: string;
    price: number;
};
export type FoodCardProps = {
    PicAddress: string;
    title: string;
    price: number;
    className?: string;
};

export default function Card({
    PicAddress,
    price,
    title,
    className = "",
}: FoodCardProps) {
    return (
        <div
            className={`
                bg-white rounded-xl p-1.5
                transition-all duration-300
                ${className}
            `}
        >
            <div className="relative w-full">
                <img
                    src="/save-icon.svg"
                    alt="save icon"
                    className="absolute rounded-md right-2 top-2 w-4 h-4 sm:w-5 sm:h-5 z-10"
                />

                <img
                    src={PicAddress}
                    alt={title}
                    className="w-full md:mb-5 aspect-square object-contain"
                />
            </div>

            <h2 className="mt-2 text-[10px] md:text-xs  font-semibold truncate">
                {title}
            </h2>

            <p className="mt-1 text-slate-500 text-[10px] md:text-[10px] ">
                {price.toLocaleString()}
                <span className="mr-1">تومان</span>
            </p>
        </div>
    );
}
