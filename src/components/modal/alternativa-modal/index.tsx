import React, { useState } from "react";
import { Alternativa } from "../../../types/domain/criarComponentesForm";
import { mockListAlternativas } from "../../../utils/mockListAlternativas";
import ContainerModal from "../container-modal";


type ModalAlternativaProps = {
    handle: () => void;
    stateModal: boolean;
}
const ModalAlternativa = ({handle, stateModal}:ModalAlternativaProps) => {
    const [alternativa, setAlternativa] = useState<string>("");
    const [valorAlternativa, setValorAlternativa] = useState<number>(0);
    const [listaAlternativas, setListaAlternativas] = useState<Array<Alternativa>>([])

    const adicionarAlternativasLista = () => {
        mockListAlternativas.push({ alternativa: alternativa, valorAlternativa: valorAlternativa })
        setListaAlternativas([...listaAlternativas, { alternativa: alternativa, valorAlternativa: valorAlternativa }])

    }

    return (
        <ContainerModal
            stateModal={stateModal}
            handle={handle}
        >
            <div>
                <div>
                    <input type="text" value={alternativa} onChange={(e) => { setAlternativa(e.target.value) }} />
                    <input type="number" value={valorAlternativa} onChange={(e) => { setValorAlternativa(parseInt(e.target.value)) }} />
                </div>
                <button onClick={adicionarAlternativasLista}>adicionar Alternativa</button>
            </div>
        </ContainerModal>
    )
}

export default ModalAlternativa;