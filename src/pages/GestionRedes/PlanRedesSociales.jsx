import React from "react";
import { Ancla, BtnPlanes, Subtitulo } from "../styled-components/Planes";
import {
  DescripcionRedes,
  ItemArticulo,
  ContenedorPlanRedes,
} from "../styled-components/GestionRedes";
import planRedes from "./Data/planRedes";
import {check} from './Data/variables'

const PlanRedesSociales = () => {
  let descripcionPlan = planRedes.items;
  return (
    <>
      <Subtitulo>¿Qué incluye el plan de redes sociales?</Subtitulo>
      <ContenedorPlanRedes>
        <DescripcionRedes as="ul">
          {descripcionPlan.map((item) => (
            <ItemArticulo>
              {" "}
              <img src={check} alt="check" /> {item.descripcion}
            </ItemArticulo>
          ))}
          <BtnPlanes className="btn btnObjetivos">
            <Ancla href="https://forms.gle/UfBkXRvRb2Rj8mp4A" target='_blank' rel="noreferrer">¡Comencemos!</Ancla>
          </BtnPlanes>
        </DescripcionRedes>
      </ContenedorPlanRedes>
    </>
  );
};

export default PlanRedesSociales;
