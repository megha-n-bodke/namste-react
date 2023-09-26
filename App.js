import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement(
  "h1",
  {
    id: "Heading",
  },
  "React Heading"
);

console.log(heading);
const element = <h1>Jsx heading</h1>;
console.log(element);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", { id: "heading" }, "Child Heading"),
//   React.createElement("h2", { id: "Sibling" }, "Sibling heading"),
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

const Heading = () => <h1>JSX Heading</h1>;
root.render(<Heading />);
