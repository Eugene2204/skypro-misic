import './sidebar.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';

export const sidebar = () => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])
    
if (isLoading) {
        
return(
  <SkeletonTheme baseColor="#202020"
  highlightColor="#444"><div className="main__sidebar sidebar">
  <div className="sidebar__personal">
    <p className="sidebar__personal-name">Sergey.Ivanov</p>
    <div className="sidebar__icon">
      <svg alt="logout">
        <use xlinkHref="img/icon/sprite.svg#logout"></use>
      </svg>
    </div>
  </div>
  <div className="sidebar__block">
    <div className="sidebar__list">
    <div className="sidebar__item">
                                <Skeleton
                                    width={250}
                                    height={150}
                                    count={3}
                                />
      </div>
    </div>
    </div>
    </div>
    </SkeletonTheme>

)}

return (
<div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
    )
}