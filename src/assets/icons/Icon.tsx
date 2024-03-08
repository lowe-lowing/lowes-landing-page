import Image, { ImageProps } from "next/image";
import { FC } from "react";
import AppStore from "./aivalable-on-the-app-store-2.svg";
import Expo from "./expo-1.svg";
import Firebase from "./firebase-1.svg";
import GooglePlay from "./get-it-on-google-play.svg";
import Javascript from "./javascript.svg";
import Mysql from "./mysql.svg";
import Nextjs from "./next-js.svg";
import Nodejs from "./nodejs-icon.svg";
import Php from "./php1.svg";
import Prisma from "./prisma.svg";
import React from "./react-2.svg";
import Redis from "./redis.svg";
import Redux from "./redux.svg";
import Sanity from "./sanity.png";
import Stripe from "./stripe.svg";
import Sweden from "./sweden.svg";
import Tailwindcss from "./tailwindcss.svg";
import Trpc from "./trpc.svg";
import Typescript from "./ts-logo-128.svg";
import Usa from "./usa-flag-1.svg";

const Icons = {
  Typescript,
  Mysql,
  Nextjs,
  Tailwindcss,
  React,
  Firebase,
  Expo,
  Nodejs,
  AppStore,
  GooglePlay,
  Sanity,
  Stripe,
  Php,
  Javascript,
  Redux,
  Sweden,
  Redis,
  Prisma,
  Trpc,
  Usa,
};

export type IconType = keyof typeof Icons;

interface Props extends ImageProps {
  src: IconType;
}

export const IconRenderer: FC<Props> = ({ src, ...props }) => {
  const IconComponent = Icons[src];
  return <Image src={IconComponent} {...props} />;
};
