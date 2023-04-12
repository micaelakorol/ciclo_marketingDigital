import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  InformacionPrincipal,
  ContenedorBg,
  ComoLoHago,
} from "../../styled-components/Presentacion";
import { ReactComponent as ImagenPresentacion } from "../../assets/principal.svg";
const Presentacion = () => {
  return (
    <>
      <ContenedorPresentacion>
        <InformacionPrincipal>
          <Titulo> 
          Te ayudamos a incrementar tus ventas a través de estrategias personalizadas según tus objetivos.🚀
          </Titulo>
         {/* <Descripcion as="h3">
         * null 
          </Descripcion>*/}
          <ComoLoHago>¡Nuestros servicios están diseñados para ayudarte a mejorar!</ComoLoHago>
         {/* <Descripcion>
           * null 
          </Descripcion>*/}
        </InformacionPrincipal>
        {/* Contenedor imagen */}
        <ContenedorBg>
          <ImagenPresentacion
            className="social-media"
            alt="social media servicios"
          />
        </ContenedorBg>
      </ContenedorPresentacion>

      {/* ------------------------------------------------------------------------------- */}
    </>
  );
};

export default Presentacion;
