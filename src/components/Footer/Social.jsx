import React from "react";
import {email, instagram, wsp} from './Variables/var'
import { SocialRedes } from "../../styled-components/Footer";

const Social = () => {
  return (
    <>
      <SocialRedes>
        <img src={wsp} alt="whatsApp" />
        <a href="https://wa.link/rpa4fh" target="_blank" rel="noreferrer">
        </a>
        <a
          href="https://www.instagram.com/n.icolasperez/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="mailto:nicolasperezmarketing@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="email" />
        </a>
      </SocialRedes>
    </>
  );
};

export default Social;
