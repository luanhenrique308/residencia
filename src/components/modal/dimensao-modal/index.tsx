import React, { useEffect, useState } from "react";
import { Dimensao } from "../../../types/domain/criarComponentesForm";
import { listDimensao } from "../../../utils/listDimesao";
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
        listDimensao.push({nomeDimensao:nomeDimensao})
        setListaDimensaoCadastrada([...listDimensao])
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
                    {listDimensao.length > 0 && (
                        listDimensao.map((item)=>{
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