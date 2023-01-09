import styled from "styled-components";
import bg2 from "../assets/bg-pattern-footer-mobile.svg";
import { colores, temas } from "./Colores";

const FooterPagina = styled.footer`
  background: ${temas.bgFooter};
  display: grid;
  grid-template-columns: repeat(4, 25%);
  place-items: center;
  max-height: 100%;
  padding: 1rem;
  background-image: url(${bg2});
  background-repeat: no-repeat;
  background-position: left;
  text-align: center;
  b {
    color: black;
    font-size: 0.9rem;
    margin: 2.6rem 0 0.3rem 0;
  }
  .copy {
    font-size: 0.7rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    b,
    a {
      margin: 0.2rem;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 1rem;
  }
`;
//--------------------//
const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: ${colores.oscuro};
    font-weight: 600;
    font-size: 0.8rem;
  }
  a:hover {
    text-decoration: underline;
    color: ${colores.verdeHLinks};
  }
`;
//--------------------//
const Recursos = styled(Contacto)``;
//--------------------//
const Redes = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
//--------------------//
const SocialRedes = styled.div`
  svg {
    margin: 0.3rem;
    cursor: pointer;
  }
`;
const LogoFooter = styled.section``;

export { FooterPagina, Contacto, Recursos, Redes, SocialRedes, LogoFooter };
