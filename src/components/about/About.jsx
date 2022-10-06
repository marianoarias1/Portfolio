import React from 'react'
import { AboutContainer, Image, ImageContainer, TextAbout, TextContainer, Title, TitleContainer } from './AboutStyles'
import  me from '../../images/me.jpg'

export const About = () => {
  return (
    <AboutContainer id='about'>
        <TitleContainer>
          <Title>¡Hi there, this is me!</Title>
        </TitleContainer>
        <TextContainer>
            <TextAbout>
                Me llamo Mariano Arias, desde el 2019 me interesó el mundo IT y la programación en general.
                en el 2021 ingrese a la carrera de Licenciatura en sistemas, donde aprendí lógica de programación y Python, poco tiempo después me di cuenta que esa no era la rama que yo quería seguir, me interesó mas el mundo del desarrollo web principalmente el Front-End. Ese mimso 2021 decidí ingresar el Bootcamp de NUCBA, donde nos enseñaron a utilizar las herramientas demandadas en el mercado.
                Me gusta el fútbol, soy aficionado a la fotografía y tengo muchas ganas de seguir aprendiendo ;)
            </TextAbout>
        </TextContainer>

        <ImageContainer>
            <Image src={me}/>
        </ImageContainer>
    </AboutContainer>
  )
}
