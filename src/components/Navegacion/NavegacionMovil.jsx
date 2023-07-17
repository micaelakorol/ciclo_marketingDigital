import React, { useState } from "react";
import {
  ContenedorHeaderMob,
  MenuMobile,
  IconosMoviles,
  Modal,
  ContainerLink,
} from "../../styled-components/NavegacionMob";
import { Formulario, Links } from "../../styled-components/Navegacion";
import { menu, cerrar, logo } from "./Variables/var";
const NavegacionMovil = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <ContenedorHeaderMob>
      <IconosMoviles>
        <img
          src={menu}
          alt="Icono menu"
          onClick={() => setMenuMobile(true)}
        />
      </IconosMoviles>
      {menuMobile ? (
        <Modal>
          <MenuMobile onClick={() => setMenuMobile(false)}>
            <img src={logo} alt="logo-marketing" />
            <img
              src={cerrar}
              className="btnCerrar"
              alt="Icono cerrar"
              onClick={() => setMenuMobile(false)}
            />

            <ContainerLink>
              <Links to="/">Inicio</Links>
              <Links to="/redes-anuncios">Gestión Redes</Links>
              <Links to="/desarrollo">Desarrollo Web</Links>
              <Formulario
                as="a"
                href="https://forms.gle/Sc8f1ccmL26Cci936"
                target="_blank"
                rel="noreferrer"
              >
                Contacto
              </Formulario>
            </ContainerLink>
          </MenuMobile>
        </Modal>
      ) : null}
    </ContenedorHeaderMob>
  );
};

export default NavegacionMovil;
