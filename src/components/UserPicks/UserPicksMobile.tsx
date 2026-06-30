import Card from "../shared/Card";
import { EVENTS_DATA } from "../../data";
export default function UserPicksMobile() {
    return (
        <div className="md:hidden">
            {/* smiley section */}
            <div className="w-full flex justify-end bg-linear-to-br py-5 px-10 rounded-2xl  from-[#E8C631] to-[#F5D548]">
                <img
                    src="/stickers-container.svg"
                    className="h-32"
                    alt=""
                />
            </div>
            {/* card section */}
            <div className="grid grid-cols-2 mt-5 gap-3">
                {EVENTS_DATA.map((event) => (
                    <Card
                        PicAddress={event.PicAddress}
                        title={event.title}
                        price={event.price}
                        className="w-full"
                    />
                ))}
            </div>
        </div>
    );
}
