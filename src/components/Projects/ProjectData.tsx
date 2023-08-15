import { IconRenderer } from "@/assets/icons/Icon";
import { ImageType } from "@/assets/images/Image";
import { OpenInNewTab } from "@/utils";

export enum LinkType {
  Link,
  Buttons,
}
type Shared = {
  title: string;
  description: string;
  image: ImageType;
  icons: React.ReactNode[];
};

export type Project = Shared &
  (
    | {
        type: LinkType.Link;
        link: string;
      }
    | {
        type: LinkType.Buttons;
        gotoButtons: React.ReactNode[];
      }
  );

export const projects: Project[] = [
  {
    type: LinkType.Link,
    title: "Taskma",
    description:
      "A responsive task management application created with the so-called T3 stack. In the application, you first create a workspace and then a board where you can create, drag and drop tasks for yourself and your team. In both the workspace and boards, you can invite other users and change the roles of your members.",
    image: "Taskma",
    link: "https://taskma.vercel.app/",
    icons: [
      <IconRenderer key={1} src="Typescript" alt="Typescript" height={20} />,
      <IconRenderer key={2} src="Nextjs" alt="Nextjs" height={20} />,
      <IconRenderer key={3} src="Tailwindcss" alt="Tailwindcss" height={20} />,
      <IconRenderer key={4} src="Prisma" alt="Prisma" height={20} />,
      <IconRenderer key={5} src="Trpc" alt="Trpc" height={20} />,
    ],
  },
  {
    type: LinkType.Link,
    title: "Postit, Reddit Clone",
    description:
      "Postit is a Reddit clone built using Next.js, TypeScript, Tailwind CSS, Prisma and Redis. It is designed to help people share and discuss their interests online. With Postit, users can create and join communities, post content, and comment on other users posts.",
    image: "Postit",
    link: "https://postit-one.vercel.app/",
    icons: [
      <IconRenderer key={1} src="Typescript" alt="Typescript" height={20} />,
      <IconRenderer key={2} src="Nextjs" alt="Nextjs" height={20} />,
      <IconRenderer key={3} src="Tailwindcss" alt="Tailwindcss" height={20} />,
      <IconRenderer key={4} src="Prisma" alt="Prisma" height={20} />,
      <IconRenderer key={5} src="Redis" alt="Redis" height={20} />,
    ],
  },
  {
    type: LinkType.Link,
    title: "Gym System",
    description:
      "Lowes Workouts is a web application built using Next.js, MySQL, and Tailwind CSS. It is designed to help gym owners list and manage their workout lessons online. With Lowes Workouts, gym owners can create and schedule custom lessons, making it easy for their clients to find and sign up for the classes they want.",
    image: "LowesWorkouts",
    link: "https://nextjs-gym-courses-app.vercel.app/",
    icons: [
      <IconRenderer key={1} src="Typescript" alt="Typescript" height={20} />,
      <IconRenderer key={2} src="Nextjs" alt="Nextjs" height={20} />,
      <IconRenderer key={3} src="Mysql" alt="Mysql" height={20} />,
      <IconRenderer key={4} src="Tailwindcss" alt="Tailwindcss" height={20} />,
    ],
  },
  {
    type: LinkType.Buttons,
    title: "Hitta Uppkörningstider",
    description:
      "An app to find driving test times in Sweden. This helps people find driving test times automatically which increases the chances of finding a time someone has abandoned. Built using Typescript, React Native, Expo, Firebase and Puppeteer. Here I learned about publishing on the app stores, send notifications to users and how to use Puppeteer to scrape data from websites.",
    image: "HittaUppkorning",
    icons: [
      <IconRenderer key={1} src="Typescript" alt="Typescript" height={20} />,
      <IconRenderer key={2} src="React" alt="React" height={20} />,
      <IconRenderer key={3} src="Expo" alt="Expo" height={20} />,
      <IconRenderer key={4} src="Firebase" alt="Firebase" height={20} />,
      <IconRenderer key={5} src="Nodejs" alt="Nodejs" height={20} />,
    ],
    gotoButtons: [
      <IconRenderer
        key={1}
        src="AppStore"
        alt="AppStore"
        height={30}
        onClick={() => OpenInNewTab("https://apple.co/3Qk1KBx")}
      />,
      // <IconRenderer key={1}
      //   src="GooglePlay"
      //   alt="GooglePlay"
      //   height={30}
      //   onClick={() => OpenInNewTab("")}
      // />,
    ],
  },
  {
    type: LinkType.Link,
    title: "Instagram Clone",
    description:
      "A copy of the Instagram app built using React Native, Expo and Firebase for login, database and file storage. In this project I greatly increased my knowledge of Firebase but also how to integrate different views with React Native. The app has many features but can be further worked on.",
    image: "Forum",
    link: "https://expo.dev/@luke9595/forum",
    icons: [
      <IconRenderer key={1} src="Typescript" alt="React" height={20} />,
      <IconRenderer key={2} src="React" alt="React" height={20} />,
      <IconRenderer key={3} src="Expo" alt="Expo" height={20} />,
      <IconRenderer key={4} src="Firebase" alt="Firebase" height={20} />,
      <IconRenderer key={5} src="Nodejs" alt="Nodejs" height={20} />,
    ],
  },
  {
    type: LinkType.Link,
    title: "Ecommerce Site",
    description:
      "This is an Ecommerce website where you can buy products for listening to music. It is built with Next.js, sanity cms and stipe for payments with a functional cart, payment and review system. Here I learned how to integrate a cms but also more about Next.js. The products are fake to showcase how it would look like if it was a real website.",
    image: "LowesEcommerce",
    link: "https://ecommerce-sanity-stripe-black.vercel.app/",
    icons: [
      <IconRenderer key={1} src="Nextjs" alt="Nextjs" height={20} />,
      <IconRenderer key={2} src="Sanity" alt="Sanity" height={20} />,
      <IconRenderer key={3} src="Stripe" alt="Stripe" height={20} />,
    ],
  },
  {
    type: LinkType.Link,
    title: "Lyricsflow",
    description:
      "Lyricsflow.net is a website I made to search for lyrics and songs via the genius API. It was made with php and mysql and also had a login system and where you could login and make your own playlist in your profile. Unfortunately, the login no longer works as the database was lost in a system reset on my computer. This project was my final project in the web development course and was a little over the top.",
    image: "Lyricsflow",
    link: "http://lyricsflow.net/",
    icons: [
      <IconRenderer key={1} src="Php" alt="Php" height={20} />,
      <IconRenderer key={2} src="Javascript" alt="Javascript" height={20} />,
      <IconRenderer key={3} src="Mysql" alt="Mysql" height={20} />,
    ],
  },
  {
    type: LinkType.Link,
    title: "Youtube Search Site",
    description:
      "The page uses Youtube's REST Api and Redux as well as tailwind for css, which I think helps a lot when it comes to creating a stylish design. One of my many projects but really fun to create because of tailwind. The page is uploaded via github pages.",
    image: "YoutubeSearch",
    link: "https://crazyleaf69.github.io/YoutubeSearcher-tailwind-redux/",
    icons: [
      <IconRenderer key={1} src="React" alt="Javascript" height={20} />,
      <IconRenderer key={2} src="Tailwindcss" alt="Php" height={20} />,
      <IconRenderer key={3} src="Redux" alt="Mysql" height={20} />,
    ],
  },
  {
    type: LinkType.Link,
    title: "Movie Site",
    description:
      "A page that uses the OMDb API with axios and state management with Redux. In a project like this redux is probably not necessary, but in larger pruducts redux is very useful. It helped me increase my understanding for state management and using redux. The page is uploaded on vercel.",
    image: "MovieApp",
    link: "https://redux-movie-app-blue.vercel.app/",
    icons: [
      <IconRenderer key={1} src="React" alt="Javascript" height={20} />,
      <IconRenderer key={2} src="Redux" alt="Mysql" height={20} />,
    ],
  },
];
