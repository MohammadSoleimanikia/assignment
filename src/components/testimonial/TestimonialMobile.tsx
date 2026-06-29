import TestimonialMobileGrid from "./TestimonialMobileGrid";

export default function Testimonial() {
    return (
        <div className="p-5 mb-10">
            {/* heading */}
            <div className="flex flex-col items-center mb-5">
                <h2 className="text-xl font-semibold">انتخاب کاربران</h2>
                <p className="">تجربه هایی که حرف ندارند!</p>
            </div>
            <TestimonialMobileGrid/>
        </div>
    );
}
