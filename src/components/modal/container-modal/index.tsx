import React from "react"
import Modal from 'react-modal';
// import { BodyModal, ContentModal, HeaderModal, Modal } from "./style";

type ModalAdicinarDimensaoProps = {
    handle: () => void;
    stateModal: boolean
    children: React.ReactNode;
    title: string
}

const ContainerModal = ({
    handle,
    stateModal,
    children,
    title
}: ModalAdicinarDimensaoProps) => {
    return (
        <Modal
            isOpen
        >
            
        </Modal>
    )
}

export default ContainerModal;