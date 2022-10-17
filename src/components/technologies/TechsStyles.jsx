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

    
    @media (max-width: 391px) {
        justify-content: space-evenly;
        height: 100%;
        flex-wrap: wrap;
        flex-direction: column;
        margin-left: 30px;
    }

    @media (max-width:321px) {
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        width: 100%;
        display: flex;
        margin-top: 5rem;
    }
`

export const TitleContainer= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 391px) {
        width: 85%;
        height: 10%;
    }

    @media (max-width: 321px) {
        width: 85%;
        height: 10%;
        margin-bottom: 8rem;
    }
`

export const AllContainer=styled.div`

@media (max-width: 391px) {
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
    }
        @media (max-width: 321px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 10rem;
    }
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

        @media (max-width: 391px) {
        display: flex;
        justify-content: space-evenly;
        height: 40%;
        width: 100%;
        overflow: scroll;
        flex-wrap: wrap;
        margin-top: 40px;
    }

    @media (max-width: 321px) {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        overflow: scroll;
        flex-wrap: wrap;
        margin-top: 0px;
    }
`

export const SeparatorContainer= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    @media (max-width: 391px) {
        margin-top: 4rem;
    }

        @media (max-width: 321px) {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        margin-top: 0px;
    }
    
`

export const TechIconContiner=styled(motion.div)`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    scroll-behavior: smooth;

    @media (max-width: 391px) {
        height: 100%;
        width: 100%;
        margin-bottom: 20px;
        margin-top: 30px;
    }

    @media (max-width: 321px) {
        height: 100%;
        width: 100%;
        margin-bottom: 20px;
        margin-top: 50px;
    }
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