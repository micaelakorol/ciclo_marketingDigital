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
} from "../styled-components/Planes";
import { ReactComponent as Whatsapp } from "../../assets/whatsapp.svg";
import data from "./DataPlanesDesarrollo";
import {
  DescripcionDesarrollo,
} from "../styled-components/PlanesDesarrollo";
import {ReactComponent as Check} from '../../assets/check2.svg'
import {ReactComponent as X} from '../../assets/x-lg.svg'
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
                 <li><Check/>{item.item1}</li>
                 <li><X/> {item.diseno}</li>
                <li><Check/> {item.item2}</li>
                <li><Check/>{item.item3}</li>
                <li><Check/>{item.stack}</li>
              </DescripcionDesarrollo>
            </BodyPlanes>

            <BodyPlanes>
              <BtnPlanes className="btn">
                <a
                  href="https://walink.co/e9ceb0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Whatsapp alt="icono whatsapp" className="wsp" />  ¡Lo quiero!{" "}
                </a>
              </BtnPlanes>
            </BodyPlanes>
          </TarjetasPlanes>
        ))}
      </Contenedor>
    </>
  );
};

export default PlanesDesarrolloWeb;
