import React from "react";
import {
  ContenedorPresentacion,
  Titulo,
  Descripcion,
  InformacionPrincipal,
  ContenedorBg,
  ComoLoHago,
} from "../../styled-components/Presentacion";
import { ReactComponent as ImagenPresentacion } from "../../assets/socialmedia.svg";
const Presentacion = () => {
  return (
    <>
      <ContenedorPresentacion>
        <InformacionPrincipal>
          <Titulo>Ciclo es un equipo de trabajadores freelancers</Titulo>
          <Descripcion as="h3">
           Tenemos un objetivo en común: ¡que tú marca sea reconocida y llevarte al éxito!

            {/*Humanizar tu marca es el primer paso. siguiendo una serie de pasos que te llevaran al exito */}
          </Descripcion>
          <ComoLoHago>¿Cómo lo vamos a conseguir?</ComoLoHago>
          <Descripcion>
           Diseñando una estrategia personalizada según tus objetivos.
        Implementando campañas en medios digitales para llegar a más
            potenciales clientes. 🚀
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
