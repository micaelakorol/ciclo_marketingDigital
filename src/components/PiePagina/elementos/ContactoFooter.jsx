import React from "react";
import { Contacto } from "../../../styled-components/Footer";
import Link from "../../../reusable/Link";

const ContactoFooter = () => {
  return (
    <Contacto>
      {" "}
      <b>Enlaces útiles</b>
      <Link href="https://shrtco.de/Hmr1c">Agendá tu llamada</Link>
      <Link href="https://forms.gle/WUSFDgH5poEJgkZV8">
        Cotización Sitio Web
      </Link>
    </Contacto>
  );
};

export default ContactoFooter;
