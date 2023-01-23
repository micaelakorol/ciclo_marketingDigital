import React from "react";
import { Ancla, BtnPlanes, Subtitulo } from "../styled-components/Planes";
import {
  TituloPrincipal,
} from "../../styled-components/Servicios";
import { ArticuloRedes, DescripcionRedes, ItemArticulo } from "../styled-components/GestionRedes";
import dataGestion from "./Data/DataMarketing";
import { ImgMarketing } from "../../styled-components/Contenido";
import { ReactComponent as IlustracionMkt } from "../../assets/seccionmkt.svg";
import { ReactComponent as Check } from "../../assets/check2.svg";

const ObjetivosRedes = () => {
  let queHare = dataGestion.items;
  return (
    <>
      <Subtitulo>Te voy a ayudar a impulsar y gestionar tus redes</Subtitulo>
      <TituloPrincipal as='h4'>¿Cómo lo vamos a hacer?</TituloPrincipal>
      <ArticuloRedes as='article'>
        <DescripcionRedes as="ul">
          {queHare.map((item) => (
            <ItemArticulo key={item.id}>
              <Check /> {item.items}
            </ItemArticulo>
          ))}
        <BtnPlanes className="btn btnObjetivos"> 
        <Ancla href="https://forms.gle/UfBkXRvRb2Rj8mp4A" target='_blank' rel="noreferrer">Me interesa</Ancla>
         </BtnPlanes>
        </DescripcionRedes>
        <ImgMarketing>
          <IlustracionMkt
            alt="ilustracion sobre marketing"
            className="ilustracion-mkt"
          />
        </ImgMarketing>
      </ArticuloRedes>
    </>
  );
};

export default ObjetivosRedes;
