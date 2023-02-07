import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { SiShopware } from "react-icons/si";
import logo from "./../data/Aniket_Dhage-logo.png";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "./../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleSidebarClose = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-800 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={handleSidebarClose}
              className="h-[60px] w-[250px] items-center gap-3 my-4 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              {/* <SiShopware /> 
              <span>Smart Dashboard</span> */}
              <img src={logo} alt="" />
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl mb-[30%] lg:hidden rounded-full mt-4 block  "
                onClick={() => setActiveMenu((prev) => !prev)}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((items) => {
              return (
                <div key={items.title}>
                  <p className="text-gray-400 mt-4 m-3 uppercase">
                    {" "}
                    {items.title}
                  </p>
                  {items.links.map((link) => {
                    return (
                      <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={handleSidebarClose}
                        style={({ isActive }) => ({
                          backgroundColor: isActive && currentColor,
                        })}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
