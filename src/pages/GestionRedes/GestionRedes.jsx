import React from "react";
import { Subtitulo } from "../styled-components/Planes";
import {
  ContenedorRedes,
  DescripcionRedes,ContenedorTarjetaRD
} from "../styled-components/GestionRedes";
import {data} from "./Data/DataMarketing";
import ObjetivosRedes from "./ObjetivosRedes";
import PlanRedesSociales from "./PlanRedesSociales";
const GestionRedes = () => {
  let gestionRedes = data.items;
  return (
    <>
      <Subtitulo>¿Tús redes sociales están en esta situación?</Subtitulo>
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
