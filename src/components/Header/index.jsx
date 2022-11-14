import React from "react";
import meImg from "../../assets/me.png";
import NavbarDrawer from "../Navbar/NavbarDrawer";
import useToggle from "../../hooks/useToggle";

const Header = ({ title = "Home" }) => {
  const [open, setOpen] = useToggle(false);

  return (
    <>
      <header className="min-h-[53px] flex px-4 items-center fixed w-full max-w-[598px] bg-white">
        <div className="min-w-[52px] sm:hidden max-w-[52px] mr-1">
          <img
            src={meImg}
            alt=""
            className="h-[37px] w-[37px] rounded-full object-fit cursor-pointer "
            onClick={() => setOpen(true)}
          />
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </header>

      {/* <div className="hidden mt-[60px] px-4 sm:flex w-full">
        <div className="min-w-[52px] max-w-[52px] mr-1">
          <img
            src={meImg}
            alt=""
            className="h-[50px] w-[50px] rounded-full object-fit cursor-pointer "
            onClick={() => setOpen(true)}
          />
        </div>
        <div className="flex-1 py-2 bg-red-300">
          <div className="overflow-hidden ">What's Happening</div>
        </div>
      </div> */}
      <NavbarDrawer open={open} onClose={setOpen} />
    </>
  );
};

export default Header;
