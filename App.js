import React from "react";
import ReactDOM from "react-dom/client";

const Topheading = () => <h1>Top Heading</h1>;

const Bottomheading = () => {
  return (
    <div>
      <Topheading />

      <h2>this is bottom Heading</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Bottomheading />);
