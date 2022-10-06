import { motion } from "framer-motion";
import styled from "styled-components";

export const TechContainer=styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    scroll-behavior: smooth;
`

export const TitleContainer= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`

export const Title=styled.h1`
    font-family: 'Space Mono', monospace;
    color: white;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 100;
`

export const Separator=styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const TechIconContiner=styled(motion.div)`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    scroll-behavior: smooth;
`

export const ItemStyled=styled.a`
    text-decoration: none;
    color: white;
    font-size: 10rem;
`

export const NameTech=styled.span`
    color: white;
    width: 100%;
    text-align: center;
    font-family: 'Space Mono', monospace;
`