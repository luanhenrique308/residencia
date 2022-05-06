import React, { useEffect, useState } from "react";
import { Dimensao } from "../../../types/domain/criarComponentesForm";
import { mockListDimensao } from "../../../utils/mockListDimesao";
import ContainerModal from "../container-modal";
import { Container } from "./style";


type ModalDimensaoProps = {
    handle: ()=> void;
    stateModal: boolean
}
const ModalDimensao = ({handle, stateModal}:ModalDimensaoProps)=>{
    
    const [nomeDimensao, setNomeDimensao] = useState<string>("");
    const [listaDimensaoCadastrada, setListaDimensaoCadastrada] = useState<Array<Dimensao>>([])
    
    const addDimensaoLista = ()=>{
        mockListDimensao.push({nomeDimensao:nomeDimensao, id: (mockListDimensao.length+1), atributos:[]})
        setListaDimensaoCadastrada([...mockListDimensao])
    }

    return(
        <ContainerModal
            title="Adicionar Dimensão"
            stateModal={stateModal}
            handle={handle}
        >
            <Container>
                <div>
                    <input type={'text'} value={nomeDimensao} onChange={(e)=>{setNomeDimensao(e.target.value)}} />
                    <button onClick={addDimensaoLista}>Add Dimensao</button>
                </div>
                <div>
                    {mockListDimensao.length > 0 && (
                        mockListDimensao.map((item)=>{
                            return(
                                <p>{item.nomeDimensao}</p>
                            )
                        })
                    )}
                </div>
            </Container>
        </ContainerModal>
    )
}

export default ModalDimensao;