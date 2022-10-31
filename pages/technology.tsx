import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CrewTabs from "../components/crew-tabs";
import Explore from "../components/explore-button";
import Header from "../components/header";
import MobileMenu from "../components/mobile-menu";
import SkipToContent from "../components/skip-to-content";
import TechnologyTabs from "../components/technology-tabs";
import jsonData from "../data.json";

export const config = {
  amp: true,
};

const technology = jsonData.technology;

const Technology: NextPage = () => {
  return (
    <>
      <MobileMenu></MobileMenu>
      <Head>
        <title>Technology</title>
      </Head>
      <SkipToContent></SkipToContent>
      <Header></Header>
      <main
        id="main"
        className="grid grid-rows-[repeat(2,min-content)] gap-10 pb-12 font-bellefair text-white tablet:gap-20 tablet:pb-0 desktop:my-auto desktop:justify-items-start desktop:gap-10 desktop:pb-0"
      >
        <>
          <h1 className="justify-self-center font-barlowC text-navText font-thin uppercase tracking-smHeading tablet:ml-20 tablet:justify-self-start tablet:text-smHeading desktop:text-smHeading">
            <span className="mr-5 font-bold text-[rgb(255,255,255,0.25)]">
              03
            </span>
            SPACE LAUNCH 101
          </h1>

          <div className="grid w-full gap-10 desktop:grid-flow-row desktop:grid-cols-[10%_90%] desktop:gap-20">
            <TechnologyTabs></TechnologyTabs>

            <amp-selector
              role="tablist"
              keyboard-select-mode="focus"
              id="technology-tab-panels"
              className="tabpanels"
            >
              {technology.map((item, index) => {
                return (
                  <article
                    id={`${item.name} description`}
                    role="tabpanel"
                    aria-labelledby={`${item.name} tab`}
                    key={`${index}`}
                    // @ts-ignore
                    option="true"
                    selected={index === 0 ? "true" : ""}
                    className="grid gap-5 desktop:grid-flow-col desktop:grid-cols-[60%_40%] desktop:items-center desktop:gap-0"
                  >
                    <amp-img
                      layout="responsive"
                      width="375"
                      height="170"
                      src={item.images.landscape}
                      className="desktop:order-2 desktop:h-[500px] desktop:w-full"
                      noloading=""></amp-img>
                    <div className="grid place-content-center gap-2 text-center desktop:order-1 desktop:place-content-start desktop:text-start">
                      <div className="font-barlowC text-smSubHeading uppercase tracking-smSubHeading text-secondary tablet:text-navText">
                        The terminology...
                      </div>
                      <div className="text-[1.5rem] uppercase tablet:text-[2.5rem] desktop:text-lgHeading">
                        {item.name}
                      </div>
                      <p className="max-w-[75ch] px-5 font-barlow text-secondary desktop:p-0 desktop:text-bodyText">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </amp-selector>
          </div>
        </>
      </main>
      <style jsx global>
        {`
          body {
            background: url("/background-technology-mobile.jpg") no-repeat;
            background-size: cover;
            min-height: 100vh;
            display: grid;
            grid-template-rows: 10vh 90vh;
          }

          @media (min-width: 768px) {
            body {
              background-image: url(/background-technology-tablet.jpg);
            }
          }

          @media (min-width: 1440px) {
            body {
              background-image: url(/background-technology-desktop.jpg);
              padding: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Technology;
