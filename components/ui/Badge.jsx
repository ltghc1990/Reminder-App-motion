import React from "react";

const Badge = ({ text }) => {
  return (
    <span className="text-xs bg-gray-200 ml-2 p-1 rounded-md">{text}</span>
  );
};

export default Badge;
