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
      <Subtitulo>¿Qué incluye el plan de redes sociales?</Subtitulo>
      <ContenedorPlanRedes>
        <DescripcionRedes as="ul">
          {descripcionPlan.map((item) => (
            <ItemArticulo>
              <Check /> {item.descripcion}
            </ItemArticulo>
          ))}
          <BtnAccion href="https://forms.gle/UfBkXRvRb2Rj8mp4A">¡Comencemos!</BtnAccion>
        </DescripcionRedes>
      </ContenedorPlanRedes>
    </>
  );
};
export default PlanRedesSociales;
