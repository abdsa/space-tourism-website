import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import data from "../data.json";
import types from "../data";
export const config = {
  amp: true,
};

const Home: NextPage = () => {
  return (
    <>
      <nav>
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

          @media (min-width: 35rem) {
            body {
                background-image: url(/background-home-tablet.jpg);
            }
        }
        
        @media (min-width: 45rem) {
          body {
                background-image: url(/background-home-desktop.jpg);
            }
        }
        `}
      </style>
    </>
  );
};

export default Home;
