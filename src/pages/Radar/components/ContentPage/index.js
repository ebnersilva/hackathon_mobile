import React from 'react';
import { Modal } from "react-native";
import { Container, ContainerModal, ContainerQuestion, StyledText, StyledTextButton, StyledButton, StyledViewQuestion } from './styles';

export default function ContentPage({ visible, hideModal, showModalSuccess }) {
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => hideModal()}
      >
        <ContainerModal>
          <ContainerQuestion>
          <StyledViewQuestion>
            <StyledText styles={{ color: '#FFF' }}>
              Inteligencia artificial torna médicos (apenas supervisores de diagnosticos)
              Para especialistas a digitalização de medicina vai trazer muitas mudanças.
              Uma delas é o papel do médico em vez de diagnosticar vai apenas ver se a máquina
              deu o resultado correto.
            </StyledText>
          </StyledViewQuestion>
          <StyledButton onPress={() => hideModal()} >
            <StyledTextButton styles={{ color: '#FFF' }}>BUSCAR PROXIMO DESAFIO</StyledTextButton>
          </StyledButton>
          </ContainerQuestion>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
