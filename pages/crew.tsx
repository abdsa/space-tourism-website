import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CrewTabs from "../components/crew-tabs";
import Explore from "../components/explore-button";
import Header from "../components/header";
import MobileMenu from "../components/mobile-menu";
import SkipToContent from "../components/skip-to-content";
import jsonData from "../data.json";

export const config = {
  amp: true,
};

const crew = jsonData.crew;

const Home: NextPage = () => {
  return (
    <>
      <MobileMenu></MobileMenu>
      <Head>
        <title>Space Tours - Meet the crew</title>
        <link
          rel="canonical"
          href="https://spacetourisms.vercel.app/crew"
          key="canonical"
        />
      </Head>
      <SkipToContent></SkipToContent>
      <meta
        name="description"
        content="Meet the crew that will trek with you."
      />
      <Header></Header>
      <main
        id="main"
        className="relative grid grid-rows-[repeat(3,min-content)] gap-10 pb-12 font-bellefair text-white tablet:gap-10 desktop:place-content-center desktop:justify-items-start desktop:gap-0"
      >
        <>
          <h1 className="justify-self-center font-barlowC text-navText font-thin uppercase tracking-smHeading tablet:justify-self-start tablet:text-smHeading desktop:text-smHeading">
            <span className="mr-5 font-bold text-[rgb(255,255,255,0.25)]">
              02
            </span>
            Meet your crew
          </h1>
          <amp-selector
            role="tablist"
            keyboard-select-mode="focus"
            id="crew-tab-panels"
            className="tabpanels"
          >
            {crew.map((item, index) => {
              return (
                <article
                  key={item.name}
                  // @ts-ignore
                  option="true"
                  selected={index === 0 ? "true" : ""}
                  id={`${item.name} description`}
                  role="tabpanel"
                  aria-labelledby={`${item.name} tab`}
                  className="grid text-center desktop:grid-flow-col desktop:text-start"
                >
                  <div className="grid grid-rows-[repeat(3,min-content)] self-center px-3 tablet:px-0">
                    <div className="uppercase opacity-50 tablet:text-[1.5rem] desktop:text-mdHeading">
                      {item.role}
                    </div>
                    <div className="text-[1.5rem] uppercase text-white tablet:text-[2.5rem] desktop:text-lgHeading">
                      {item.name}
                    </div>
                    <p className="max-w-[75ch] justify-self-center font-barlow font-thin leading-8 text-secondary tablet:text-navText desktop:text-bodyText">
                      {item.bio}
                    </p>
                  </div>
                  <Image
                    src={item.images.webp}
                    width="580"
                    height="712"
                    className="height-[222px] tablet:height-[356px] desktop:height-[712px] mt-2 w-[177px] justify-self-center tablet:w-[500px] desktop:w-[580px]"
                    alt={item.name}
                  />
                  <hr className="mb-10 border border-[#383B4B] desktop:hidden" />
                </article>
              );
            })}
          </amp-selector>
          <CrewTabs></CrewTabs>
        </>
      </main>
      <style jsx global>
        {`
          body {
            background: url("/background-crew-mobile.jpg") no-repeat;
            background-size: cover;
            min-height: 100vh;
            display: grid;
            grid-template-rows: min-content auto;
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            body {
              background-image: url(/background-crew-tablet.jpg);
              gap: 3rem;
            }
          }

          @media (min-width: 1440px) {
            body {
              background-image: url(/background-crew-desktop.jpg);
              padding: 0;
              gap: 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
