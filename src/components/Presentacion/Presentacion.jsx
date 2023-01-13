import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  Descripcion,
  InformacionPrincipal,
  ContenedorBg,ComoLoHago
} from "../../styled-components/Presentacion";
import { ReactComponent as ImagenPresentacion } from "../../assets/img.svg";
const Presentacion = () => {
  return (
    <>
      <ContenedorPresentacion>
        <InformacionPrincipal>
          <Titulo>
            ¡Hola! Soy Nicolas, Especialista en Social Media.
          </Titulo>
          <Descripcion as='h3'>
            Mi propósito es ayudarte a impulsar tu marca y hacer crecer tu
            negocio.
          </Descripcion>
          <ComoLoHago>
            ¿Cómo lo hago?
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
            className="imgPersona"
            alt="presentacion nicolas"
          />
        </ContenedorBg>
      </ContenedorPresentacion>

      {/* ------------------------------------------------------------------------------- */}
    </>
  );
};

export default Presentacion;
