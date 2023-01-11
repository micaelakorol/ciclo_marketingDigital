import React from "react";
import { Subtitulo } from "../styled-components/Planes";
import {
  ContenedorRedes,
  DescripcionRedes,
} from "../styled-components/GestionRedes";
import {data} from "./Data/DataMarketing";
import {
  ContenedorTarjetas,
} from "../../styled-components/Servicios";
import ObjetivosRedes from "./ObjetivosRedes";
import PlanRedesSociales from "./PlanRedesSociales";
const GestionRedes = () => {
  let gestionRedes = data.items;
  return (
    <>
      <Subtitulo>¿Tus redes sociales están en esta situación?</Subtitulo>
      <ContenedorRedes>
        {gestionRedes.map((item) => (
          <ContenedorTarjetas key={item.id}>
            <img src={item.img} alt="Iconos" className="gestion-redes" />
            <DescripcionRedes as='li'>{item.descripcion}</DescripcionRedes>
          </ContenedorTarjetas>
        ))}
      </ContenedorRedes>
      {/** ------------------------------------------------------------*/}
<ObjetivosRedes />
<PlanRedesSociales />
    </>
  );
};

export default GestionRedes;
