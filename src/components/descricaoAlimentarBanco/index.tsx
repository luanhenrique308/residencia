import React from "react";
import { Container } from "./style";

type DescricaoAlimentarBancoProps = {
    tipoDescricao: 'Dimensão' | 'Atributo'| 'Pergunta'
}
const DescricaoAlimentarBanco = ({tipoDescricao}: DescricaoAlimentarBancoProps)=>{
    return(
        <Container>
             {tipoDescricao}
        </Container>
    )
}

export default DescricaoAlimentarBanco;

