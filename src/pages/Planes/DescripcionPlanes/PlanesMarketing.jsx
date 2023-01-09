import React from "react";
import {
  BtnPlanes,
  BodyPlanes,
  ContenedorPrecio,
  VistaPlanes,
  Subtitulo,
  TituloPlan,
  DescripcionPlan,
  MapPlanes,
  Precio,
} from "../../styled-components/Planes";
import { ReactComponent as Whatsapp } from "../../../assets/whatsapp.svg";
import data from "../DataPlanes/DataPlanes";
import { ReactComponent as Check } from "../../../assets/check2.svg";

const PlanesMarketing = () => {
  let descripcionPlanes = data.items;
  return (
    <>
      <TituloPlan>Ve aquí nuestros planes mensuales</TituloPlan>
      <Subtitulo>Manejo de redes y anuncios</Subtitulo>
      <VistaPlanes>
        {descripcionPlanes.map((item) => (
          <MapPlanes key={item.id}>
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
                <li><Check/>{item.item3 && item.item3}</li>
                <li><Check/>{item.item4 && item.item4}</li>
                <li><Check/>{item.item5 && item.item5}</li>
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
          </MapPlanes>
        ))}
      </VistaPlanes>
    </>
  );
};

export default PlanesMarketing;
