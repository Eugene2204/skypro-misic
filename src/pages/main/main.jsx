import { AudioPlayer } from '../../components/audioPlayer/audioPlayer.jsx';
import {NavMenu} from '../../components/navMenu/NavMenu.jsx';
import {Centerblock} from '../../components/centerBlock/centerBlock.jsx';
import {Sidebar} from '../../components/sidebar/sidebar.jsx';
import React from 'react';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js';

export const MainPage = () => {
  return (
  <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Main>
       <NavMenu />
          <Centerblock />
          <Sidebar />
        </S.Main>
        <AudioPlayer />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
  );
}
