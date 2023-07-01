import { FC } from "react";
import Image, { ImageProps } from "next/image";
import CVPicture from "./CVPicture.jpg";
import LowesWorkouts from "./lowes-workouts.png";
import HittaUppkorning from "./hitta-uppkorning.png";
import Forum from "./forum.png";
import LowesEcommerce from "./lowes-ecommerce.png";
import Lyricsflow from "./lyricsflow.png";
import YoutubeSearch from "./youtube-search.png";
import MovieApp from "./MovieApp.png";
import Postit from "./postit.png";

const Images = {
  LowesWorkouts: LowesWorkouts,
  CVPicture: CVPicture,
  HittaUppkorning: HittaUppkorning,
  Forum: Forum,
  LowesEcommerce: LowesEcommerce,
  Lyricsflow: Lyricsflow,
  YoutubeSearch: YoutubeSearch,
  MovieApp: MovieApp,
  Postit: Postit,
};

export type ImageType = keyof typeof Images;

interface Props extends ImageProps {
  src: ImageType;
}

export const ImageRenderer: FC<Props> = ({ src, ...props }) => {
  const ImageComponent = Images[src];
  return <Image src={ImageComponent} {...props} />;
};
