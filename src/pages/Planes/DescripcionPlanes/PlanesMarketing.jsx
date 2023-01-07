import React from 'react'
import {
    BtnPlanes,
    BodyPlanes,
    Precio,
    VistaPlanes,
    Subtitulo,
    TituloPlan,
    DescripcionPlan,
    MapPlanes,
  } from "../../styled-components/Planes";
  import { ReactComponent as Whatsapp } from "../../../assets/whatsapp.svg";
  import data from "../DataPlanes/DataPlanes";

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
          <Precio>
            <b>{item.precio}</b>
          </Precio>
          <BodyPlanes>
            <DescripcionPlan>
              <li>{item.item1}</li>
              <li>{item.item2}</li>
              <li>{item.item3}</li>
              <li>{item.item4}</li>
              <li>{item.item5}</li>
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
    </VistaPlanes></>
  )
}

export default PlanesMarketing