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
            className="logomkt"
          />
        </LogoFooter>

        <Contacto>
          <b>Contacto</b>
          <a
            href="mailto:nicolasperezmarketing@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email{" "}
          </a>
          <a href="tel:+541124000822" rel="noreferrer">
            Teléfono
          </a>
          <a href="mailto:micaelakorol@gmail.com">Soporte Programador</a>
        </Contacto>

        <Recursos>
          <b>Recursos</b>
          <a
            href="https://forms.gle/WUSFDgH5poEJgkZV8"
            target="_blank"
            rel="noreferrer"
          >
            Cotización de Sitio web{" "}
          </a>
          {/** ------------------------------------------- */}
          <a
            href="https://forms.gle/UfBkXRvRb2Rj8mp4A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotización de Campañas
          </a>
          <a
            href=" https://www.iubenda.com/privacy-policy/92793178/legal"
            target="_blank"
            rel="noreferrer"
          >
            Politicas de Privacidad
          </a>
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
