import React from "react";

const Button = ({ label, onClick, type = "primary" }) => {
  const baseClasses = "px-4 py-2 rounded-md text-white font-semibold";
  const typeClasses =
    type === "primary"
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-gray-600 hover:bg-gray-700";
  return (
    <button className={`${baseClasses} ${typeClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
