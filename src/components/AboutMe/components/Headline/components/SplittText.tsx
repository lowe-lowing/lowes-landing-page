import { FC } from "react";

type HeadlineProps = {
  copy: string;
  role: string;
  animationDelay: number;
};

export const SplitText: FC<HeadlineProps> = ({ animationDelay, copy, role }) => {
  return (
    <div aria-label={copy} role={role}>
      {copy.split("").map(function (char, index) {
        let style: React.CSSProperties = {
          animationDelay: animationDelay + index * 0.1 + "s",
        };
        return (
          <p key={index} style={style}>
            {char !== " " ? char : "\u00A0"}
          </p>
        );
      })}
    </div>
  );
};
