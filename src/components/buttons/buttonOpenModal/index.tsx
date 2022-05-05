import React from "react";
import { Container } from "./style";

type ButtonOpenModalProps = {
    // label: 'Dimensões' | 'Atributos' | 'Perguntas';
    handleOpenModal: ()=> void;
}

const ButtonOpenModal = ({handleOpenModal}:ButtonOpenModalProps)=>{
    return(
        <Container
            onClick={handleOpenModal}
        >
            +
        </Container>
    )
}

export default ButtonOpenModal;