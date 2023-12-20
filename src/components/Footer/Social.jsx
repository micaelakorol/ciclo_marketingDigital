import React from "react";
import { email, instagram, wsp } from "../../variables/var";
import { SocialRedes } from "../../styled-components/Footer";
import Link from "../../reusable/Link";

const Social = () => {
  return (
    <>
      <SocialRedes>
        <Link href="https://wa.link/2zr6kj">
          {" "}
          <img src={wsp} alt="whatsApp" />{" "}
        </Link>
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
