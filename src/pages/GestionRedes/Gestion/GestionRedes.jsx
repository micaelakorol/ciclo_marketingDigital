import React from "react";
import { Subtitulo } from "../../styled-components/Planes";
import {
  ContenedorRedes,
  DescripcionRedes,
  ContenedorTarjetaRD,
} from "../../styled-components/GestionRedes";
import ObjetivosRedes from "../Objetivos/ObjetivosRedes";
import PlanRedesSociales from "../PlanRedes/PlanRedesSociales";
import { data } from "./itemGestion";
import Image from "../../../reusable/Image";

const GestionRedes = () => {
  let gestionRedes = data.items;
  return (
    <>
      <Subtitulo>
        ¿Tus redes sociales se encuentran en esta situación?
      </Subtitulo>
      <ContenedorRedes>
        {gestionRedes.map((item) => (
          <ContenedorTarjetaRD key={item.id}>
            <Image src={item.img} alt="iconos" className="gestion-redes" />
            <DescripcionRedes>{item.descripcion}</DescripcionRedes>
          </ContenedorTarjetaRD>
        ))}
      </ContenedorRedes>
      <ObjetivosRedes />
      <PlanRedesSociales />
    </>
  );
};

export default GestionRedes;
