import React from "react";
import {
  FooterPagina,
  Redes,
  LogoFooter,
} from "../../styled-components/Footer";
import Social from "./Social";
import ContactoFooter from "./ContactoFooter";
import RecursosFooter from "./RecursosFooter";
import {logoF} from './Variables/var'

const Footer = () => {
  return (
    <>
      <FooterPagina as="footer">
        <LogoFooter>
          <img src={logoF} alt="Logo de marketing" className="logomkt" />
        </LogoFooter>
        <ContactoFooter />
        <RecursosFooter />
        <Redes>
          <Social />
        </Redes>
      {/**<p className="copy">© 2023 Todos los derechos reservados</p> */}  
      </FooterPagina>
    </>
  );
};

export default Footer;
