import React, { useState } from "react";
import { Perguntas } from "../../../types/domain/criarComponentesForm";
import { mockListAtributo } from "../../../utils/mockListAtributos";
// import { ListAtributo } from "../../../utils/listAtributos";
import { mockListPergunta } from "../../../utils/mockListPerguntas";
import ContainerModal from "../container-modal";
import { Container } from "../dimensao-modal/style";

type ModalPerguntasProps= {
    stateModal: boolean;
    handle:()=> void;

}
const ModalPerguntas = ({stateModal= false, handle}:ModalPerguntasProps)=>{
    const [pergunta, setPergunta] = useState<string>("");
    const [listPerguntas, setListPerguntas] = useState<Array<Perguntas>>([]);
    const [atributoSelecionado, setAtributoSelecionado] =  useState<number>(0);
    
    const adicionarPerguntaList = ()=>{
        mockListPergunta.push({pergunta:pergunta})
        setListPerguntas([...listPerguntas, {pergunta:pergunta, alternativas:[], id:mockListPergunta.length+1}])
    }

    return(
        <ContainerModal
            stateModal={stateModal}
            handle={handle}
        >
            <Container>
                <select value={atributoSelecionado} onChange={(e)=>{setAtributoSelecionado(parseInt(e.target.value))}}>
                    {mockListAtributo.map((item)=>{
                        return(
                            <option value={item.id} key={item.id} >{item.nomeAtributo}</option>
                        )
                    })}
                </select>
                <div>
                    <input type={'text'} value={pergunta} onChange={(e)=>{setPergunta(e.target.value)}} />
                    <button onClick={adicionarPerguntaList}>add titulo da Pergunta</button>
                </div>
                {listPerguntas.length > 0 &&(
                    listPerguntas.map((item)=>{
                        return(
                            <p>{item.pergunta}</p>
                        )
                    })
                )}
            </Container>
        </ContainerModal>
    )
}

export default ModalPerguntas;