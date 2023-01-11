import React from "react";
import {
  Subtitulo,
  BodyPlanes,
  Precio,
  TituloPlan,
  BtnPlanes,
  ContenedorPrecio,
  Contenedor,
  TarjetasPlanes,
  Ancla,
} from "../styled-components/Planes";
import { ReactComponent as Whatsapp } from "../../assets/whatsapp.svg";
import data from "./DataPlanesDesarrollo";
import {
  DescripcionDesarrollo,
} from "../styled-components/PlanesDesarrollo";
import {ReactComponent as Check} from '../../assets/check2.svg'
import {ReactComponent as X} from '../../assets/x-lg.svg'
import { ItemArticulo } from "../styled-components/GestionRedes";
const PlanesDesarrolloWeb = () => {
  let planesDesarrollo = data.items;

  return (
    <>
      <Subtitulo>Desarrollo Web</Subtitulo>
      <Contenedor>
        {planesDesarrollo.map((item) => (
          <TarjetasPlanes key={item.id}>
            <BodyPlanes>
              <TituloPlan>{item.titulo}</TituloPlan>
            </BodyPlanes>
            <DescripcionDesarrollo as='details'>
                <summary>¿Qué es?</summary>
                {item.descripcion}
            </DescripcionDesarrollo>
            <ContenedorPrecio>
              <Precio>Desde</Precio> <Precio as='b'>${item.precio}</Precio>
            </ContenedorPrecio>
            <BodyPlanes>
              <DescripcionDesarrollo>
                 <ItemArticulo><Check/>{item.item1}</ItemArticulo>
                 <ItemArticulo><X/> {item.diseno}</ItemArticulo>
                <ItemArticulo><Check/> {item.item2}</ItemArticulo>
                <ItemArticulo><Check/>{item.item3}</ItemArticulo>
                <ItemArticulo><Check/>{item.stack}</ItemArticulo>
              </DescripcionDesarrollo>
            </BodyPlanes>

            <BodyPlanes>
              <BtnPlanes className="btn">
                <Ancla
                  href="https://walink.co/e9ceb0"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Whatsapp alt="icono whatsapp" className="wsp" />  ¡Lo quiero!{" "}
                </Ancla>
              </BtnPlanes>
            </BodyPlanes>
          </TarjetasPlanes>
        ))}
      </Contenedor>
    </>
  );
};

export default PlanesDesarrolloWeb;
