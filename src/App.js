import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div className="flex justify-center">
    <Accordion/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
