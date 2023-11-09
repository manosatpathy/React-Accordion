import React, { useState } from "react";

const Accordion = () => {
  const [showDiv, setShowDiv] = useState(0);

  return (
    <div className="flex border w-5/12 m-24 flex-col bg-blue-600 font-mono">
      <div className="border flex flex-col gap-2 p-2 text-gray-300">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => (showDiv === 0 ? setShowDiv(false) : setShowDiv(0))}
        >
          <h1>Recommended</h1>
          <p>↕️</p>
        </div>
        {showDiv === 0 && <h1> ⬇ Bbq Chicken pizza</h1>}
      </div>
      <div className="border flex flex-col gap-2 p-2 text-gray-300">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => (showDiv === 1 ? setShowDiv(false) : setShowDiv(1))}
        >
          <h1>Quesadilla-fantastic Four</h1>
          <p>↕️</p>
        </div>
        {showDiv === 1 && <h1> ⬇ Quesadilla Pack Of 4 (veg)</h1>}
      </div>
      <div className="border flex flex-col gap-2 p-2 text-gray-300">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => (showDiv === 2 ? setShowDiv(false) : setShowDiv(2))}
        >
          <h1>Veg Pizza</h1>
          <p>↕️</p>
        </div>
        {showDiv === 2 && <h1> ⬇ Traditional Pizza Veg</h1>}
      </div>
      <div className="border flex flex-col gap-2 p-2 text-gray-300 cursor-pointer">
        <div
          className="flex justify-between"
          onClick={() => (showDiv === 3 ? setShowDiv(false) : setShowDiv(3))}
        >
          <h1>Non-veg Pizza</h1>
          <p>↕️</p>
        </div>
        {showDiv === 3 && <h1> ⬇ Exotic Pizza Non-veg</h1>}
      </div>
    </div>
  );
};

export default Accordion;
