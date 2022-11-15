import React from "react";
import meImg from "../../assets/me.png";
import { Link } from "react-router-dom";
import { RiHome7Fill, RiNotification2Line } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Avatar } from "../UI/Avatar";
const Navbar = () => {
  const data = [
    {
      link: "/",
      label: "Home",
      icon: <RiHome7Fill className="text-2xl cursor-pointer -mb-[2px]" />,
    },
    {
      link: "/explore",
      label: "Explore",
      icon: <BiSearch className="text-2xl cursor-pointer -mb-[2px]" />,
    },
    {
      link: "/notification",
      label: "Notifications",
      icon: (
        <RiNotification2Line className="text-2xl cursor-pointer -mb-[2px]" />
      ),
    },
    {
      link: "/messages",
      label: "Messages",
      icon: <FaRegEnvelope className="text-2xl cursor-pointer -mb-[2px]" />,
    },
  ];

  const Navlists = data.map((x, i) => (
    <Link
      to={x.link}
      key={i}
      className="inline-block p-3 hover:bg-gray-200 dark:hover:bg-dark-light hover:rounded-full duration-150 mt-1"
    >
      <div className="flex items-center ">
        {x.icon}
        <p className="hidden xl:block mx-4 text-xl">{x.label}</p>
      </div>
    </Link>
  ));

  return (
    <div className="hidden shrink-0 sm:flex sm:w-[68px] md:w-[120px] lg:w-[150px] lg:flex xl:flex-1 max-w-[300px] justify-end min-h-screen relative">
      <div className="fixed flex flex-col justify-between top-0 md:px-3 w-[68px] xl:w-[275px] h-full ">
        <div>
          <Link to="/" className="hidden xl:block">
            <h1 className="font-bold text-2xl mt-3 px-2">ePortal</h1>
          </Link>
          <nav className="flex flex-col justify-center items-center lg:items-start mt-4">
            {Navlists}
          </nav>
          <div className="mt-7 pr-5">
            <button className="btn-primary rounded-full p-4 w-full font-bold hidden xl:block">
              Post
            </button>
          </div>
        </div>

        <div className="mb-3 py-10">
          <div className="flex justify-center items-center">
            <div className="min-w-[52px] max-w-[52px] flex justify-center items-center mr-2">
              <Avatar src={meImg} size="small" />
            </div>
            <div className=" w-full justify-between items-center hidden xl:flex">
              <div>
                <p>Jess Roque</p>
                <p className="text-gray-500 -mt-1">@jessroque</p>
              </div>
              <div>...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
