export default function Header() {
    return (
        <div className="
                        flex flex-col w-full justify-center 
                        md:pr-30  items-center md:items-start md:pt-10 pt-4
                        text-white">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl drop-shadow-black">غذا و رستوران</h1>
            <div className="flex text-xs  mt-4">
                <span className="bg-amber-300 rounded-lg px-1 py-0.5 ml-1 drop-shadow-xl drop-shadow-black">132</span>
                <p>رویداد در این دسته بندی </p>
            </div>
        </div>
    );
}
