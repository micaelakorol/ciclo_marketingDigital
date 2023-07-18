import React from "react";
import { email, instagram, wsp } from "./Variables/var";
import { SocialRedes } from "../../styled-components/Footer";
import Link from "../../reusable/Link";

const Social = () => {
  return (
    <>
      <SocialRedes>
        <img src={wsp} alt="whatsApp" />
        <Link href="https://wa.link/rpa4fh" />
        <Link href="https://www.instagram.com/ciclo.marketingdigital/">
          <img src={instagram} alt="instagram" />
        </Link>
        <Link href="mailto:nicolasperezmarketing@gmail.com">
          <img src={email} alt="email" />
        </Link>
      </SocialRedes>
    </>
  );
};

export default Social;
