import React, { useEffect, useState } from "react"
import Modal from 'react-modal';
import { Dimensao } from "../../../types/domain/criarComponentesForm";

type ModalAdicinarDimensaoProps = {
    handle: () => void;
    stateModal: boolean
    children?: React.ReactNode;
    title?: string
}

const ContainerModal = ({
    handle,
    stateModal,
    children,
    title
}: ModalAdicinarDimensaoProps) => {

    return (
        <Modal
            isOpen={stateModal}
        >
            <div>
                <p onClick={handle}>X</p>
            </div>
            {children}
        </Modal>
    )
}

export default ContainerModal;