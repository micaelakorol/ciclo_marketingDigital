import React from "react";
import logo from "../../assets/logoFooter.svg";
import {
  FooterPagina,
  Contacto,
  Recursos,
  Redes,
  LogoFooter,
} from "../../styled-components/Footer";
import Social from "./Social";

const Footer = () => {
  return (
    <>
      <FooterPagina as="footer">
        <LogoFooter>
          <img
            src={logo}
            alt="Logo de marketing"
            className="logo ciclo marketing"
          />
        </LogoFooter>

        <Contacto>
          <b>Contacto</b>
          <a
            href="mailto:nicolasperezmarketing@gmail.com"target="_blank" rel="noreferrer">
            Email </a>
          <a href="tel:+542215645258" rel="noreferrer">Teléfono</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeV2UXaBdYPZUWYGpAbYXLs7zLXxz6SH4SlHECcoHoDYeDGnQ/viewform" target="_blank" rel="noreferrer">
            Preguntas </a>
        </Contacto>

        <Recursos>
          <b>Recursos</b>
          <a
            href="https://docs.google.com/forms/d/1KjFpJE9wTLUN9JFRyIHcoUPldKJrFjAokUhy2T5uflM/edit"
            target="_blank"
            rel="noreferrer">Cotización de sitio web </a>
            {/** ------------------------------------------- */}
          <a href="https://docs.google.com/forms/d/1tSDvsDQeHIf4SiFgW7cPs4SUyyJzeO7NlUGkB4hkZPo/edit" target="_blank" rel="noopener noreferrer">Cotización de Campañas</a>
          <a href="mailto:micaelakorol@gmail.com">Soporte</a>
        </Recursos>
        <Redes>
          <Social />
        </Redes>
        <p className="copy">© 2023 MK Todos los derechos reservados</p>
      </FooterPagina>
    </>
  );
};

export default Footer;
