const heading = React.createElement("h1", {
    id: "Heading"
}, "React Heading");
//console.log(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "Child Heading"),
    React.createElement("h2", {
        id: "Sibling"
    }, "Sibling heading")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
