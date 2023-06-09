import React from "react";

import { MenuCloseFunc } from "../../../interface";

import Link from "../../Links";

import { MenuClose, MenuContainer } from "./styledComponent";

const Menu = (props: MenuCloseFunc) => {
  const { onChange } = props;

  const handleCloseMenu = () => {
    onChange();
  };

  return (
    <>
      <MenuContainer id="MenuPopUp">
        <MenuClose onClick={handleCloseMenu}>
          <i className="fa-solid fa-xmark"></i>
        </MenuClose>
        <div>
          <Link />
        </div>
      </MenuContainer>
    </>
  );
};

export default Menu;
