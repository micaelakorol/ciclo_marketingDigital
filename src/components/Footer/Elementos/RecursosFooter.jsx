import React from "react";
import { Recursos } from "../../../styled-components/Footer";
import { Link } from "react-router-dom";
const RecursosFooter = () => {
  return (
    <Recursos>
      <b>Más información</b>
      <Link to="/sobre-nosotros">Sobre Nosotros</Link>
      <Link to="/politicas-de-privacidad">Politicas de Privacidad</Link>
    </Recursos>
  );
};

export default RecursosFooter;
