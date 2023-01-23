import React from "react";
import { Contacto } from "../../styled-components/Footer";

const ContactoFooter = () => {
  return (
    <Contacto>
      <b>Cotizaciones</b>
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
    </Contacto>
  );
};

export default ContactoFooter;
