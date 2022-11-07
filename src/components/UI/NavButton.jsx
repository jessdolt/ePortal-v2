import React from "react";

const NavButton = ({ label, className, icon }) => {
  return (
    <div className="py-3 px-4 flex items-center active:bg-gray-100  cursor-pointer transition-all">
      {icon && <div className="mr-4">{icon}</div>}
      {label}
    </div>
  );
};

export default NavButton;
