import React from "react";
import { TituloDesarrollo } from "../styled-components/Planes";
import { DescripcionRedes } from "../styled-components/GestionRedes";
import { ArticuloDesarrollo } from "../styled-components/DesarrolloWeb";
import BtnAccion from "../../reusable/BtnAccion";
const PlanDesarrollo = () => {
  return (
    <>
      <ArticuloDesarrollo>
        <TituloDesarrollo>
          ¡Traé tu idea y te recomendamos lo mejor para vos!
        </TituloDesarrollo>
        <DescripcionRedes as="ul">
          <BtnAccion href="https://forms.gle/76FDBUW7RbBaxv9N7">
            ¡Quiero contactarme!
          </BtnAccion>
        </DescripcionRedes>
      </ArticuloDesarrollo>
    </>
  );
};

export default PlanDesarrollo;
