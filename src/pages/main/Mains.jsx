import {NavMenu} from '../../components/navMenu/NavMenu.jsx';
import {Centerblock} from '../../components/centerBlock/CenterBlocks.jsx';
import {Sidebar} from '../../components/sidebar/sidebar.jsx';
import React from 'react';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js';

export const MainPage = ({ isLoading, setIsPlayerVisible, loadingTracksError,setIsPlaying, isPlaying, togglePlay, }) => {
  return (
  <>
    <GlobalStyle />
    <S.Wrapper >
      <S.Container>
        <S.Main>
       <NavMenu />
          {Centerblock  ({
                          isLoading,
                          setIsPlayerVisible,
                          loadingTracksError,
                          setIsPlaying,
                          isPlaying,
                          togglePlay,
                        })}
          {Sidebar({ isLoading })}
        </S.Main>
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
  )}