import styled from "styled-components";

export const JobsContainer=styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;

    @media (max-width:391px) {
        margin-top: 50rem;
        justify-content: space-evenly;
    }

    
    @media (max-width:321px) {
        margin-top: 62rem;
        justify-content: space-evenly;
    }
`

export const JobsStyled=styled.div`
    width: 90%;
    height: 30%;
    margin-left: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width:391px) {
       flex-direction: column;
       justify-content: space-evenly;
       height: 80%;
    }

    @media (max-width:321px) {
        flex-direction: column;
       justify-content: space-evenly;
       height: 105%;
    }
`

export const TitleJobsContainer= styled.div`
    width: 90%;
    margin-left: 90px;
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 20%;
    margin-bottom: 40px;

    @media (max-width:391px) {
        width: 50%;
    }  
`

export const TitleJobs=styled.h1`
    font-family: 'Space Mono', monospace;
    color: white;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 100;
`

export const ImageContainer=styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Image=styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    object-fit: cover;
`

export const SmallContainer=styled.div`
    width:auto;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #B9E523;
    border-radius: 20px;
    margin-top: 10px;

    :hover{
        opacity: 0.9;
        background-color: #B9E523;
    }

`
export const Small=styled.small`
    font-family: 'Space Mono', monospace;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 100;
`
export const LinkJob=styled.a`
    text-decoration: none;
    color: white;
    cursor: pointer;
    width: 100%;
    height: 100%;
`

export const DescContianer=styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width:391px) {
        overflow: scroll;
    }

    
    @media (max-width:391px) {
        width: 62%;
    }

`
export const TitleJobContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:391px) {
        margin-top: 80px;
    }
    @media (max-width:321px) {
        margin-top: 150px;
    }
`
export const TitleJob=styled.h2`
    font-family: 'Space Mono', monospace;
    color: white;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 100;
`

export const Desc=styled.p`
    font-family: 'Space Mono', monospace;
    color: white;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
`