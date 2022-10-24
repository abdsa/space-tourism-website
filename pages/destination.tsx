import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import jsonData from "../data.json";

export const config = {
  amp: true,
};

const Destination: NextPage = () => {
  return (
    <>
      <nav className="pl-[max(3.7vw,24px)] desktop:pt-10">
        <Header></Header>
      </nav>
      <main></main>

      <footer></footer>

      <style jsx global>
        {`
          body {
            background: url("/background-home-mobile.jpg") no-repeat;
            background-size: cover;
          }

          @media (min-width: 768px) {
            body {
                background-image: url(/background-home-tablet.jpg);
            }
        }
        
        @media (min-width: 1440px) {
          body {
                background-image: url(/background-home-desktop.jpg);
            }
        }
        `}
      </style>
    </>
  );
};

export default Destination;
