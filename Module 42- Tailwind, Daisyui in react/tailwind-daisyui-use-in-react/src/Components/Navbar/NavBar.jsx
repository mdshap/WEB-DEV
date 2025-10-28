import React, { useState } from "react";
import LinkNav from "./LinkNav";
import { Menu } from "lucide-react";
import { X, CircleCheckBig } from "lucide-react";

const navbarItems = [
  {
    name: "Home",
    data: "Main landing page",
    link: "/home",
  },
  {
    name: "About",
    data: "Information about us",
    link: "/about",
  },
  {
    name: "Services",
    data: "List of provided services",
    link: "/services",
  },
  {
    name: "Blog",
    data: "Latest news and articles",
    link: "/blog",
  },
  {
    name: "Contact",
    data: "Get in touch with us",
    link: "/contact",
  },
  {
    name: "FAQ",
    data: "Frequently asked questions",
    link: "/faq",
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navbarItems.map((route) => <LinkNav route={route}></LinkNav>);

  return (
    <nav className="flex justify-between px-10 bg-blue-950 p-3 md:justify-around items-center ">
      <div className="gap-4 flex">
        <span onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="md:hidden" />
          ) : (
            <Menu className="md:hidden" />
          )}
        </span>
        <ul className={`md:hidden  bg-green-300 rounded-xl text-black text-center mx-auto absolute ${menuOpen? 'top-14' : '-top-70'} duration-100`}>
          {
            links
          }
        </ul>

        <h3 className="font-bold text-xl text-green-400">The Practice</h3>
      </div>
      <ul className={`gap-8 justify-center hidden md:flex`}>{links}</ul>
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
