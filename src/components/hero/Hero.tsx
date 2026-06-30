import Header from "./Header";
import HeroSliderMobile from "./HeroSliderMobile";
import HeroSliderDesktop from "./HeroSliderDesktop";

export default function Hero() {
    return (
        <div className=" relative z-10 flex justify-between flex-col md:min-h-screen">
            <Header />
            <img
                src="/2.png"
                className=" md:hidden  w-screen absolute top-0 left-0 -z-10"
                alt="mobile pic"
            />

            <img
                src="/desktop.png"
                className="hidden md:block absolute top-0 -z-10 w-full h-screen object-cover"
                alt="desktop pic"
            />
            <div className="flex flex-col md:flex-row  mt-15">
                <div className="w-full hidden md:block">
                    <HeroSliderDesktop />
                </div>
                <div className="md:hidden">
                    <HeroSliderMobile />
                </div>
            </div>
        </div>
    );
}
