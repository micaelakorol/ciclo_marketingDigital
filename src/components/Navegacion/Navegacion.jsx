import React from "react";
import {
  Header,
  ContenedorImg,
  Elementos,
} from "../../styled-components/Navegacion";
import NavLink from "./Elementos/NavLink";
import Logo from "./Elementos/Logo";

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
