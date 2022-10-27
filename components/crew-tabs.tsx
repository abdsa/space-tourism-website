import * as React from "react";
import jsonData from "../data.json";
interface ICrewTabsProps {}

const CrewTabs: React.FunctionComponent<ICrewTabsProps> = (props) => {
  return (
    <>
      <amp-selector
        className="tabs-with-selector justify-self-center crew-tabs grid grid-flow-col place-content-center gap-10 desktop:justify-self-start font-barlowC text-bodyText tracking-navText text-white "
        role="tablist"
        keyboard-select-mode="focus"
        on="select:crew-tab-panels.toggle(index=event.targetOption, value=true)"
      >
        {jsonData.crew.map((item, index) => {
          return (
            <button
              id={`${item.name} tab`}
              role="tab"
              aria-controls={`${item.name} description`}
              //@ts-ignore
              option={`${index}`}
              selected={index === 0 ? "true" : ""}
              key={`${index}`}
              className="uppercase transition-[border-bottom] duration-150 rounded-full"
              tabIndex={0}
            >
                
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full">
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="7.5"
                  fill="white"
                />
              </svg>
            </button>
          );
        })}
      </amp-selector>

      <style jsx global>
        {`
        
        .crew-tabs [option][aria-selected="false"] svg circle{
            opacity: 0.174363;
        }

        .crew-tabs [option][selected] svg circle{
            opacity: 1;
        }
        
        `}
      </style>
    </>
  );
};

export default CrewTabs;
