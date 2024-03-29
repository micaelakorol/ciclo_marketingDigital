import styled from "styled-components";
import { TituloPrincipal } from "../../styled-components/Servicios";

const ContenedorPolitica = styled.div`
margin: .4rem;
p,b{
    font-size: .9rem;
}
.tyc{
    color: black;
    font-size: .9rem;
    text-decoration: underline;
    text-transform: uppercase;
}
`

const TituloPolitica = styled.h2`
margin-top: 1.4rem;
font-size: 1.3rem;
`

const TituloItems = styled.h3`
margin: .4rem 0;
font-size: 1.1rem;
`

const ParrafoPolitica = styled.p`
color: #595858;
font-size: 1rem;
`


const TituloPrincipalPoliticas = styled(TituloPrincipal)`
margin: 0;
`

export {TituloPolitica, ParrafoPolitica,ContenedorPolitica,TituloItems,TituloPrincipalPoliticas}