import React from "react";
import {
  BtnPlanes,
  BodyPlanes,
  ContenedorPrecio,
  Contenedor,
  Subtitulo,
  TituloPlan,
  DescripcionPlan,
  TarjetasPlanes,
  Precio,
} from "../../styled-components/Planes";
import { ReactComponent as Whatsapp } from "../../../assets/whatsapp.svg";
import data from "../DataPlanes/DataPlanesMarketing";
import { ReactComponent as Check } from "../../../assets/check2.svg";

const PlanesMarketing = () => {
  let descripcionPlanes = data.items;
  return (
    <>
      <Subtitulo>Manejo de redes y anuncios</Subtitulo>
      <Contenedor>
        {descripcionPlanes.map((item) => (
          <TarjetasPlanes key={item.id}>
            <BodyPlanes>
              <TituloPlan>{item.titulo}</TituloPlan>
            </BodyPlanes>
            <ContenedorPrecio>
              <Precio as='b'>{item.precio}</Precio>
            </ContenedorPrecio>
            <BodyPlanes>
              <DescripcionPlan>
                <li><Check/>{item.item1}</li>
                <li><Check/>{item.item2}</li>
              </DescripcionPlan>
              <DescripcionPlan>{item.descripcion}</DescripcionPlan>
            </BodyPlanes>
            <BodyPlanes>
              <BtnPlanes className="btn">
                <a
                  href="https://walink.co/7cd14e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Whatsapp alt="icono whatsapp" className="wsp" /> Me interesa{" "}
                </a>
              </BtnPlanes>
            </BodyPlanes>
          </TarjetasPlanes>
        ))}
      </Contenedor>
    </>
  );
};

export default PlanesMarketing;
