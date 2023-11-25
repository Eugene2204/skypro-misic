import React from 'react';
import { GlobalStyle } from './components/Global.styles/Global.styles.js';
import * as S from './App.styles.js';
import { AppRoutes } from './routes.jsx'

export const App = () => {
  return (
  <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
         <AppRoutes user={localStorage.getItem('user')} />
      </S.Container>
    </S.Wrapper>
    </>
  );
}
