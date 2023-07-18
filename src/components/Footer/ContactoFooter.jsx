import React from "react";
import { Contacto } from "../../styled-components/Footer";
import Link from "../../reusable/Link";

const ContactoFooter = () => {
  return (
    <Contacto>
      <b>Cotizaciones</b>
      <Link href="https://forms.gle/WUSFDgH5poEJgkZV8">
        Cotización de Sitio web
      </Link>
      <Link href="https://forms.gle/UfBkXRvRb2Rj8mp4A">
        Cotización de Campañas
      </Link>
    </Contacto>
  );
};

export default ContactoFooter;
