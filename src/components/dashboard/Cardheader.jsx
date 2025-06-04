import React from "react";

const Cardheader = ({ title1, title2, head }) => {
  return (
    <div className="text-center py-3 bg-gray-200 rounded-lg mb-6">
      <h1 className="text-lg font-bold text-gray-800">{title1}</h1>
      <h2 className="text-md font-semibold text-gray-700">{title2}</h2>
      {head && (
        <h3 className="text-center text-lg font-bold text-gray-800 border-b pb-2">
          {head}
        </h3>
      )}
    </div>
  );
};

export default Cardheader;
