import React from "react";
import ReactDOM from "react-dom/client"; //-----> React 18
// import { createRoot } from "react-dom/client"; // ----> React 19

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

console.log(parent);

// createRoot(document.getElementById("root")).render(parent); // ----> React 19

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
