import React from "react";
import {
  ContenedorPolitica,
  ParrafoPolitica,
} from "../styled-components/Politicas";
import { TituloPrincipal } from "../../styled-components/Servicios";

const Nosotros = () => {
  return (
    <ContenedorPolitica>
      <TituloPrincipal>
        Bienvenid@s a Ciclo Marketing Digital y Desarrollo
      </TituloPrincipal>
      <TituloPrincipal>¿Quienes somos?</TituloPrincipal>
      <ParrafoPolitica>
        Somos un emprendimiento que tiene como objetivo principal,hacer que tu
        negocio prospere en el mundo digital. <br />
        Contamos con un equipo de Marketing Digital, Community Manager, Diseño y
        Desarrollo Web. <br /> Nuestro equipo, está enfocado en proporcionarte
        soluciones personalizadas para lograr impulsar el crecimiento de tu
        negocio/empresa. <br /> También, consideramos que la satisfacción del
        cliente es el motor de nuestro éxito, por lo que nos esforzamos en
        brindar un servicio excepcional y un trato cercano en cada proyecto que
        emprendemos.
      </ParrafoPolitica>
      <ParrafoPolitica>
        Entendemos que cada negocio es único, por lo que nos adaptamos para
        satisfacer tus objetivos específicos y las necesidades de tu audiencia.
        <br />
        <mark>
          Contáctanos hoy mismo para descubrir cómo podemos marcar la
          diferencia.
        </mark>{" "}
        <br />
        <i>Equipo de Ciclo.</i>
      </ParrafoPolitica>
    </ContenedorPolitica>
  );
};

export default Nosotros;
