import React from "react";
import { Subtitulo } from "../styled-components/Planes";
import {
  ContenedorRedes,
  DescripcionRedes,ContenedorTarjetaRD
} from "../styled-components/GestionRedes";
import ObjetivosRedes from "./ObjetivosRedes";
import PlanRedesSociales from "./PlanRedesSociales";
import { data } from "./Data/dataMarketing";
const GestionRedes = () => {
  let gestionRedes = data.items;
  return (
    <>
      <Subtitulo>¿Tus redes sociales se encuentran en esta situación?</Subtitulo>
      <ContenedorRedes>
        {gestionRedes.map((item) => (
          <ContenedorTarjetaRD key={item.id}>
            <img src={item.img} alt="Iconos" className="gestion-redes" />
            <DescripcionRedes>{item.descripcion}</DescripcionRedes>
          </ContenedorTarjetaRD>
        ))}
      </ContenedorRedes>
      {/** ------------------------------------------------------------*/}
<ObjetivosRedes />
<PlanRedesSociales />
    </>
  );
};

export default GestionRedes;
