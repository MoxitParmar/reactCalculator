import React from "react";

const Operators = ({svg}) => {
  return (
    <div>
      <button className="btn btn-circle btn-outline  w-14 h-14 text-2xl">
        {String(svg)}
      </button>
    </div>
  );
};

export default Operators;
