import React from 'react'
import { Ancla, Subtitulo } from '../styled-components/Planes'
import {  DescripcionRedes, ItemArticulo } from '../styled-components/GestionRedes'
import planDesarrollo from './Data/PlanDesarrollo'
import {ReactComponent as Check} from '../../assets/check2.svg'
import { BtnDesarrollo, ContenedorPlanDesarrollo } from '../styled-components/DesarrolloWeb'
const PlanDesarrollo = () => {
    const descripcionPlan = planDesarrollo.items
  return (
   <>
   <Subtitulo>Todos nuestros planes incluyen:</Subtitulo>
   <ContenedorPlanDesarrollo>
        <DescripcionRedes as="ul">
          {descripcionPlan.map((item) => (
            <ItemArticulo>
              {" "}
              <Check /> {item.descripcion}
            </ItemArticulo>
          ))}
          <BtnDesarrollo className="btn btnDesarrollo">
            <Ancla href='https://forms.gle/76FDBUW7RbBaxv9N7' target='_blank' rel="noreferrer">Solicitar cotización</Ancla>
          </BtnDesarrollo>
        </DescripcionRedes>
      </ContenedorPlanDesarrollo>
   </>
  )
}

export default PlanDesarrollo