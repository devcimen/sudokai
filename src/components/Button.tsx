import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
    className?: string;
};

export default function Button({
    children,
    variant = "primary",
    onClick,
    className = "",
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-200 
                ${variant === "primary" ? "bg-primary-500 text-white hover:bg-primary-600" :
                "bg-transparent border-2 border-primary-500 text-primary-700 hover:bg-primary-100"} 
                ${className}`}
        >
            {children}
        </button>
    );
}
