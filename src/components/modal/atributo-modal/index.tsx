import React, { useState } from "react";
import { Atributos, Dimensao } from "../../../types/domain/criarComponentesForm";
import { mockListAtributo } from "../../../utils/mockListAtributos";
import { mockListDimensao } from "../../../utils/mockListDimesao";
import ContainerModal from "../container-modal";

type ModalAtributoProps = {
    // listDimensao?: Array<Dimensao>
    name?: string;
    stateModal: boolean
    handle: () => void;
}

const ModalAtributo = ({ name, stateModal = false, handle }: ModalAtributoProps) => {

    const [nomeAtributo, setNomeAtributo] = useState<string>('');
    const [listaAtributo, setListaAtributo] = useState<Array<Atributos>>([]);
    // const dimensoes = listDimensao

    const adicionarAtributoList = () => {
        mockListAtributo.push({nomeAtributo:nomeAtributo})
        setListaAtributo([...listaAtributo, { nomeAtributo: nomeAtributo }])
    }

    return (
        <ContainerModal
            stateModal={stateModal}
            handle={handle}
        >
            <div>
                <input type="text" value={nomeAtributo} onChange={(e) => { setNomeAtributo(e.target.value) }} />
                <button onClick={adicionarAtributoList}>add atributo</button>
            </div>
            <select>
                {mockListDimensao?.map((item) => {
                    return (
                        <option>{item.nomeDimensao}</option>
                    )
                })}
            </select>

            <div>
                {listaAtributo.map((item)=>{
                    return(
                        <p>{item.nomeAtributo}</p>
                    )
                })}
            </div>

        </ContainerModal>
    )
}

export default ModalAtributo;