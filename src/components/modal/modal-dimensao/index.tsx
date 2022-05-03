import React, { useState } from "react";
import ContainerModal from "../container-modal";
import { Container } from "./style";

const ModalDimensao = ()=>{
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleOpenModal = ()=>{
        setIsOpenModal(state=> !state)
    }

    return(
        <ContainerModal
            title="Adicionar Dimensão"
            stateModal
            handle={handleOpenModal}
        >
            <Container>

            </Container>
        </ContainerModal>
    )
}

export default ModalDimensao;