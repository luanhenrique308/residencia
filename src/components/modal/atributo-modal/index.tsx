import React, { useState } from "react";
import { Atributos, Dimensao } from "../../../types/domain/criarComponentesForm";
import { listDimensao } from "../../../utils/listDimesao";
import ContainerModal from "../container-modal";

type ModalAtributoProps = {
    // listDimensao?: Array<Dimensao>
    name?: string;
    stateModal: boolean
    handle: () => void;
}

const ModalAtributo = ({ name, stateModal = false, handle }: ModalAtributoProps) => {

    const [nomeAtributo, setNomeAtributo] = useState<string>('');
    const [listAtributo, setListAtributo] = useState<Array<Atributos>>([]);
    // const dimensoes = listDimensao

    const adicionarAtributoList = () => {
        setListAtributo([...listAtributo, { nomeAtributo: nomeAtributo }])
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
                {listDimensao?.map((item) => {
                    return (
                        <option>{item.nomeDimensao}</option>
                    )
                })}
            </select>

            <div>
                {listAtributo.map((item)=>{
                    return(
                        <p>{item.nomeAtributo}</p>
                    )
                })}
            </div>

        </ContainerModal>
    )
}

export default ModalAtributo;