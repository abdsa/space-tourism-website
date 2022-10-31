import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import jsonData from "../data.json";
import DestinationTabs from "../components/destination-tabs";
import SkipToContent from "../components/skip-to-content";
import MobileMenu from "../components/mobile-menu";
export const config = {
  amp: true,
};

const Destination: NextPage = () => {
  return (
    <>
      <MobileMenu></MobileMenu>
      <Head>
        <title>Destination</title>
      </Head>
      <SkipToContent></SkipToContent>

      <Header></Header>
      <main
        id="main"
        className="grid grid-flow-col grid-rows-[repeat(3,min-content)] justify-items-center gap-5 px-5 pb-12 text-white tablet:gap-5 tablet:pb-0 desktop:place-content-center desktop:gap-0"
      >
        <h1 className="justify-self-center font-barlowC text-navText font-thin uppercase tracking-smHeading tablet:justify-self-start tablet:text-smHeading desktop:text-smHeading">
          <span className="mr-5 font-bold text-[rgb(255,255,255,0.25)]">
            01
          </span>
          Pick your destination
        </h1>
        <DestinationTabs></DestinationTabs>
        <amp-selector
          className="tabpanels grid grid-flow-col gap-5 font-barlowC text-navText tracking-navText text-white desktop:text-bodyText"
          role="tablist"
          keyboard-select-mode="focus"
          id="destination-tab-panels"
        >
          {jsonData.destinations.map((item, index) => {
            return (
              <article
                id={`${item.name} description`}
                role="tabpanel"
                aria-labelledby={`${item.name} tab`}
                className="gap-10 desktop:grid-flow-col desktop:grid-cols-[30vw_minmax(0,40rem)] desktop:gap-10"
                key={`${index}`}
                // @ts-ignore
                option="true"
                selected={index === 0 ? "true" : ""}
              >
                <div className="relative grid justify-items-center">
                  <amp-img
                    className="height-[300px] max-h-[300px] w-[300px] max-w-[300px] tablet:h-full tablet:max-h-[400px] tablet:w-full tablet:max-w-[400px] desktop:h-full desktop:max-h-[500px] desktop:w-full desktop:max-w-[500px]"
                    src={`${item.images.webp}`}
                    layout="responsive"
                    height="500"
                    width="500"
                    noloading/>
                </div>
                <div className="grid tablet:grid-rows-[30%_min-content_min-content_min-content] desktop:grid-rows-[40%_min-content_min-content_min-content]">
                  <p className="text-center font-bellefair text-lgHeading uppercase tablet:mb-20 tablet:text-[5rem] desktop:mb-0 desktop:text-start desktop:text-2xlHeading">
                    {item.name}
                  </p>
                  <p className="max-w-[75ch] justify-self-center text-center font-barlow text-secondary desktop:max-w-full desktop:justify-self-start desktop:text-start">
                    {item.description}
                  </p>
                  <hr className="my-10 border border-[#383B4B] tablet:my-12 desktop:my-10" />
                  <div className="flex flex-col gap-10 tablet:flex-row tablet:justify-center tablet:gap-20 desktop:flex-row desktop:justify-start desktop:gap-20">
                    <div className="flex flex-col font-barlowC tablet:gap-1 desktop:gap-1">
                      <span className="text-center text-smSubHeading tracking-smSubHeading text-secondary  tablet:text-start desktop:text-start">
                        AVG. DISTANCE
                      </span>
                      <span className="text-center font-bellefair text-smHeading uppercase tablet:text-start desktop:text-start">
                        {item.distance}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 font-barlowC tablet:gap-1 desktop:gap-1">
                      <span className="text-center text-smSubHeading uppercase tracking-smSubHeading text-secondary tablet:text-start desktop:text-start">
                        Est. travel time
                      </span>
                      <span className="text-center font-bellefair text-smHeading uppercase tablet:text-start desktop:text-start">
                        {item.travel}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </amp-selector>
      </main>

      <style jsx global>
        {`
          body {
            background: url("/background-destination-mobile.jpg") no-repeat;
            background-size: cover;
            min-height: 100vh;
            display: grid;
            grid-template-rows: 10vh 90vh;
          }

          @media (min-width: 768px) {
            body {
              background-image: url(/background-destination-tablet.jpg);
            }
          }

          @media (min-width: 1440px) {
            body {
              background-image: url(/background-destination-desktop.jpg);
              padding: 0;
              gap: 0;
            }
          }

          .destination-tabs [option][selected] {
            cursor: pointer;
            outline: none;
            border-bottom: 3px solid rgb(255, 255, 255);
            color: hsl(231, 77%, 90%);
          }

          .destination-tabs [option] {
            border-bottom: 3px solid transparent;
          }

          .destination-tabs [option][aria-selected="false"]:hover {
            border-bottom: 3px solid rgb(255, 255, 255, 0.5);
          }

          .griddy {
            grid-template-areas: ". dt";
          }
        `}
      </style>
    </>
  );
};

export default Destination;
