import React, { useCallback, useEffect, useState } from "react";
import ButtonOpenModal from "../../components/buttons/buttonOpenModal";
import DescricaoAlimentarBanco from "../../components/descricaoAlimentarBanco";
import ModalDimensao from "../../components/modal/dimensao-modal";
import { Atributos, Dimensao } from "../../types/domain/criarComponentesForm";
import { Container, ContainerDescricao, Content } from "./style";

const AlimentarBancoForm = () => {

  const [isOpenModalDimensao, setIsOpenModalDimensao] = useState<boolean>(false);
  const handleStateModal = useCallback(()=>{
    setIsOpenModalDimensao(state=> !state);
  },[isOpenModalDimensao])

  return (
    <Container>
      
      <Content>
        <ModalDimensao stateModal={isOpenModalDimensao}  handle={handleStateModal}  />
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Dimensão' />
          <ButtonOpenModal handleOpenModal={()=>handleStateModal()} />
        </ContainerDescricao>
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Atributo' />
          {/* <ButtonOpenModal /> */}
        </ContainerDescricao>
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Pergunta' />
          {/* <ButtonOpenModal /> */}
        </ContainerDescricao>

      </Content>
    </Container>

  );
}

export default AlimentarBancoForm;