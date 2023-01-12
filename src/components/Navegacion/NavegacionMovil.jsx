import React, { useState } from "react";
import {
  ContenedorHeaderMob,
  MenuMobile,
  IconosMoviles,
  Modal,
  ContainerLink,
} from "../../styled-components/NavegacionMob";
import {ReactComponent as Menu} from "../../assets/menu.svg"
import {ReactComponent as Logo} from "../../assets/logo.svg"
import {ReactComponent as Cerrar} from "../../assets/icon-close.svg"
import { Formulario, Links } from "../../styled-components/Navegacion";
const NavegacionMovil = () => {

  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <ContenedorHeaderMob>
      <IconosMoviles>
        <Menu onClick={() => setMenuMobile(true)} aria-expanded="true" alt='Icono menu'/>
      </IconosMoviles>
      {menuMobile ? (
        <Modal>
          <MenuMobile>
            <Logo className="logo-mobile" alt='logo marketing'/>  
            <Cerrar className="btnCerrar" onClick={() => setMenuMobile(false)} alt='Icono cerrar'
            aria-expanded="false"
            />
            <ContainerLink>
            <Links to="/">Inicio</Links>
            <Links to="/redes-anuncios">Gestión Redes</Links>
              <Links to="/desarrollo">Desarrollo Web</Links>
              <Links to="/blog">Blog</Links>
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
