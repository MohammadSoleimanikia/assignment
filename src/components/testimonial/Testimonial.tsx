import TestimonialGrid from "./TestimonialGrid";

export default function Testimonial() {
    return (
        <div className="p-15">
            {/* heading */}
            <div className="flex flex-col items-center mb-5">
                <h2 className="text-xl font-semibold">انتخاب کاربران</h2>
                <p className="">تجربه هایی که حرف ندارند!</p>
            </div>
            <TestimonialGrid/>
        </div>
    );
}
