import {audioPlayer} from './components/audioPlayer/audioPlayer.jsx';
import {navMenu} from './components/navMenu/navMenu.jsx';
import {centerBlock} from './components/centerBlock/centerBlock.jsx';
import {sidebar} from './components/sidebar/sidebar.jsx';
import React from 'react';
import { GlobalStyle } from './Global.styles.jsx'
import * as S from './App.styles.jsx'

//const Styled = styled.div``
export const App = () => {
  return (
    <>
    <GlobalStyle/>
    <S.Wrapper>
      <S.Container>
        <S.Main>
       {navMenu()}
          {centerBlock()}
          {sidebar()}
        </S.Main>
        {audioPlayer()}
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
  );
}
