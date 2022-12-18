interface ButtonProps {
    title?: string;
    variant?: string;
    type?: string;
    onClick?: () => void;
}

export function Button({title, variant = "primary", onClick, type}: ButtonProps) {
    const buttonVariant = variant !== "primary" ? "min-w-[167px] h-[33px] bg-[#E4105D]" : "min-w-[120px] w-[100%]"
    return(
        <button type="submit" onClick={onClick} className={`bg-[#565656] rounded-[22px] relative text-white py-[2px] px-3 ${buttonVariant} after:content-[''] after:absolute after:border-[1px] after:border-solid after:border-[#E4105D] after:top-[-5px] after:left-[-6px] after:w-[calc(100% + 10px)] after:h-[calc(100% + 10px)] after:rounded-[22px]`}>
            {title}
        </button>
    )
}