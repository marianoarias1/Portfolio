import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineCode } from 'react-icons/ai';
import {BiHomeHeart} from 'react-icons/bi'
import { ContainerStyled, ContentContainer, ItemContainer, LinkNav, NavBar } from './ContainerStyles';
import { About } from '../about/About';
import { Techs } from '../technologies/Techs';
import {GiBookCover} from 'react-icons/gi'
import { Jobs } from '../Jobs/Jobs';


const Items=({children, href})=>{
  return(
    <>
      <ItemContainer>
        <LinkNav href={href}> 
            {children}
        </LinkNav>
      </ItemContainer>
    </>

  )
}

export const Container = () => {

  return (
    <ContainerStyled>
      <ContentContainer>
          <NavBar>
            <Items href='#about'><BsPersonCircle/></Items>
            <Items href='#techs'><GiBookCover/></Items>
            <Items href='#jobs'><AiOutlineCode/></Items>
          </NavBar>

          <About />
      </ContentContainer>
        <Techs></Techs>

        <Jobs></Jobs>
  </ContainerStyled>

  )
}
