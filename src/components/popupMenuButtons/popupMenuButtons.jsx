import './popupMenuButtons.css';
import { useState } from 'react';
import { authorList } from '../popupMenuList/AuthorList.jsx';
import { YearList } from '../popupMenuList/YearList.jsx';
import { GenreList } from '../popupMenuList/GenreList.jsx';
import React from 'react';

export const filterButtons = () => {
    const [activeAuthor, setActiveAuthor] = useState(false)
    const [activeYear, setActiveYear] = useState(false)
    const [activeGenre, setActiveGenre] = useState(false)

    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)

    const clickOnAuthorFilter = () => {
        setActiveAuthor(!activeAuthor)
        setActiveYear(false)
        setActiveGenre(false)

        setVisibleAuthor(!visibleAuthor)
        setVisibleYear(false)
        setVisibleGenre(false)
    }
    const clickOnYearFilter = () => {
        setActiveAuthor(false)
        setActiveYear(!activeYear)
        setActiveGenre(false)

        setVisibleYear(!visibleYear)
        setVisibleAuthor(false)
        setVisibleGenre(false)
    }
    const clickOnGenreFilter = () => {
        setActiveAuthor(false)
        setActiveYear(false)
        setActiveGenre(!activeGenre)

        setVisibleGenre(!visibleGenre)
        setVisibleAuthor(false)
        setVisibleYear(false)
    }

    return (
        <div className="centerblock__filter filter">
             <div className="filter__title">Искать по:</div>
             <div className="filter__content">
                <div
                    className={`filter__button button-author _btn-text ${
                        activeAuthor ? 'active margin' : ''
                    }`}
                    onClick={clickOnAuthorFilter}
                >
                    исполнителю
                </div>
                {visibleAuthor && authorList()}
            </div>
            <div className="filter__content">
                <div
                    className={`filter__button button-year _btn-text ${
                        activeYear ? 'active' : ''
                    }`}
                    onClick={clickOnYearFilter}
                >
                    году выпуска
                </div>
                {visibleYear && YearList()}
            </div>
            <div className="filter__content">
                <div
                    className={`filter__button button-genre _btn-text ${
                        activeGenre ? 'active' : ''
                    }`}
                    onClick={clickOnGenreFilter}
                >
                    жанру
                </div>
                {visibleGenre && GenreList()}
            </div>
        </div>
    )
}