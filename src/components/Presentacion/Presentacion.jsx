import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  InformacionPrincipal,
  ContenedorBg,
  ComoLoHago,
} from "../../styled-components/Presentacion";
import { imgPresentacion } from "../../variables/var";
const Presentacion = () => {

  return (
    <ContenedorPresentacion>
      <InformacionPrincipal>
        <Titulo>
          Te ayudamos a incrementar tus ventas a través de estrategias
          personalizadas según tus objetivos.🚀
        </Titulo>
        <ComoLoHago>
          ¡Nuestros servicios están diseñados para ayudarte a mejorar!
        </ComoLoHago>
      </InformacionPrincipal>
      <ContenedorBg>
        <img
          src={imgPresentacion}
          className="social-media"
          alt="social-media-servicios"
        />
      </ContenedorBg>
    </ContenedorPresentacion>
  );
};

export default Presentacion;
