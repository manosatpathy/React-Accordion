import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex border w-5/12 m-24 flex-col bg-blue-600 font-mono">
      <div className="border flex flex-col gap-2 p-2 text-gray-300">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() =>
            activeIndex === 0 ? setActiveIndex(false) : setActiveIndex(0)
          }
        >
          <h1>Recommended</h1>
          <p>⬇</p>
        </div>
        {activeIndex === 0 && <h1> ↕️ Bbq Chicken pizza</h1>}
      </div>
      <div className="border flex flex-col gap-2 p-2 text-gray-300">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() =>
            activeIndex === 1 ? setActiveIndex(false) : setActiveIndex(1)
          }
        >
          <h1>Quesadilla-fantastic Four</h1>
          <p>⬇</p>
        </div>
        {activeIndex === 1 && <h1> ↕️ Quesadilla Pack Of 4 (veg)</h1>}
      </div>
      <div className="border flex flex-col gap-2 p-2 text-gray-300">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() =>
            activeIndex === 2 ? setActiveIndex(false) : setActiveIndex(2)
          }
        >
          <h1>Veg Pizza</h1>
          <p>⬇</p>
        </div>
        {activeIndex === 2 && <h1> ↕️ Traditional Pizza Veg</h1>}
      </div>
      <div className="border flex flex-col gap-2 p-2 text-gray-300 cursor-pointer">
        <div
          className="flex justify-between"
          onClick={() =>
            activeIndex === 3 ? setActiveIndex(false) : setActiveIndex(3)
          }
        >
          <h1>Non-veg Pizza</h1>
          <p>⬇</p>
        </div>
        {activeIndex === 3 && <h1> ↕️ Exotic Pizza Non-veg</h1>}
      </div>
    </div>
  );
};

export default Accordion;
