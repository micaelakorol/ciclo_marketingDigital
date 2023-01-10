import styled from "styled-components";

const GridContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  place-content: space-around;
  @media (min-width: 1900px) {
    width: 60vw;
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
export {GridContainer}