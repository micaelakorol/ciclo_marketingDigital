import React from "react";
import { Links } from "../../../styled-components/Navegacion";

const NavLink = () => {
  return (
    <>
      <Links to="/redes-anuncios">Gestión Redes</Links>
      <Links to="/desarrollo">Desarrollo Web</Links>
      <Links as="a" href="https://forms.gle/Sc8f1ccmL26Cci936" target="_blank">
        Contacto
      </Links>
    </>
  );
};

export default NavLink;
