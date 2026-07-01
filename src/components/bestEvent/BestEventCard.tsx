type BestEventCardProps = {
  rating?: number;
  discount?: number;
  imageAddress?: string;
};
export default function BestEventCard({
  rating = 5,
  discount = 0,
  imageAddress,
}: BestEventCardProps) {
  const defaultImage = "/images/bestEvents/Rectangle 29469.png";
  return (
    <div className="relative z-2 mt-10 overflow-hidden rounded-xl md:mt-0 md:w-1/3">
      <img
        src={imageAddress ?? defaultImage}
        className="aspect-square h-full w-full object-cover"
        alt=""
      />

      {/* save */}
      <button
        type="button"
        className="absolute top-3 right-3 2xl:top-5 2xl:right-5 z-20 flex items-center justify-center"
      >
        <span className="sr-only">save event</span>
        <img
          src="/save-icon.svg"
          alt=""
          className="size-7 md:size-8 2xl:size-10"
        />
      </button>

      {/* rating */}
      <span className="absolute top-3 left-3 2xl:top-5 2xl:left-5 z-20 flex items-center gap-2 rounded-full bg-white px-2 text-[10px] font-semibold xl:py-1">
        <span className="text-sm md:text-base 2xl:text-xl">5/</span>
        <span className="text-lg text-[#f0d034] md:text-xl 2xl:text-2xl">
          {" "}
          {rating}{" "}
        </span>
        <img
          src="/public/images/bestEvents/star.svg"
          className="size-6 md:size-7 2xl:size-8"
          alt=""
        />
      </span>

      {/* discount */}
      {discount !== 0 && (
        <div className="absolute bottom-2 left-2 2xl:bottom-5 2xl:left-5 z-20">
          <div className="relative">
            <img
              src="/images/bestEvents/Star 1.svg"
              alt=""
              className="size-14 xl:size-24"
            />

            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white md:text-xl 2xl:text-2xl ">
              %{discount}
            </span>
          </div>
        </div>
      )}
      {/* profile pic */}
      <img
        src="/images/bestEvents/profilePic.png"
        alt="user"
        className="absolute right-2 bottom-2 2xl:bottom-5 2xl:right-5 z-20 size-14 xl:size-24 rounded-md object-cover"
      />
    </div>
  );
}
