import BestEvent from "./components/bestEvent/BestEvent";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
// import FreeEvents from "./components/freeEvents/FreeEvents";
// import Testimonial from "./components/testimonial/Testimonial";
// import TestimonialMobile from "./components/testimonial/TestimonialMobile";

function App() {
    return (
        <main className="bg-slate-100 min-h-screen space-y-24 font-vazir">
            <Hero />
            <Features  />
            <BestEvent />
            
            {/* <FreeEvents/> */}
            {/* <div className="hidden md:block"> */}
                {/* <Testimonial /> */}
            {/* </div> */}
            {/* <div className="block md:hidden"> */}
                {/* <TestimonialMobile /> */}
            {/* </div> */}
        </main>
    );
}

export default App;
