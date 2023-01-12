import styled from "styled-components";

const GridContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 26%);
  justify-content: center;
  @media (min-width: 1900px) {
    width: 75vw;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 40%);
    width: 80vw;
    place-content: space-around;
    gap: .5rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100vw;
    padding: 0;
  }
`
const Contenedor = styled(GridContainer)`
  overflow-y: hidden;
  margin: 0.8rem auto;
  border-radius: 0.5rem;
  gap: 1rem;
`;


export {GridContainer,Contenedor}