import React, { useEffect } from 'react'
import { ItemStyled, NameTech, Separator, TechContainer, TechIconContiner, Title, TitleContainer } from './TechsStyles'
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { GrReactjs } from 'react-icons/gr';
import { SiRedux, SiStyledcomponents} from 'react-icons/si'; 



const Itemtech=({children, text})=>{
    return(
        <>
            <TechIconContiner
            >
                <ItemStyled>
                    {children}
                </ItemStyled>
                <NameTech>{text}</NameTech>
            </TechIconContiner>
        </>
    )
}

export const Techs = () => {

  return (
    <TechContainer  id='techs'>
        <TitleContainer>
            <Title>Las tecnologias que uso</Title>
        </TitleContainer>
        <Separator>
            <Itemtech text='HTML'><AiOutlineHtml5/></Itemtech>
            <Itemtech text='CSS'><DiCss3/></Itemtech>
            <Itemtech text='JAVASCRIPT'><TbBrandJavascript/></Itemtech>
        </Separator>

        <Separator>
            <Itemtech text='REACT.JS'><GrReactjs/></Itemtech>
            <Itemtech text='REDUX'><SiRedux/></Itemtech>
            <Itemtech text='STYLED COMPONENTS'><SiStyledcomponents/></Itemtech>
        </Separator>
    </TechContainer>
  )
}
