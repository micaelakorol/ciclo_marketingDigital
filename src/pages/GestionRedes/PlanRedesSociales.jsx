import React from 'react'
import { Subtitulo } from '../styled-components/Planes'
import { DescripcionRedes, ItemArticulo,ContenedorPlanRedes } from '../styled-components/GestionRedes'
import planRedes from './Data/PlanRedes'
import { ReactComponent as Check } from "../../assets/check2.svg";

const PlanRedesSociales = () => {
    let descripcionPlan = planRedes.items;
  return (
    <>
    <Subtitulo>Qué incluye el plan de redes sociales</Subtitulo>
    <ContenedorPlanRedes>
    <DescripcionRedes as='ul'>
            {descripcionPlan.map((item) => (
        <ItemArticulo> <Check /> {item.descripcion}</ItemArticulo>
            ))}
    </DescripcionRedes></ContenedorPlanRedes>
    </>
  )
}

export default PlanRedesSociales