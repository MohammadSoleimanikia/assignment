type SliderPrevButtonProps = {
    onClick: () => void;
    className?: string;
};

export default function SliderPrevButton({
    onClick,
    className = "",
}: SliderPrevButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                group
                bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_0%,_rgba(255,255,255,0.1)_100%)]
                size-7 2xl:size-12 md:flex
                items-center justify-center
                text-black rounded-md 2xl:rounded-xl
                border border-white
                ${className}
            `}
        >
            <span className="sr-only">previous slide</span>

            <img
                className="rotate-180 transition-transform duration-300 group-hover:translate-x-1"
                src="/Expand_left_light.svg"
                alt=""
            />
        </button>
    );
}