import React from "react";
import { Subtitulo } from "../styled-components/Planes";
import {
  DescripcionRedes,
  ItemArticulo,
} from "../styled-components/GestionRedes";
import planDesarrollo from "./Data/PlanDesarrollo";
import { ContenedorPlanDesarrollo } from "../styled-components/DesarrolloWeb";
import Check from "../../reusable/Check";
import BtnAccion from "../../reusable/BtnAccion";
const PlanDesarrollo = () => {
  const descripcionPlan = planDesarrollo.items;
  return (
    <>
      <Subtitulo>Todos nuestros planes incluyen:</Subtitulo>
      <ContenedorPlanDesarrollo>
        <DescripcionRedes as="ul">
          {descripcionPlan.map((item) => (
            <ItemArticulo key={item.id}>
              <Check /> {item.descripcion}
            </ItemArticulo>
          ))}
          <BtnAccion href="https://forms.gle/76FDBUW7RbBaxv9N7">
            Solicitar cotización
          </BtnAccion>
        </DescripcionRedes>
      </ContenedorPlanDesarrollo>
    </>
  );
};

export default PlanDesarrollo;
