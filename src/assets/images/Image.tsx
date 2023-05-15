import { FC } from "react";
import Image, { ImageProps } from "next/image";
import CVPicture from "./CVPicture.jpg";
import LowesWorkouts from "./lowes-workouts.png";
import HittaUppkorning from "./hitta-uppkorning.png";

const Images = {
  LowesWorkouts: LowesWorkouts,
  CVPicture: CVPicture,
  HittaUppkorning: HittaUppkorning,
};

export type ImageType = keyof typeof Images;

interface Props extends ImageProps {
  src: ImageType;
}

export const ImageRenderer: FC<Props> = ({ src, ...props }) => {
  const ImageComponent = Images[src];
  return <Image src={ImageComponent} {...props} />;
};
