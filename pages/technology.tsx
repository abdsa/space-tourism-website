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
import launchVehiclePortrait from "../public/image-launch-vehicle-portrait.jpg";
import launchVehicleLandscape from "../public/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../public/image-spaceport-portrait.jpg";
import spaceportLandscape from "../public/image-spaceport-landscape.jpg";
import spaceCapsulePortrait from "../public/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../public/image-space-capsule-landscape.jpg";

const portraitImages = [
  launchVehiclePortrait,
  spaceportPortrait,
  spaceCapsulePortrait,
];
const landscapeImages = [
  launchVehicleLandscape,
  spaceportLandscape,
  spaceCapsuleLandscape,
];

export const config = {
  amp: true,
};

const technology = jsonData.technology;

const Technology: NextPage = () => {
  return (
    <>
      <MobileMenu></MobileMenu>
      <Head>
        <title>Space Tours - The technologies</title>
        <link
          rel="canonical"
          href="https://spacetourisms.vercel.app/technology"
          key="canonical"
        />
        <meta
          name="description"
          content="Our technologies are from one of the best companies."
        />
      </Head>
      <SkipToContent></SkipToContent>
      <Header></Header>
      <main
        id="main"
        className="grid grid-rows-[repeat(2,min-content)] gap-10 font-bellefair text-white tablet:gap-20 desktop:my-auto desktop:justify-items-start desktop:gap-10 desktop:pb-0"
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
                    <Image
                      width="515"
                      height="527"
                      src={item.images.portrait}
                      className="hidden desktop:order-2 desktop:block desktop:h-[527px] desktop:w-[515px]"
                      alt={item.name}
                      quality={100}
                      priority
                    ></Image>
                    <Image
                      width="768"
                      height="310"
                      src={item.images.landscape}
                      className="w-full tablet:min-h-[170px] tablet:max-w-[50%] tablet:justify-self-center desktop:order-2 desktop:hidden desktop:h-[500px] desktop:w-full"
                      alt={item.name}
                      quality={100}
                      priority
                    ></Image>
                    <div className="grid place-content-center gap-2 text-center desktop:order-1 desktop:place-content-start desktop:text-start">
                      <div className="font-barlowC text-smSubHeading uppercase tracking-smSubHeading text-secondary tablet:text-navText">
                        The terminology...
                      </div>
                      <div className="text-[1.5rem] uppercase tablet:text-[2.5rem] desktop:text-lgHeading">
                        {item.name}
                      </div>
                      <p className="max-w-[50ch] px-5 font-barlow text-secondary desktop:p-0 desktop:text-bodyText">
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
            grid-template-rows: min-content auto;
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            body {
              background-image: url(/background-technology-tablet.jpg);
              gap: 3rem;
            }
          }

          @media (min-width: 1440px) {
            body {
              background-image: url(/background-technology-desktop.jpg);
              padding: 0;
              gap: 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Technology;
