import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  Descripcion,
  InformacionPrincipal,
  ContenedorBg,ComoLoHago
} from "../../styled-components/Presentacion";
import { ReactComponent as ImagenPresentacion } from "../../assets/socialmedia.svg";
const Presentacion = () => {
  return (
    <>
      <ContenedorPresentacion>
        <InformacionPrincipal>
          <Titulo>
            Somos un equipo de trabajadores freelancers
          </Titulo>
          <Descripcion as='h3'>
            
            Nuestro propósito es ayudarte a impulsar tu marca y hacer crecer tu
            negocio. {/* siguiendo una serie de pasos que te llevaran al exito */}
          </Descripcion>
          <ComoLoHago>
            ¿Cómo lo hacemos?
          </ComoLoHago>
          <Descripcion>
            Diseñando e implementando estrategias según tus objetivos.
            Implementando campañas en medios digitales para llegar a más
            potenciales clientes.
          </Descripcion>
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
