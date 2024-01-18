import React from 'react';
import { GlobalStyle } from './components/Global.styles/Global.styles.js';
import * as S from './App.styles.js';
import { AppRoutes } from './routes.jsx';
import { AudioPlayer } from './components/audioPlayer/audioPlayer.jsx';
import { useState, useEffect, useRef } from 'react';
import { UserContext } from './Authorization.jsx';
import {  useSelector } from 'react-redux';

export const App = () => {
  
    const activeTrack = useSelector((state) => state.tracks.activeTrack)
    const [playlist, setPlaylist] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isPlayerVisible, setIsPlayerVisible] = useState(false)
    const [loadingTracksError, setLoadingTracksError] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem('user')) ?? 'Не авторизован',
    )
    
    const audioRef = useRef(null)

    const handleStart = () => {
        audioRef.current.play()
        setIsPlaying(true)
    }

    const handleStop = () => {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    const togglePlay = isPlaying ? handleStop : handleStart

    useEffect(() => {
        if (audioRef.current) {
            handleStart()
        }
    }, [activeTrack])

  return (
  <>
    <GlobalStyle />
    <UserContext.Provider value={[userData, setUserData]}>
    <S.Wrapper>
      <S.Container>
      <>
                        <AppRoutes
                           user={localStorage.getItem('user')}
                           isLoading={isLoading}
                           setIsLoading={setIsLoading}
                           isPlayerVisible={isPlayerVisible}
                           setIsPlayerVisible={setIsPlayerVisible}
                           loadingTracksError={loadingTracksError}
                           togglePlay={togglePlay}
                           playlist={playlist}
                           setPlaylist={setPlaylist}
                           setLoadingTracksError={setLoadingTracksError}
                        />
                        {AudioPlayer({ 
                                audioRef,
                                togglePlay,
                                isPlaying,
                                isPlayerVisible,
                                isLoading,
                                playlist,
                                setPlaylist,
                                setLoadingTracksError,
                                setIsLoading,
                                })} 
                    </>
      </S.Container>
    </S.Wrapper>
    </UserContext.Provider>
    </>
  )}