import React from "react";
import {
  Header,
  ContenedorImg,
  Elementos,
} from "../../styled-components/Navegacion";
import Logo from "./Elementos/Logo";
import NavLink from './Elementos/NavLink'

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
