import {NavMenu} from '../../components/navMenu/NavMenu.jsx';
import {Centerblock} from '../../components/centerBlock/centerBlock.jsx';
import {Sidebar} from '../../components/sidebar/sidebar.jsx';
import React from 'react';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js';

export const MainPage = ({  setActiveTrack, tracks, isLoading, setIsPlayerVisible, loadingTracksError}) => {
  return (
  <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Main>
       <NavMenu />
          {Centerblock  ({
                           tracks,
                           isLoading,
                           setIsPlayerVisible,
                           loadingTracksError,
                           setActiveTrack,
                        })}
          {Sidebar({ isLoading })}
        </S.Main>
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
  )}