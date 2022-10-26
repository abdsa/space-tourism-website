import * as React from "react";
import jsonData from "../data.json";
interface IDestinationTabsProps {}

const DestinationTabs: React.FunctionComponent<IDestinationTabsProps> = (
  props
) => {
  return (
    <div className="griddy grid desktop:grid-cols-[30vw_minmax(0,40rem)] desktop:gap-10">
      <amp-selector
        className="tabs-with-selector destination-tabs grid grid-flow-col place-content-center gap-10 justify-self-start pt-6 font-barlowC text-bodyText tracking-navText text-white"
        role="tablist"
        keyboard-select-mode="focus"
        on="select:myTabPanels.toggle(index=event.targetOption, value=true)"
        style={{ gridArea: "dt" }}
      >
        {jsonData.destinations.map((item, index) => {
          return (
            <div
              id={`${item.name} tab`}
              role="tab"
              aria-controls={`${item.name} description`}
              option={`${index}`}
              selected={index === 0 ? "true" : ""}
              key={`${index}`}
              className="destination-tab pb-6 uppercase transition-[border-width]"
              tabIndex={0}
            >
              {item.name}
            </div>
          );
        })}
      </amp-selector>
    </div>
  );
};

export default DestinationTabs;