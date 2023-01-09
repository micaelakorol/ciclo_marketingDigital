import React from "react";
import {
  Subtitulo,
  BodyPlanes,
  Precio,
  TituloPlan,
} from "../../styled-components/Planes";
import { ReactComponent as Whatsapp } from "../../../assets/whatsapp.svg";
import data from "../DataPlanes/DataPlanesDesarrollo";
import {
  BtnDesarrollo,
  DescripcionDesarrollo,
  MapPlanesDesarrollo,
  PlanesDesarrollo,
} from "../../styled-components/PlanesDesarrollo";
import {ReactComponent as Check} from '../../../assets/check2.svg'
import {ReactComponent as X} from '../../../assets/x-lg.svg'
const PlanesDesarrolloWeb = () => {
  let planesDesarrollo = data.items;

  return (
    <>
      <Subtitulo>Desarrollo Web</Subtitulo>
      <PlanesDesarrollo>
        {planesDesarrollo.map((item) => (
          <MapPlanesDesarrollo key={item.id}>
            <BodyPlanes>
              <TituloPlan>{item.titulo}</TituloPlan>
            </BodyPlanes>
            <DescripcionDesarrollo>
              <details>
                <summary>¿Qué es?</summary>
                {item.descripcion}
              </details>
            </DescripcionDesarrollo>
            <Precio>
              <p>Desde</p> <b>${item.precio}</b>
            </Precio>
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
              <BtnDesarrollo className="btn">
                <a
                  href="https://walink.co/e9ceb0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Whatsapp alt="icono whatsapp" className="wsp" />  ¡Lo quiero!{" "}
                </a>
              </BtnDesarrollo>
            </BodyPlanes>
          </MapPlanesDesarrollo>
        ))}
      </PlanesDesarrollo>
    </>
  );
};

export default PlanesDesarrolloWeb;
