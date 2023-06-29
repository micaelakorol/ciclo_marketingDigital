import React from 'react'
import { Ancla, BtnPlanes, Subtitulo } from '../styled-components/Planes'
import {  DescripcionRedes, ItemArticulo } from '../styled-components/GestionRedes'
import planDesarrollo from './Data/PlanDesarrollo'
import {ReactComponent as Check} from '../../assets/check2.svg'
import { ContenedorPlanDesarrollo } from '../styled-components/DesarrolloWeb'
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
          <BtnPlanes className="btn btnObjetivos"> 
        <Ancla href="https://forms.gle/76FDBUW7RbBaxv9N7" target='_blank' rel="noreferrer">Solicitar cotización</Ancla>
         </BtnPlanes>
        </DescripcionRedes>
      </ContenedorPlanDesarrollo>
   </>
  )
}

export default PlanDesarrollo