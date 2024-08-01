import React, { useState } from "react";
import {
  ContenedorHeaderMob,
  MenuMobile,
  Modal,
  ContainerLink,
} from "../../styled-components/NavegacionMob";
import { Links } from "../../styled-components/Navegacion";
import Menu from "./elementos/Menu";
import Cerrar from "./elementos/Cerrar";
import Logo from "./elementos/Logo";
import NavLink from "./elementos/NavLink";
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
