import styled from "styled-components";

const GridContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  justify-content: center;
  @media (min-width: 1900px) {
    width: 75vw;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 32%);
    width: 100vw;
    gap: .3rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100vw;
    padding: 0;
  }
`
const Contenedor = styled(GridContainer)`
  grid-template-columns: repeat(4, 24%);
  overflow-y: hidden;
  margin: 0.8rem auto;
  border-radius: 0.5rem;
  gap: 1rem;
`;


export {GridContainer,Contenedor}