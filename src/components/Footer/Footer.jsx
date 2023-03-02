import React from "react";
import logo from "../../assets/logoFooter.svg";
import {
  FooterPagina,
  Redes,
  LogoFooter,
} from "../../styled-components/Footer";
import Social from "./Social";
import ContactoFooter from "./ContactoFooter";
import RecursosFooter from "./RecursosFooter";

const Footer = () => {
  return (
    <>
      <FooterPagina as="footer">
        <LogoFooter>
          <img src={logo} alt="Logo de marketing" className="logomkt" />
        </LogoFooter>
        <ContactoFooter />
        <RecursosFooter />
        <Redes>
          <Social />
        </Redes>
        <p className="copy">© 2023 Todos los derechos reservados</p>
      </FooterPagina>
    </>
  );
};

export default Footer;
