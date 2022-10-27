import * as React from "react";

interface IExploreProps {}

const Explore: React.FunctionComponent<IExploreProps> = (props) => {
  return (
    <>
      <div className="explore-button ripple uppercase cursor-pointer select-none font-bellefair text-black">Explore</div>
    </>
  );
};

export default Explore;
