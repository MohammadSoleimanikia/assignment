export default function FreeEvents() {
    return (
        <div className="relative w-full h-64 my-24">
            {/* background */}
            <div className="absolute inset-0 bg-[url('/images/freeEvents/bg.png')] bg-cover bg-center bg-no-repeat" />

            {/* image */}
            <img
                src="/public/images/freeEvents/bg.png"
                className="w-full object-cover z-20"
                alt="bg"
            />

            {/* border overlay */}
            <img
                src="/public/images/freeEvents/lines.png"
                className="
                absolute inset-x-0
                -top-10 
                w-11/12 mx-auto h-80
                pointer-events-none
        "
                alt="bg"
            />
        </div>
    );
}
