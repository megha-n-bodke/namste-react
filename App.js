import React from "react";
import ReactDOM from "react-dom";
import "./Index.css";
//const heading = React.createElement(
/*   "h1",
  {
    id: "Heading",
  },
  "React Heading"
);

console.log(heading);

const Heading = () => <h1>JSX Heading {10 + 20}</h1>;

const element = (
  <h1>
    Element......
    {Heading()}
    <Heading />
  </h1>
);
console.log(element);
 */
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", { id: "heading" }, "Child Heading"),
//   React.createElement("h2", { id: "Sibling" }, "Sibling heading"),
// ]);

// Planning
/* - Header
  Logo 2)menubar
- Body
  - Resaurant Card Container
  - Resaurant card

-Footer
 */
const Heading = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img
          src="https://www.clipartmax.com/png/small/155-1558209_take-away-food-logos.png"
          alt="Take Away Food Logos @clipartmax.com"
          className="logo-img"
        ></img>
      </div>
      <div className="menu">
        <ul>
          <li>Home </li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Page = () => {
  return <Heading />;
};

// Body component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page />);
