import React from "react";
import UseState from "./components/UseState";
import Table from "./components/Table";

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
  return (
    <div className="">
      <p>{paragraph}</p>
      <button>Click me</button>
    </div>
  );
};

function App() {
  let arr = ["welcome", "to", "my", "react", "services"];
  let paragraph =
    "Now I am trying to revise my MERN Stack knowledge and then I will learn blockchain technology than I can freelance efficiently on both MERN Stack and blockchain technology.";
  return (
    <div className="App">
      <Heading />
      <Header content={arr} />
      <Content paragraph={paragraph} />
      <UseState />
      <Table />
    </div>
  );
}

export default App;
