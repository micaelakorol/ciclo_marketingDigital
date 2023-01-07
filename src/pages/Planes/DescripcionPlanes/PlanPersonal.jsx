import React from "react";
import {ReactComponent as Whatsapp} from '../../assets/whatsapp.svg'
import { Personal , BtnPersonal} from "../../styled-components/PlanPersonal";

const PlanPersonal = () => {
  return (
    <Personal>
      {" "}
      <BtnPersonal className="btn">
        <a
          href="https://walink.co/7cd14e"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Whatsapp alt="icono whatsapp"/> Armá tu propio plan{" "}
        </a>
      </BtnPersonal>{" "}
    </Personal>
  );
};

export default PlanPersonal;
