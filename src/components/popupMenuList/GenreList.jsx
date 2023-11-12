import React from 'react';
import * as S from './authorList.styles.jsx'

export const GenreList = () => {
    return (
        <S.PopupList>
            <S.PopupItem>Рок</S.PopupItem>
            <S.PopupItem>Хип-хоп</S.PopupItem>
            <S.PopupItem>Поп-музыка</S.PopupItem>
            <S.PopupItem>Техно</S.PopupItem>
            <S.PopupItem>Инди</S.PopupItem>
        </S.PopupList>
    )
}