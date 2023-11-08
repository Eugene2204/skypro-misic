import './trackList.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const trackList = () => {

  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

return (
<div className="content__playlist playlist">
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image" >
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                          )}  
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >Guilt <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://">Nero</a>
                      )}
                    </div>
                    
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Welcome Reality</a>
                  )}
                    </div>
                    
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">4:44</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >Elektro <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://"
                        >Dynoro, Outwork, Mr. Gee</a
                      >
                      )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://">Elektro</a>
                  )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">2:22</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >I’m Fire <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://"
                        >Ali Bakgor</a
                      >
                      )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://">I’m Fire</a>
                  )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">2:22</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>)}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >Non Stop
                          <span className="track__title-span">(Remix)</span></a
                        >
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://"
                        >Стоункат, Psychopath</a
                      >
                      )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://">Non Stop</a>
                  )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">4:12</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >Run Run
                          <span className="track__title-span"
                            >(feat. AR/CO)</span
                          ></a
                        >
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://"
                        >Jaded, Will Clarke, AR/CO</a
                      >
                      )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://">Run Run</a>
                  )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">2:54</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >Eyes on Fire
                          <span className="track__title-span"
                            >(Zeds Dead Remix)</span
                          ></a
                        >
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://"
                        >Blue Foundation, Zeds Dead</a
                      >
                      )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Eyes on Fire</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">5:20</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >Mucho Bien
                          <span className="track__title-span"
                            >(Hi Profile Remix)</span
                          ></a
                        >
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://"
                        >HYBIT, Mr. Black, Offer Nissim, Hi Profile</a
                      >
                      )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://">Mucho Bien</a>
                  )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">3:41</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://">minthaze</a>
                 )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Captivating</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                                <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                            ) : (
                        <a className="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                 ) : (
                      <a className="track__author-link" href="http://">minthaze</a>
                 )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Captivating</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                        <a className="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__author-link" href="http://">minthaze</a>
                  )}
                    </div>
                    <div className="track__album">
                    {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Captivating</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                        <a className="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__author-link" href="http://">minthaze</a>
                  )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Captivating</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                        <a className="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__author-link" href="http://">minthaze</a>
                  )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Captivating</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                        <a className="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__author-link" href="http://">minthaze</a>
                  )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Captivating</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                        <a className="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__author-link" href="http://">minthaze</a>
                  )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >Captivating</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                      {isLoading ? (
                      <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
              ) : (     
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
              )}
                      </div>
                      <div className="track__title-text">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                        <a className="track__title-link" href="http://"
                          >How Deep Is Your Love
                          <span className="track__title-span"></span
                        ></a>
                        )}
                      </div>
                    </div>
                    <div className="track__author">
                      {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__author-link" href="http://"
                        >Calvin Harris, Disciples</a
                      >
                      )}
                    </div>
                    <div className="track__album">
                      {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"
                  />
                  ) : (
                      <a className="track__album-link" href="http://"
                        >How Deep Is Your Love</a
                      >
                      )}
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">3:32</span>
                    </div>
                  </div>
                </div>
              </div>
      )
 }