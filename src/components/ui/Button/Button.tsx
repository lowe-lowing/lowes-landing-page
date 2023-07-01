import React, { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
export const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={twMerge("custom_button", className)} {...props}>
      {children}
    </button>
  );
};
