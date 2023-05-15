import { HomeView } from "@/views/HomeView";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      router.push(window.location.pathname);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Lowe Löwing</title>
      </Head>
      <HomeView />
    </>
  );
}
