import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './trackList.styles.js';
import { ConvertTime } from '../../helpers.jsx';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const TrackList = ({ tracks, isLoading, setIsPlayerVisible, loadingTracksError, setActiveTrack, }) => {

return (
  <>
<OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'auto' } }}>
<S.ContentPlaylist>
{loadingTracksError && (
                <S.LoadingTracksError>
                    При загрузке треков произошла ошибка. <br />
                    Попробуй повторить попытку позднее
                </S.LoadingTracksError>
            )}
{tracks.map((track) => {
                return (
                <S.PlaylistItem  key={track.id}
                        onClick={( ) => {
                            setIsPlayerVisible(true)
                            setActiveTrack(track)
                        }}>
                  <S.PlaylistTrack>
                    <S.TrackTitle>
                      <S.TrackTitleImage>
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"/>
              ) : (     
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                          )}  
                      </S.TrackTitleImage>
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"/>
                            ) : (
                        <S.TrackTitleLink  >
                        {track.name} 
                        <S.TrackTitleSpan></S.TrackTitleSpan>
                        </S.TrackTitleLink>
                        )} 
                    </S.TrackTitle>
                    <S.TrackAuthor>
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"/>
                 ) : (
                      <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
                      )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"/>
                  ) : (
                      <S.TrackAlbumLink href="http://"
                        >{track.album}</S.TrackAlbumLink>
                  )}
                    </S.TrackAlbum>
                    <div>
                      <S.TrackTimeSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </S.TrackTimeSvg>
                      <S.TrackTimeText> {ConvertTime(
                                                track.duration_in_seconds,
                                            )}
                      </S.TrackTimeText>
                    </div>
                  </S.PlaylistTrack>
                </S.PlaylistItem>
               )
              })}
              </S.ContentPlaylist>
              </OverlayScrollbarsComponent>
              </>
      )
 }