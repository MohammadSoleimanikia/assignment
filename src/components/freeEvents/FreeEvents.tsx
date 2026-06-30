import Banner from "./Banner";
import FreeEventDesktopSlider from "./FreeEventDesktopSlider";
import FreeEventMobileSlider from "./FreeEventMobileSlider";

export default function FreeEvents() {
    return (
        <div className="space-y-5 mb-10">
            <Banner/>
            <FreeEventMobileSlider/>
            <FreeEventDesktopSlider/>
        </div>
    );
}
