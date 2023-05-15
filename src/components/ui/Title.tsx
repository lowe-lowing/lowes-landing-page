import { FC } from "react";

type Props = {
  children: string;
  className?: string;
};

export const Title: FC<Props> = ({ children, className }) => {
  return <div className={`text-primary text-3xl m-5 ${className}`}>{children}</div>;
};
