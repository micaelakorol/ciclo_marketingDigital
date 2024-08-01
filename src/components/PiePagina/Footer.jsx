import React from "react";
import { FooterPagina, Redes, Recursos } from "../../styled-components/Footer";
import Social from "./elementos/Social";
import ContactoFooter from "./elementos/ContactoFooter";
import RecursosFooter from "./elementos/RecursosFooter";
import { logoF } from "../../assets/var";

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
