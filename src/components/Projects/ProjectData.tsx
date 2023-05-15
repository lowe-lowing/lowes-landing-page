import { IconRenderer } from "@/assets/icons/Icon";
import { ImageType } from "@/assets/images/Image";
import { OpenInNewTab } from "@/utils";
import { TbBrandNextjs } from "react-icons/tb";

export enum ProjectType {
  Web = "Web",
  Mobile = "Mobile",
}
export type Project =
  | {
      type: ProjectType.Web;
      title: string;
      description: string;
      image: ImageType;
      icons: React.ReactNode[];
      link: string;
    }
  | {
      type: ProjectType.Mobile;
      title: string;
      description: string;
      image: ImageType;
      icons: React.ReactNode[];
      gotoButtons: React.ReactNode[];
    };

export const projects: Project[] = [
  {
    type: ProjectType.Web,
    title: "Lowes Workouts",
    description:
      "Lowes Workouts is a web application built using Next.js, MySQL, and Tailwind CSS. It is designed to help gym owners list and manage their workout lessons online. With Lowes Workouts, gym owners can create and schedule custom lessons, making it easy for their clients to find and sign up for the classes they want.",
    image: "LowesWorkouts",
    link: "https://nextjs-gym-courses-app.vercel.app/",
    icons: [
      <IconRenderer src="Typescript" alt="Typescript" height={20} />,
      <IconRenderer src="Nextjs" alt="Nextjs" height={20} />,
      <IconRenderer src="Mysql" alt="Mysql" height={20} />,
      <IconRenderer src="Tailwindcss" alt="Tailwindcss" height={20} />,
    ],
  },
  {
    type: ProjectType.Mobile,
    title: "Hitta Uppkörningstider",
    description:
      "An app to find driving test times in Sweden. This helps people find driving test times automatically which increases the chances of finding a time someone has abandoned. Built using Typescript, React Native, Expo, Firebase and Puppeteer.",
    image: "HittaUppkorning",
    icons: [
      <IconRenderer src="Typescript" alt="Typescript" height={20} />,
      <IconRenderer src="React" alt="React" height={20} />,
      <IconRenderer src="Expo" alt="Expo" height={20} />,
      <IconRenderer src="Firebase" alt="Firebase" height={20} />,
      <IconRenderer src="Nodejs" alt="Nodejs" height={20} />,
    ],
    gotoButtons: [
      <IconRenderer
        src="AppStore"
        alt="AppStore"
        height={30}
        onClick={() => OpenInNewTab("https://apple.co/3Qk1KBx")}
      />,
      <IconRenderer
        src="GooglePlay"
        alt="GooglePlay"
        height={30}
        onClick={() => OpenInNewTab("https://apple.co/3Qk1KBx")}
      />,
    ],
  },
  {
    type: ProjectType.Web,
    title: "Snake Game",
    description: "A fun snake game built using React and TypeScript.",
    image: "LowesWorkouts",
    link: "",
    icons: [<TbBrandNextjs />],
  },
  {
    type: ProjectType.Web,
    title: "Portfolio",
    description: "My portfolio website built using Next.js and Tailwind CSS.",
    image: "LowesWorkouts",
    link: "",
    icons: [<TbBrandNextjs />],
  },
  {
    type: ProjectType.Web,
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultricies. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nisl, vitae aliquam nisl nisl vitae nisl.",
    image: "LowesWorkouts",
    link: "",
    icons: [<TbBrandNextjs />],
  },
];
