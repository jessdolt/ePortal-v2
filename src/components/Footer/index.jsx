import React from "react";
import { RiHome7Line, RiHome7Fill, RiNotification2Line } from "react-icons/ri";
import { FaSearch, FaRegEnvelope } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const normalState = "flex-1";
  const activeClassName = "flex-1 text-accent";

  const data = [
    { link: "/", icon: <RiHome7Fill className="max-h-7 text-2xl mx-auto" /> },
    {
      link: "/explore",
      icon: <BiSearch className="max-h-7 text-2xl mx-auto" />,
    },
    {
      link: "/notification",
      icon: <RiNotification2Line className="max-h-7 text-2xl mx-auto" />,
    },
    {
      link: "/messages",
      icon: <FaRegEnvelope className="max-h-7 text-2xl mx-auto" />,
    },
  ];
  const NavLists = data.map((x, i) => (
    <NavLink
      to={x.link}
      key={i}
      className={({ isActive }) => (isActive ? activeClassName : normalState)}
    >
      {x.icon}
    </NavLink>
  ));

  return (
    <nav className="max-h-[16vh] min-h-[53px] w-full flex fixed bottom-0 sm:hidden bg-white dark:bg-dark justify-center items-center ">
      {NavLists}
      {/* <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassName : normalState)}
      >
        <RiHome7Fill className="max-h-7 text-2xl mx-auto" />
      </NavLink>
      <NavLink to="/explore" className="flex-1">
        <BiSearch className="max-h-7 text-2xl mx-auto " />
      </NavLink>
      <NavLink to="/notification" className="flex-1">
        <GrNotification className="max-h-7 text-xl mx-auto " />
      </NavLink>
      <NavLink to="/messages" className="flex-1">
        <FaRegEnvelope className="max-h-7 text-2xl mx-auto " />
      </NavLink> */}
    </nav>
  );
};

export default Footer;
