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
      <main className="grid grid-flow-col grid-rows-[repeat(3,min-content)] main-grid gap-10 text-white place-content-center">
      <h1 className="uppercase ml-[5vw] font-barlowC font-bold text-smHeading tracking-smHeading"><span className="mr-5 text-[rgb(255,255,255,0.25)]">01</span>Pick your destination</h1>
        <DestinationTabs></DestinationTabs>
        <amp-selector
          className="tabpanels article-section grid grid-flow-col gap-5 font-barlowC text-bodyText tracking-navText text-secondary"
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
                className="grid grid-flow-col grid-cols-[min-content_auto] gap-10 place-content-center"
                key={`${index}`}
                option="true"
                selected={index === 0 ? "true" : ""}
              >
                <div className="justify-self-center -mt-20">
                <amp-img
                  layout="fixed"
                  width="500"
                  height="500"
                  src={`${item.images.webp}`}
                  className=""
                />
                </div>
                <p className="font-barlow text-white max-w-[444px]">{item.description}</p>
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
            color: hsl(231, 77%, 90%)
          }

          .destination-tabs [option][aria-selected="false"]:hover {
            border-bottom: 3px solid rgb(255, 255, 255, 0.5);
          }

          .griddy{
            grid-template-areas: ". dt"
          }
          
          
        
        `}
      </style>
    </>
  );
};

export default Destination;
