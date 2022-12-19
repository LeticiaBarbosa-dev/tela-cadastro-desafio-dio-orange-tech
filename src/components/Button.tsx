interface ButtonProps {
    title?: string;
    variant?: string;
    type: "submit" | "reset";
    onClick?: () => void;
}

export function Button({title, variant = "primary", onClick, type}: ButtonProps) {
    const buttonVariant = variant !== "primary" ? "min-w-[167px] h-[33px] bg-[#E4105D] after:content-[''] after:absolute after:border-[1px] after:border-solid after:border-[#E4105D] after:top-[-5px] after:left-[-6px] after:w-[calc(100% + 10px)] after:h-[calc(100% + 10px)] after:rounded-[22px] hover:opacity-60 cursor-pointer" : "bg-[#565656] "
    return(
        <button type={type} onClick={onClick} className={`min-w-[120px] w-[100%] rounded-[22px] relative  text-white py-[2px] px-3 ${buttonVariant}`}>
            {title}
        </button>
    )
}