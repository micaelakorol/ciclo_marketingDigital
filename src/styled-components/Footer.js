import styled from "styled-components";
import { colores, temas } from "./Colores";

const FooterPagina = styled.footer`
  background: ${temas.bgFooter};
  display: grid;
  grid-template-columns: repeat(4, 25%);
  place-items: center;
  max-height: 100%;
  padding: .5rem;
  b {
    color: black;
    font-size: 0.9rem;
  }
  .copy {
    font-size: 0.7rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    b,
    a {
      margin: 0.2rem;
    }
  }
  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;
const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: ${colores.oscuro};
    font-size: 0.8rem;
  }
  a:hover {
    text-decoration: underline;
    color: ${colores.verdeHLinks};
  }
`;
const Recursos = styled(Contacto)``;

const Redes = styled(Contacto)`
  display: flex;
  flex-direction: column;
`;
const SocialRedes = styled.div`
margin-top: .5rem;
  img {
    margin: 0.3rem;
    cursor: pointer;
  }
`;


export { FooterPagina, Contacto, Recursos, Redes, SocialRedes };
