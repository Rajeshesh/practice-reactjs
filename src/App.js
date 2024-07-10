import React, { createContext, useState } from "react";
import Table from "./components/Table";
import UseLayoutEffect from "./components/UseLayoutEffect";
import TextTruncate from "react-text-truncate";
import MetaData from "./components/MetaData";
let Heading = () =>
  React.createElement(
    "h1",
    { className: "title", id: "h1" },
    "Starting today I am revising my reactjs knowledge..."
  );

let Header = ({ content }) => (
  <header className="App-header">
    <ul>
      {content.map((v, i) => (
        <li key={i}>{v}...</li>
      ))}
    </ul>
  </header>
);

let Content = (props) => {
  let { paragraph } = props;
  let allImage = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="">
      <p>{paragraph}</p>
      <TextTruncate line={2} element="p" truncateText="..." text={paragraph} />

      <button>Click me</button>
    </div>
  );
};

export const UseCan = createContext();

function App() {
  const [state, setState] = useState([
    "welcome",
    "to",
    "my",
    "react",
    "services",
  ]);
  let paragraph =
    "Now I am trying to revise my MERN Stack knowledge and then I will learn blockchain technology than I can freelance efficiently on both MERN Stack and blockchain technology.";
  return (
    <div className="App">
      <UseCan.Provider value={{ appState: { state, setState } }}>
        <MetaData title={"Home page"} />

        <Heading />
        <Header content={state} />
        {/* props drilling is parent to child and child to child */}
        <Content paragraph={paragraph} />
        <UseLayoutEffect />
        <Table />
      </UseCan.Provider>
    </div>
  );
}

export default App;
