import React, { useState } from "react";
import {
  ContenedorHeaderMob,
  MenuMobile,
  Modal,
  ContainerLink,
} from "../../styled-components/NavegacionMob";
import { Links } from "../../styled-components/Navegacion";
import NavLink from "./Elementos/NavLink";
import Menu from "./Elementos/Menu";
import Cerrar from "./Elementos/Cerrar";
import Logo from "./Elementos/Logo";
const NavegacionMovil = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <ContenedorHeaderMob>
      <Menu setMenuMobile={setMenuMobile} />
      {menuMobile ? (
        <Modal>
          <MenuMobile onClick={() => setMenuMobile(false)}>
            <Logo />
            <Cerrar setMenuMobile={setMenuMobile} />
            <ContainerLink>
              <Links to="/">Inicio</Links>
              <NavLink />
            </ContainerLink>
          </MenuMobile>
        </Modal>
      ) : null}
    </ContenedorHeaderMob>
  );
};

export default NavegacionMovil;
