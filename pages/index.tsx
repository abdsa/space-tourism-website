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
      <div className="grid grid-cols-[30%,70%]">
        <nav>
          <Header></Header>
        </nav>
        <main className="home-background-img"></main>

        <footer></footer>
      </div>
    </>
  );
};

export default Home;
