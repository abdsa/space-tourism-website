import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Explore from "../components/explore-button";
import Header from "../components/header";
import MobileMenu from "../components/mobile-menu";
import SkipToContent from "../components/skip-to-content";
import jsonData from "../data.json";

export const config = {
  amp: true,
};

const Home: NextPage = () => {
  return (
    <>
      <MobileMenu></MobileMenu>
      <Head>
        <title>Space Tours - Explore</title>
        <link
          rel="canonical"
          href="https://spacetourisms.vercel.app"
          key="canonical"
        />
        <meta
          name="description"
          content=""
        />
      </Head>
      <SkipToContent></SkipToContent>
      <Header></Header>

      <main
        id="main"
        className="grid pb-[5vh] text-white desktop:grid-cols-[60%_40%] desktop:pb-0"
      >
        <div className="flex flex-col self-center justify-self-center">
          <h1 className="text-center font-barlow text-navText tracking-smHeading text-secondary desktop:text-start desktop:text-smHeading">
            SO, YOU WANT TO TRAVEL TO
            <div className="text-center font-bellefair text-[5rem] text-white desktop:text-start desktop:text-2xlHeading">
              SPACE
            </div>
          </h1>

          <p className="max-w-[75ch] px-2 text-center font-barlow font-light text-secondary desktop:text-start desktop:text-bodyText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Explore></Explore>
      </main>
      <style jsx global>
        {`
          body {
            background: url("/background-home-mobile.jpg") no-repeat;
            background-size: cover;
            min-height: 100vh;
            display: grid;
            grid-template-rows: 10vh 90vh;
          }

          @media (min-width: 768px) {
            body {
              background-image: url(/background-home-tablet.jpg);
            }
          }

          @media (min-width: 1440px) {
            body {
              background-image: url(/background-home-desktop.jpg);
              padding: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
