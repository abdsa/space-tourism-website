import Link from "next/link";
import * as React from "react";

interface IExploreProps {}

const Explore: React.FunctionComponent<IExploreProps> = (props) => {
  return (
    <>
      <Link
        className="explore-button ripple cursor-pointer select-none self-center justify-self-center font-bellefair uppercase text-black outline-none"
        href={"/destination"}
      >
        Explore
      </Link>
    </>
  );
};

export default Explore;
