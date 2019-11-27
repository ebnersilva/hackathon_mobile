import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Container, StyledButtonRegister, StyledText, StyledTextRegister, StyledInputText, StyledButton } from './styles';

import NavigationService from "~/services/navigation";

import Header from "~/components/Header";

import * as AuthActions from "~/store/modules/auth/actions";

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("ebner.suporte@hotmail.com");
  const [password, setPassword] = useState("123456");

  function handleLogin() {
    if (email && password) {
      dispatch(AuthActions.actionLoginRequest({ email, password }));
    } else {
      alert('Campos inválidos!')
    }
  }

  return (
    <>
      <Header
        buttonBackActive={false}
        buttonCloseActive={false}
        title="Sign In"
      />
      <Container>
        <StyledInputText placeholder="E-mail" value={email} onChangeText={(e) => setEmail(e)}/>
        <StyledInputText placeholder="Password" value={password} onChangeText={(e) => setPassword(e)}/>
        <StyledButton onPress={() => handleLogin()}>
          <StyledText>ACESSAR</StyledText>
        </StyledButton>
        <StyledButtonRegister onPress={() => NavigationService.navigate('SignUp')}>
          <StyledTextRegister>Não tenho cadastro</StyledTextRegister>
        </StyledButtonRegister>
      </Container>
    </>
  );
}
