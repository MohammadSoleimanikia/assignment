export default function Header() {
    return (
        <div
            className="
                        flex flex-col w-full justify-center space-y-3
                        md:pr-30 2xl:pr-44
                        md:pt-10 pt-4
                        items-center md:items-start
                        text-white"
        >
            <h1 className="text-4xl xl:text-6xl 2xl:text-8xl
                    font-bold drop-shadow-xl drop-shadow-black">
                غذا و رستوران
            </h1>
            <div className="flex text-xs xl:text-xs 2xl:text-base mt-4">
                <span className="bg-amber-300 rounded-lg px-1 py-0.5 ml-1 ">
                    132
                </span>
                <p>رویداد در این دسته بندی </p>
            </div>
        </div>
    );
}
