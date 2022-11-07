import React, { useEffect, useState } from "react";
import meImg from "../../assets/me.png";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiOutlineFieldTime, AiOutlineClose } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";

import { Link } from "react-router-dom";
import Dropdown from "../UI/Dropdown";
import NavButton from "../UI/NavButton";

const NavbarDrawer = ({ open, onClose }) => {
  return (
    <div
      className={`overlay fixed h-full w-full top-0 left-0 bg-black/20 transition-all duration-150 z-10 ${
        !open ? "opacity-0 invisible" : "opacity-1 visible"
      }`}
      onClick={(e) => {
        e.target.classList.contains("overlay") && onClose(false);
      }}
    >
      <nav
        className={`h-full origin-left bg-white flex flex-col overflow-scroll duration-250 z-50 transition-all ${
          !open ? "w-0" : "w-[270px]"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <h2 className="font-bold">Account Info</h2>
          <button>
            <AiOutlineClose onClick={() => onClose(false)} />
          </button>
        </div>
        <div className="px-4 mt-2">
          <img
            src={meImg}
            alt=""
            className="h-[37px] w-[37px] rounded-full object-fit cursor-pointer "
          />
          <p className="text-lg font-bold leading-none mt-2">Jess Roque</p>
          <p className="text-gray-400 text-sm leading-none">MIS</p>
          <p className="text-gray-400 text-sm mt-3">jessroque16@gmail.com</p>
        </div>
        <div>
          <Link to="/profile" className="flex p-4 items-center text-xl w-full">
            <AiOutlineUser className="mr-4" />
            <p className="font-bold">Profile</p>
          </Link>
          <Link to="/topics " className="flex p-4 items-center text-xl w-full">
            <AiOutlineMessage className="mr-4" />
            <p className="font-bold">Topics</p>
          </Link>

          <div className="border-t mx-4"></div>
          <Dropdown title="Programs">
            <NavButton icon={<HiOutlineNewspaper />} label="LVOBOTWFH" />
            <NavButton icon={<RiTimeLine />} label="Time Logs" />
            <NavButton icon={<AiOutlineFieldTime />} label="Time Adjustment" />
            <NavButton icon={<GiPayMoney />} label="Payroll Adjustment" />
          </Dropdown>

          <Dropdown title="Payroll">
            <NavButton label="Payslip" />
            <NavButton label="Loans" />
            <NavButton label="Advances" />
          </Dropdown>

          <Dropdown title="Pages">
            <NavButton label="Legacy Viewing" />
            <NavButton label="Bulletin" />
            <NavButton label="HR Policies" />
            <NavButton label="Corporate Email Directory" />
          </Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDrawer;
