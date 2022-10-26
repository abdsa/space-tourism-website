import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import jsonData from "../data.json";
import DestinationTabs from "../components/destination-tabs";
export const config = {
  amp: true,
};

const Destination: NextPage = () => {
  return (
    <>
      <Header></Header>
      <main className="main-grid grid grid-flow-col grid-rows-[repeat(3,min-content)] justify-items-center gap-10 px-5 text-white tablet:gap-5 desktop:place-content-center desktop:justify-items-start desktop:gap-0">
        <h1 className="ml-[5vw] justify-self-center font-barlowC text-navText font-thin uppercase tracking-smHeading tablet:justify-self-start tablet:text-smHeading desktop:text-smHeading">
          <span className="mr-5 font-bold text-[rgb(255,255,255,0.25)]">
            01
          </span>
          Pick your destination
        </h1>
        <DestinationTabs></DestinationTabs>
        <amp-selector
          className="tabpanels article-section grid grid-flow-col gap-5 font-barlowC text-navText tracking-navText text-white desktop:text-bodyText"
          role="tablist"
          keyboard-select-mode="focus"
          id="myTabPanels"
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
                  />
                </div>
                <div className="grid tablet:grid-rows-[30%_min-content_min-content_min-content] grid-rows-[30%_min-content_min-content_min-content] desktop:grid-rows-[40%_min-content_min-content_min-content]">
                  <p className="text-center tablet:mb-20 desktop:mb-0 font-bellefair text-[5rem] uppercase desktop:text-start desktop:text-2xlHeading">
                    {item.name}
                  </p>
                  <p className="max-w-[75ch] justify-self-center text-center font-barlow text-secondary desktop:max-w-full desktop:justify-self-start desktop:text-start">
                    {item.description}
                  </p>
                  <hr className="border my-10 tablet:my-12 desktop:my-10 border-[#383B4B]" />
                  <div className="gap-10 flex flex-col tablet:flex-row tablet:justify-center tablet:gap-20 desktop:flex-row desktop:justify-start desktop:gap-20">
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
            grid-template-rows: min-content 1fr;
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
            }
          }

          :root {
            --color-primary: #005af0;
            --space-1: 0.5rem; /* 8px */
            --space-4: 2rem; /* 32px */
          }

          /* Styles for the flex layout based tabs */

          /* Styles for the selector based tabs */
          .tabs-with-selector {
            display: flex;
          }

          .tabs-with-selector {
            display: flex;
          }

          .tabpanels [role="tabpanel"] {
            display: none;
          }
          .tabpanels [role="tabpanel"][selected] {
            display: grid;
          }

          [option] {
            cursor: pointer;
          }

          [option][selected] {
            cursor: auto;
          }

          [multiple] [option][selected] {
            cursor: pointer;
          }

          amp-selector[role="tablist"].tabs-with-selector {
            display: flex;
          }

          amp-selector[role="tablist"].tabs-with-selector {
            display: flex;
          }

          amp-selector.tabpanels [role="tabpanel"] {
            display: none;
            /* custom styling, feel free to change */
          }
          amp-selector.tabpanels [role="tabpanel"][selected] {
            display: grid;
          }

          amp-selector [option][selected]:focus {
            cursor: pointer;
            outline: 4px solid rgba(117, 170, 255, 0.5);
          }
          amp-selector [option][selected] {
            outline: none;
          }

          .destination-tabs [option][selected] {
            cursor: pointer;
            outline: none;
            border-bottom: 3px solid rgb(255, 255, 255);
            color: hsl(231, 77%, 90%);
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
