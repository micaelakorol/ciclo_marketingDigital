import React from "react";
import { Ancla, BtnPlanes, Subtitulo } from "../styled-components/Planes";
import { TituloPrincipal } from "../../styled-components/Servicios";
import {
  ArticuloRedes,
  DescripcionRedes,
  ItemArticulo,
} from "../styled-components/GestionRedes";
import { ImgMarketing } from "../../styled-components/Contenido";
import { check, ilusMkt } from "./Data/variables";
import { dataGestion } from "./Data/dataMarketing";

const ObjetivosRedes = () => {
  let queHare = dataGestion.items;
  return (
    <>
      <Subtitulo>
        Te ayudamos a potenciar y administrar tus redes sociales
      </Subtitulo>
      <TituloPrincipal as="h4">¿Cómo lo vamos a hacer?</TituloPrincipal>
      <ArticuloRedes as="article">
        <DescripcionRedes as="ul">
          {queHare.map((item) => (
            <ItemArticulo key={item.id}>
              <img src={check} alt="check" /> {item.items}
            </ItemArticulo>
          ))}
          <BtnPlanes className="btn btnObjetivos">
            <Ancla
              href="https://forms.gle/UfBkXRvRb2Rj8mp4A"
              target="_blank"
              rel="noreferrer"
            >
              Me interesa
            </Ancla>
          </BtnPlanes>
        </DescripcionRedes>

        <ImgMarketing>
          <img src={ilusMkt} alt="ilustracion" className="ilustracion-mkt" />
        </ImgMarketing>
      </ArticuloRedes>
    </>
  );
};

export default ObjetivosRedes;
