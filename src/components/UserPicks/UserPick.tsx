import UserPicksDesktop from "./UserPicksDesktop";
import UserPicksMobile from "./UserPicksMobile";

export default function UserPick() {
    return (
        <div className=" w-11/12 lg:w-9/12 mx-auto space-y-5" >
            {/* heading */}
            <div className="text-center space-y-2">
                <h2 className="text-xl lg:text-4xl font-medium md:font-semibold ">انتخاب کاربران</h2>
                <p className="md:text-[10px] text-sm lg:text-xl font-extralight ">تجربه هایی که حرف ندارن!</p>
            </div>
            <UserPicksDesktop />
            <UserPicksMobile />
        </div>
    );
}
