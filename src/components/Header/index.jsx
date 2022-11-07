import React from "react";
import meImg from "../../assets/me.png";
import NavbarDrawer from "../Navbar/NavbarDrawer";
import useToggle from "../../hooks/useToggle";

const Header = ({ title = "Home" }) => {
  const [open, setOpen] = useToggle(false);

  return (
    <>
      <header className="min-h-[53px] flex px-4 items-center fixed w-full bg-white">
        <div className="min-w-[52px] max-w-[52px] mr-1">
          <img
            src={meImg}
            alt=""
            className="h-[37px] w-[37px] rounded-full object-fit cursor-pointer "
            onClick={() => setOpen(true)}
          />
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </header>

      <NavbarDrawer open={open} onClose={setOpen} />
    </>
  );
};

export default Header;
