import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  Descripcion,
  InformacionPrincipal,
  ContenedorBg,
} from "../../styled-components/Presentacion";
import { ReactComponent as ImagenPresentacion } from "../../assets/img.svg";

const Presentacion = () => {
  return (
    <>
      <ContenedorPresentacion>
        <InformacionPrincipal>
          <Titulo>
            ¡Hola! Soy Nicolas, Especialista en Marketing Digital.
          </Titulo>
          <Descripcion>
            Mi proposito es ayudarte a impulsar tu marca y hacer crecer tu
            negocio.
          </Descripcion>
          <Descripcion as="b">
            ¿Cómo lo hago?
          </Descripcion>
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
