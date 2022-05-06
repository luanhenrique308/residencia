import React, { useEffect, useState } from "react";
import { Atributos, Dimensao } from "../../../types/domain/criarComponentesForm";
import { mockListAtributo } from "../../../utils/mockListAtributos";
import { mockListDimensao } from "../../../utils/mockListDimesao";
import ContainerModal from "../container-modal";

type ModalAtributoProps = {
    name?: string;
    stateModal: boolean
    handle: () => void;
}

const ModalAtributo = ({ name, stateModal = false, handle }: ModalAtributoProps) => {

    const [nomeAtributo, setNomeAtributo] = useState<string>('');
    const [listaAtributo, setListaAtributo] = useState<Array<Atributos>>([]);
    const [idDimensaoSelecionada, setIdDimensaoSelecionada] = useState<number>(0);
    
    const adicionarAtributoList = () => {
        // mockListAtributo.push({ nomeAtributo: nomeAtributo, id: mockListAtributo.length+1, id_Dimensao:idDimensaoSelecionada })
        setListaAtributo([...listaAtributo, { nomeAtributo: nomeAtributo, id: mockListAtributo.length+1, id_Dimensao:idDimensaoSelecionada }])
        mockListAtributo.push({nomeAtributo:nomeAtributo, id:mockListAtributo.length+1, id_Dimensao:idDimensaoSelecionada})
        // filtraListaDimensao(idDimensaoSelecionada)
    }

    const filtraListaDimensao = (idDimensao: number) => {
        // mockListDimensao.filter(dimensao=> dimensao.id === idDimensao && dimensao.atributos?.push({nomeAtributo:nomeAtributo}))
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
            <select value={idDimensaoSelecionada} onChange={(e) => { setIdDimensaoSelecionada(parseInt(e.target.value)) }}>
                {mockListDimensao?.map((item) => {
                    return (
                        <option value={item.id} key={item.id}>{item.nomeDimensao}</option>
                    )
                })}
            </select>

            <div>
                {mockListAtributo.map((item) => {
                    return (
                        <p>{item.nomeAtributo}</p>
                    )
                })}
            </div>

        </ContainerModal>
    )
}

export default ModalAtributo;