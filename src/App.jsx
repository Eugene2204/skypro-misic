import React from 'react';
import { GlobalStyle } from './components/Global.styles/Global.styles.js';
import * as S from './App.styles.js';
import { AppRoutes } from './routes.jsx';
import { getAllTracks } from './Api.jsx';
import { AudioPlayer } from './components/audioPlayer/audioPlayer.jsx';
import { useState, useEffect, useRef } from 'react';
import { UserContext } from './Authorization.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setTracks } from './store/slices.jsx';

export const App = () => {

  const dispatch = useDispatch()
  const activeTrack = useSelector((state) => state.tracks.activeTrack)

  const [isLoading, setIsLoading] = useState(true);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [loadingTracksError, setLoadingTracksError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem('user'))) ?? 'Не авторизован',)

  const audioRef = useRef(null)

    useEffect(() => {
      getAllTracks()
      .then((tracks) => {
        dispatch(setTracks({ tracks }))
    })
        .catch((error) => {
          setLoadingTracksError(error.message)
      })
      .finally(() => setIsLoading(false))
  }, [dispatch]);

  const handlePlay = () => {
    audioRef.current.play()
    setIsPlaying(true)
}

const handlePause = () => {
    audioRef.current.pause()
    setIsPlaying(false)
}

const togglePlay = isPlaying ? handlePause : handlePlay

useEffect(() => {
  if (audioRef.current) {
    handlePlay()
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
                            setTracks={setTracks}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            isPlayerVisible={isPlayerVisible}
                            setIsPlayerVisible={setIsPlayerVisible}
                            loadingTracksError={loadingTracksError}
                            setIsPlaying={setIsPlaying}
                            isPlaying={isPlaying}
                            togglePlay={togglePlay}
                        />
                        {AudioPlayer({ isPlaying, setIsPlaying, isPlayerVisible, isLoading, activeTrack,audioRef, togglePlay, })}
                    </>
      </S.Container>
    </S.Wrapper>
    </UserContext.Provider>
    </>
  )
}
