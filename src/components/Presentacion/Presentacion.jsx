import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  InformacionPrincipal,
  ContenedorBg,
  ComoLoHago,
} from "../../styled-components/Presentacion";
const Presentacion = () => {
  const presentacion =
    "https://res.cloudinary.com/dgqyqd2pa/image/upload/v1689607309/principal_gyle4m.svg";
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
          src={presentacion}
          className="social-media"
          alt="social-media-servicios"
        />
      </ContenedorBg>
    </ContenedorPresentacion>
  );
};

export default Presentacion;
