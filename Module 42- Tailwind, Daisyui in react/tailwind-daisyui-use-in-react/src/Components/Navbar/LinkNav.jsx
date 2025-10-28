import React from "react";

const LinkNav = ({ route }) => {
  return (
    <div>
      <li className="hover:bg-blue-800 hover:text-white rounded-sm px-8 py-2">
        <a href={route.link}>{route.name}</a>
      </li>
    </div>
  );
};

export default LinkNav;
