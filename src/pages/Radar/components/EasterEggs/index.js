import React from 'react';
import { Modal } from "react-native";
import { Container, ContainerModal, ContainerQuestion, StyledText, StyledTextButton, StyledButton, StyledViewQuestion } from './styles';

export default function EasterEggs({ visible, hideModal, showModalSuccess }) {
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
            <StyledText styles={{ color: '#FFF' }}>O que é CRUD?</StyledText>
          </StyledViewQuestion>
          <StyledButton onPress={() => {
            showModalSuccess()
            hideModal()
          }}>
            <StyledTextButton styles={{ color: '#FFF' }}>Create, Read, Update, Delete</StyledTextButton>
          </StyledButton>
          <StyledButton onPress={() => alert('Resposta Incorreta, Tente novamente!')}>
            <StyledTextButton styles={{ color: '#FFF' }}>Personagem anime</StyledTextButton>
          </StyledButton>
          <StyledButton onPress={() => alert('Resposta Incorreta, Tente novamente!')}>
            <StyledTextButton styles={{ color: '#FFF' }}>View Model e Controller</StyledTextButton>
          </StyledButton>
          <StyledButton onPress={() => alert('Resposta Incorreta, Tente novamente!')} >
            <StyledTextButton styles={{ color: '#FFF' }}>Nenhuma das alternativas</StyledTextButton>
          </StyledButton>
          </ContainerQuestion>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
