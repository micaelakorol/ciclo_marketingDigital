import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  InformacionPrincipal,
  ContenedorBg,
  ComoLoHago,
} from "../../styled-components/Presentacion";
import { imgPresentacion } from "../../assets/var";
import Image from "../../reusable/Image";
const Presentacion = () => {

  return (
    <ContenedorPresentacion>
      <InformacionPrincipal>
        <Titulo>
          Te ayudamos a <mark>incrementar tus ventas</mark>  a través de estrategias
          personalizadas según tus objetivos.🚀
        </Titulo>
        <ComoLoHago>
          ¡Nuestros servicios están diseñados para ayudarte a mejorar!
        </ComoLoHago>
      </InformacionPrincipal>
      <ContenedorBg>
        <Image
          src={imgPresentacion}
          className="social-media"
          alt="social-media-servicios"
        />
      </ContenedorBg>
    </ContenedorPresentacion>
  );
};

export default Presentacion;
