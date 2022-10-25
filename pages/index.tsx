import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Explore from "../components/explore-button";
import Header from "../components/header";
import jsonData from "../data.json";

export const config = {
  amp: true,
};

const Home: NextPage = () => {
  return (
    <>
      <Header></Header>

      <main className="grid grid-cols-1 desktop:grid-cols-2 desktop:grid-rows-1 pb-[5vh] desktop:pb-0">
        <div className="flex flex-col self-center justify-self-center">
          <h1 className="text-center font-barlow text-navText tracking-smHeading text-secondary desktop:text-start desktop:text-smHeading">
            SO, YOU WANT TO TRAVEL TO
            <div className="text-center font-bellefair text-[5rem] text-white desktop:text-start desktop:text-2xlHeading">
              SPACE
            </div>
          </h1>

          <p className="text-[0.938rem] px-2 max-w-[444px] text-center font-barlow desktop:text-bodyText font-light text-secondary desktop:text-start">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="self-center justify-self-center">
          <Explore></Explore>
        </div>
      </main>
      <style jsx global>
        {`
          body {
            background: url("/background-home-mobile.jpg") no-repeat;
            background-size: cover;
            min-height: 100vh;
            display: grid;
            grid-template-rows: min-content 1fr;
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
