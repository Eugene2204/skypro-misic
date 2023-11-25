import React from 'react';
import * as S from './authorList.styles.js';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const AuthorList = () => {
    return (
        <S.PopupList>
        <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'auto' } }}>
            <S.BlockScroll>
            <S.PopupItem>Nero</S.PopupItem>
            <S.PopupItem>Dynoro, Outwork, Mr. Gee</S.PopupItem>
            <S.PopupItem>Ali Bakgor</S.PopupItem>
            <S.PopupItem>Стоункат, Psychopath</S.PopupItem>
            <S.PopupItem>Jaded, Will Clarke, AR/CO</S.PopupItem>
            <S.PopupItem>Blue Foundation, Zeds Dead</S.PopupItem>
            </S.BlockScroll>
        </OverlayScrollbarsComponent>
        </S.PopupList>
    )
}