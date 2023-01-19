import { Link } from "react-router-dom";
import styled from "styled-components";
import { colores, temas } from "./Colores";

const ContenidoPrincipal = styled.article`
  background: ${temas.bgMarronSuave};
  min-height: 390px;
  max-height: 100vh;
  margin-top: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  filter: saturate(1.3);
`;

const Articulo = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem;
  margin: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
    margin: 0;
    p {
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
    }
    a {
      max-width: 75%;
      margin: 1rem auto;
    }
  }
`;
const PMarketing = styled.section`
  color: ${colores.oscuroSuave}; 
  margin-left: 2rem;  
  display: flex;
  flex-direction: column;
  h4,i{
    font-weight: 400;
  }
`;

const ImgMarketing = styled.section`
  text-align: center;
  margin-top: -3.3rem;
`;
const Btn = styled(Link)`
  background: ${temas.bgAmarrilloBtn};
  text-decoration: none;
  font-weight: 600;
  font-size: .9rem;
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
