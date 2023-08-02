import React from "react";
import { Subtitulo } from "../../styled-components/Planes";
import {
  DescripcionRedes,
  ItemArticulo,
  ContenedorPlanRedes,
} from "../../styled-components/GestionRedes";
import planRedes from "./planRedes";
import BtnAccion from "../../../reusable/BtnAccion";
import Check from "../../../reusable/Check";

const PlanRedesSociales = () => {
  let descripcionPlan = planRedes.items;
  return (
    <>
      <Subtitulo>Conocé lo que nuestro plan de redes sociales tiene para ofrecerte</Subtitulo>
      <ContenedorPlanRedes>
        <DescripcionRedes as="ul">
          {descripcionPlan.map((item) => (
            <ItemArticulo key={item.id}>
              <Check /> {item.descripcion}
            </ItemArticulo>
          ))}
          <BtnAccion href="https://shrtco.de/Hmr1c">¡Comencemos!</BtnAccion>
        </DescripcionRedes>
      </ContenedorPlanRedes>
    </>
  );
};
export default PlanRedesSociales;
