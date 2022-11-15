import React from "react";
import { ParseInitials } from "../../utils/ParseInitials";
import defaultIcon from "../../assets/defaultUser.png";
export const Avatar = ({
  src,
  alt = "",
  children,
  size = "normal",
  onClick = null,
}) => {
  let sizeClassName = "w-[50px] h-[50px]";
  if (size === "large") sizeClassName = "w-[60px] h-[60px]";
  else if (size === "small") sizeClassName = "w-[36px] h-[36px]";

  if (!src && !children) {
    return (
      <img
        src={defaultIcon}
        className={`${sizeClassName} rounded-full object-fit cursor-pointer ring-1 ring-white`}
        alt={alt}
        onClick={onClick}
      />
    );
  }

  if (src) {
    return (
      <img
        src={src}
        className={`${sizeClassName} rounded-full object-fit cursor-pointer`}
        alt={alt}
        onClick={onClick}
      />
    );
  }

  return (
    <div
      className={`${sizeClassName} rounded-full bg-gray-300 flex text-black justify-center items-center font-bold object-fit cursor-pointer`}
      onClick={onClick}
    >
      <span>{ParseInitials(children)}</span>
    </div>
  );
};
