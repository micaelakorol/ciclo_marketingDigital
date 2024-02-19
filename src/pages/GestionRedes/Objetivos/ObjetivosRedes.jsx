import React from "react";
import { Subtitulo } from "../../styled-components/Planes";
import {
  ArticuloRedes,
  DescripcionRedes,
  ItemArticulo,
  SubtituloRedes,
} from "../../styled-components/GestionRedes";
import { ImgMarketing } from "../../../styled-components/Contenido";
import { dataGestion } from "./objetivos";
import BtnAccion from "../../../reusable/BtnAccion";
import Check from "../../../reusable/Check";
import { ilusMkt } from "../../../assets/var";
import Image from "../../../reusable/Image";

const ObjetivosRedes = () => {
  let queHare = dataGestion.items;
  return (
    <>
      <Subtitulo>Alcanzá todo tu potencial en el mundo digital</Subtitulo>
      <ArticuloRedes as="article">
        <DescripcionRedes as="ul">
          <SubtituloRedes as="h4">¿Cómo lo vamos a hacer?</SubtituloRedes>
          {queHare.map((item) => (
            <ItemArticulo key={item.id}>
              <Check /> {item.items}
            </ItemArticulo>
          ))}
          <BtnAccion href="https://shrtco.de/Hmr1c">Agendar llamada</BtnAccion>
        </DescripcionRedes>
        <ImgMarketing>
          <Image src={ilusMkt} alt="ilustracion" className="ilustracion-mkt" />
        </ImgMarketing>
      </ArticuloRedes>
    </>
  );
};

export default ObjetivosRedes;
