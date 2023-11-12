import { styled } from 'styled-components';

export const PopupList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 28px;
    background-color: #313131;
    color: #fff;
    max-height: 250px;
    max-width: 400px;
    box-sizing: border-box;
    padding: 34px;
    border-radius: 12px;
    z-index: 2;
    position: absolute;
    left: 0;
    overflow: scroll;
    margin-top: 10px;
    overflow-x: hidden;
`

export const PopupItem = styled.li`
    transition: all 0.3s;
&:hover {
    color: blueviolet;
    cursor: pointer;
    text-decoration: underline; 
}
`
