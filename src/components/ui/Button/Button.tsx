import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  additionalClassName?: string;
}
export const Button: FC<Props> = ({ children, additionalClassName, ...props }) => {
  return (
    <button className={`custom_button ${additionalClassName}`} {...props}>
      {children}
    </button>
  );
};
