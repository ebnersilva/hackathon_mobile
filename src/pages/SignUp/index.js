import React, { useState } from 'react';
import { Picker } from "react-native";
import { Container, StyledButtonRegister, StyledText, StyledTextRegister, StyledInputText, StyledButton, StyledPicker } from './styles';

import NavigationService from "~/services/navigation";

import Header from "~/components/Header";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [typePerson, setTypePerson] = useState(1);

  function handleSavePerson() {
    if (nome && email && telefone && password && passwordConfirmation) {
      if (password === passwordConfirmation) {

      } else {
        alert('As senhas devem ser iguais para continuar!');
      }
    } else {
      alert('Preencha todos os campos para continuar!');
    }
  }
  return (
    <>
      <Header
        buttonBackActive={false}
        buttonCloseActive={false}
        title="Sign Up"
      />
      <Container>
        <StyledInputText placeholder="Nome" value={nome} onChangeText={(e) => setNome(e)}/>
        <StyledInputText placeholder="E-mail" value={email} onChangeText={(e) => setEmail(e)}/>
        <StyledInputText placeholder="Telefone" value={telefone} onChangeText={(e) => setTelefone(e)}/>
        <StyledInputText placeholder="Senha" value={password} onChangeText={(e) => setPassword(e)}/>
        <StyledInputText placeholder="Confirmar Senha" value={passwordConfirmation} onChangeText={(e) => setPasswordConfirmation(e)}/>
        <StyledPicker
          selectedValue={typePerson}
          onValueChange={(itemValue) =>
            setTypePerson(itemValue)
          }>
          <StyledPicker.Item label="Aluno" value={1} />
          <StyledPicker.Item label="Professor" value={2} />
        </StyledPicker>


        <StyledButton onPress={() => handleSavePerson()}>
          <StyledText>CADASTRAR</StyledText>
        </StyledButton>
        <StyledButtonRegister onPress={() => NavigationService.navigate('SignIn')}>
          <StyledTextRegister>Já possuo cadastro</StyledTextRegister>
        </StyledButtonRegister>
      </Container>
    </>
  );
}
