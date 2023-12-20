import React from "react";
import {
  FooterPagina,
  Redes,
  Recursos,
} from "../../styled-components/Footer";
import Social from "./Social";
import ContactoFooter from "./ContactoFooter";
import RecursosFooter from "./RecursosFooter";
import { logoF } from "../../variables/var";

const Footer = () => {
  return (
    <>
      <FooterPagina as="footer">
        <Recursos>
          <img src={logoF} alt="logo-ciclo" className="logomkt" />
        </Recursos>
        <ContactoFooter />
        <RecursosFooter />
        <Redes>
          <Social />
        </Redes>
      </FooterPagina>
    </>
  );
};

export default Footer;
