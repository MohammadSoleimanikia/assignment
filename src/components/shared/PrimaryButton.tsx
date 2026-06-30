type PrimaryButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export default function PrimaryButton({
    children,
    onClick,
    className = "",
}: PrimaryButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                text-xs
                2xl:text-lg
                relative overflow-hidden
                bg-[#1d60a4]
                w-44 py-2.5
                text-white rounded-md
                before:content-['']
                before:absolute
                before:left-0
                before:top-0
                before:h-full
                before:w-0
                before:bg-[#4a80b6]
                before:transition-all
                before:duration-700
                before:ease-in-out

                hover:before:w-5/6

                ${className}
            `}
        >
            <span className="relative z-10">{children}</span>
        </button>
    );
}
