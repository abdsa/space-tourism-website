import * as React from "react";
import jsonData from "../data.json"
interface IDestinationTabsProps {}

const DestinationTabs: React.FunctionComponent<IDestinationTabsProps> = (
  props
) => {
  return (
    <div className="grid grid-cols-2 griddy">
    <amp-selector
      className="tabs-with-selector destination-tabs grid grid-flow-col justify-self-start place-content-center pt-6 px-12 gap-10 font-barlowC text-bodyText tracking-navText text-white"
      role="tablist"
      keyboard-select-mode="focus"
      on="select:myTabPanels.toggle(index=event.targetOption, value=true)"
      style={{gridArea: "dt"}}>
      {jsonData.destinations.map((item, index) => {
        return (
          <div
            id={`${item.name} tab`}
            role="tab"
            aria-controls={`${item.name} description`}
            option={`${index}`}
            selected={index === 0 ? "true" : ""}
            key={`${index}`}
            className="pb-6 destination-tab uppercase transition-[border-width]"
            tabIndex={0}>
            {item.name}
          </div>
        );
      })}
    </amp-selector>
    </div>
  );
};

export default DestinationTabs;
