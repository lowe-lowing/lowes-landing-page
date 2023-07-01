import { FC } from "react";
import Image, { ImageProps } from "next/image";
import mysql from "./mysql.svg";
import nextjs from "./next-js.svg";
import tailwindcss from "./tailwindcss.svg";
import React from "./react-2.svg";
import firebase from "./firebase-1.svg";
import Typescript from "./ts-logo-128.svg";
import expo from "./expo-1.svg";
import nodejs from "./nodejs-icon.svg";
import AppStore from "./aivalable-on-the-app-store-2.svg";
import GooglePlay from "./get-it-on-google-play.svg";
import Sanity from "./sanity.png";
import Stripe from "./stripe.svg";
import Php from "./php1.svg";
import Javascript from "./javascript.svg";
import Redux from "./redux.svg";
import sweden from "./sweden.svg";
import usa from "./usa-flag-1.svg";
import Redis from "./redis.svg";
import Prisma from "./prisma.svg";

const Icons = {
  Typescript: Typescript,
  Mysql: mysql,
  Nextjs: nextjs,
  Tailwindcss: tailwindcss,
  React: React,
  Firebase: firebase,
  Expo: expo,
  Nodejs: nodejs,
  AppStore: AppStore,
  GooglePlay: GooglePlay,
  Sanity: Sanity,
  Stripe: Stripe,
  Php: Php,
  Javascript: Javascript,
  Redux: Redux,
  Sweden: sweden,
  Usa: usa,
  Redis: Redis,
  Prisma: Prisma,
};

export type IconType = keyof typeof Icons;

interface Props extends ImageProps {
  src: IconType;
}

export const IconRenderer: FC<Props> = ({ src, ...props }) => {
  const IconComponent = Icons[src];
  return <Image src={IconComponent} {...props} />;
};
