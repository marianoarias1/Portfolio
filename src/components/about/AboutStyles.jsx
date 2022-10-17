import styled from "styled-components";

export const AboutContainer=styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 90px;
    scroll-behavior: smooth;

    @media (max-width: 391px) {
        justify-content: space-evenly;
        height: 100%;
    }

    @media (max-width:321px) {
        height: 80%;
        justify-content: space-evenly;
    }
`

export const TitleContainer= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 391px) {
        height: 10%;
    }
`

export const Title=styled.h1`
    font-family: 'Space Mono', monospace;
    color: white;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 100;
    animation: tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) 300ms both;
@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
`

export const TextContainer=styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 391px) {
        height: 40%;
        width: 70%;
        overflow: scroll;
        margin-top: 300px;
    }

    
    @media (max-width:321px) {
      height: 40%;
      width: 70%;
      overflow: scroll;
      margin-top: 23rem;
    }
`

export const TextAbout=styled.p`
    font-family: 'Space Mono', monospace;
    color: white;
    font-size: 1rem;
    width: 90%;
    margin-left: 30px;
    text-align: center;
    letter-spacing: 1px;
    animation: slide-rotate-hor-b-bck 1s ease-in-out reverse ;

    @keyframes slide-rotate-hor-b-bck {
  0% {
            transform: translateY(0) translateZ(0) rotateX(0deg);
            transform-origin: bottom center;
  }
  100% {
            transform: translateY(150px) translateZ(-230px) rotateX(90deg);
            transform-origin: bottom center;
  }
}


@media (max-width: 391px) {
    margin-left: 0px;
    margin-top: 500px;
  }

      
  @media (max-width:321px) {
    margin-left: 0px;
    margin-top: 700px;
    }
`

export const ImageContainer=styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 391px) {
      width: 70%;
      height: 40%;
      position: absolute;
      margin-bottom: 100px;
    }

    @media (max-width:321px) {
        height: 100%;
        justify-content: flex-start;
        align-items: flex-end;
        position: none;
    }
`

export const Image=styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    object-fit: cover;
`