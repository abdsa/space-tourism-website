import * as React from 'react';

interface ITestProps {
}

const TestComp: React.FunctionComponent<ITestProps> = (props) => {
    const [inputValue, setInputValue] = React.useState("");

  return (
    <>
    <input type="text" onChange={(e) => setInputValue(e.target.value)} className="outline-slate-700"/>
    <div>{inputValue}</div>    
    </>
  );
};
export default TestComp