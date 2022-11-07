import React, { useState } from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

import { GiPayMoney } from "react-icons/gi";

const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex p-4 items-center justify-between w-full active:bg-gray-100 cursor-pointer transition-all"
        onClick={() => setOpen(!open)}
      >
        <p className="font-bold">{title}</p>
        <RiArrowDropDownLine
          className={
            open
              ? "-rotate-180 text-emerald-500 text-3xl transition-all"
              : "text-3xl transition-all"
          }
        />
      </div>
      <div className={!open ? "hidden" : "block "}>{children}</div>
    </>
  );
};

export default Dropdown;
