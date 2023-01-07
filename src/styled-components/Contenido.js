import { Link } from "react-router-dom";
import styled from "styled-components";
import { colores, temas } from "./Colores";

const ContenidoPrincipal = styled.article`
  background: ${temas.bgMarronSuave};
  min-height: 390px;
  max-height: 100vh;
  margin-top: 2rem;
  box-sizing: border-box;
  filter: saturate(1.3);
`;

const Articulo = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem;
  margin: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
    p {
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
    }
    a {
      width: 60%;
      margin: 1rem auto;
    }
  }
`;
const PMarketing = styled.p`
  color: ${colores.oscuro};
  font-family: "Lato", sans-serif;
  font-size: 1.009rem;
  text-align: start;
  display: flex;
  flex-direction: column;
`;

const ImgMarketing = styled.section`
  text-align: center;
  margin-top: -3.3rem;
`;
const Btn = styled(Link)`
  background: ${temas.bgAmarrilloBtn};
  text-decoration: none;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  color: ${colores.oscuroSuave};
  filter: saturate(1.3);
  margin: 1rem;
  padding: 0.3rem;
  width: 15rem;
  text-align: center;
  border: 1.5px solid ${colores.oscuroSuave};
  border-radius: 1rem;
  &:hover {
    border: 2px dashed ${colores.oscuroSuave};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export { ContenidoPrincipal, Articulo, PMarketing, ImgMarketing, Btn };
