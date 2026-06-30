import BestEvent from "./components/bestEvent/BestEvent";
import Features from "./components/features/Features";
import FreeEvents from "./components/freeEvents/FreeEvents";
import Hero from "./components/hero/Hero";
import UserPick from "./components/UserPicks/UserPick";

function App() {
    return (
        <main className="bg-slate-100  font-vazir  min-h-screen  space-y-24 font-vazir">
            <Hero />
            <Features />
            <UserPick />
            <BestEvent />
            <FreeEvents/>
        </main>
    );
}

export default App;
