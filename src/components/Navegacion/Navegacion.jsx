import React from "react";
import {
  Header,
  ContenedorImg,
  Elementos,
} from "../../styled-components/Navegacion";
import NavLink from "./elementos/NavLink";
import Logo from "./elementos/Logo";

const Navigation = () => {
  return (
    <Header>
      <ContenedorImg to={"/"}>
        <Logo />
      </ContenedorImg>
      <Elementos>
        <NavLink />
      </Elementos>
    </Header>
  );
};

export default Navigation;
