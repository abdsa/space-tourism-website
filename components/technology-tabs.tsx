import * as React from "react";
import jsonData from "../data.json";

const technology = jsonData.technology;
interface ITechnologyTabsProps {}

const TechnologyTabs: React.FunctionComponent<ITechnologyTabsProps> = (
  props
) => {
  return (
    <>
      <amp-selector
        className="tabs-with-selector technology-tabs grid grid-flow-col grid-cols-3 place-content-center gap-6 justify-self-center desktop:justify-self-end font-bellefair text-navText text-white tablet:text-[1.5rem] desktop:grid-flow-row desktop:grid-cols-1 desktop:text-mdHeading"
        role="tablist"
        keyboard-select-mode="focus"
        on="select:technology-tab-panels.toggle(index=event.targetOption, value=true)"
      >
        {technology.map((item, index) => {
          return (
            <button
              key={item.name}
              id={`${item.name} tab`}
              role="tab"
              aria-controls={`${item.name} description`}
              //@ts-ignore
              option={`${index}`}
              selected={index === 0 ? "true" : ""}
              className="grid h-10 w-10 place-content-center rounded-full tablet:h-[3.75rem] tablet:w-[3.75rem] desktop:h-[5rem] desktop:w-[5rem]"
            >
              {index + 1}
            </button>
          );
        })}
      </amp-selector>

      <style jsx global>
        {`
          * {
            --primary: #0b0d17;
          }

          .technology-tabs [option][aria-selected="false"] {
            color: white;
            border: 1px solid rgb(255, 255, 255, 0.5);
          }
        

          .technology-tabs [option][selected] {
            background-color: white
            color: #0b0d17;
          }
          }
        `}
      </style>
    </>
  );
};

export default TechnologyTabs;
