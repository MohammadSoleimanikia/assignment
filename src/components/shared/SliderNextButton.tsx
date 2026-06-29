type SliderNextButtonProps = {
    onClick: () => void;
    className?: string;
};

export default function SliderNextButton({
    onClick,
    className = "",
}: SliderNextButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                group
                bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_0%,_rgba(255,255,255,0.1)_100%)]
                size-7 md:flex
                items-center justify-center
                text-black rounded-md
                border border-white
                ${className}
            `}
        >
            <span className="sr-only">next slide</span>

            <img
                className="transition-transform duration-300 group-hover:-translate-x-1"
                src="/Expand_left_light.svg"
                alt=""
            />
        </button>
    );
}