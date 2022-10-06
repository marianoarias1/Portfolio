import styled from "styled-components";

export const ContainerStyled=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-x: hidden;
`

export const ContentContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`


export const NavBar=styled.div`
    width: 60px;
    height: 100%;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 22px 2px rgba(0,0,0,0.68);
    position: fixed;
`

export const ItemContainer=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
`

export const LinkNav=styled.a`
    text-decoration: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    :active{
        transform: scale(1.1);
        color: #B9E523;
    }
`