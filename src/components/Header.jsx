import styled from 'styled-components'
import useProyectos from '../hooks/useProyectos'


import { FiMoon } from 'react-icons/fi'
import { BsSun, BsWhatsapp } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdDownload } from 'react-icons/md'
import Themes from '../theme/Theme'
import { useEffect } from 'react'


const Header = () => {
  const {nightMode, handleNight} = useProyectos()

  useEffect(()=>{
    if(nightMode){
      document.documentElement.classList.add('dark')
     }else{
      document.documentElement.classList.remove('dark')
     }
  }, [nightMode])

  return (
    <header>
      <OptionContent onClick={handleNight}>
        {
          nightMode ?  <BsSun /> : <FiMoon />  
        }
       
       
      </OptionContent>

      <DescriptionContent>
        <ImageAvatar src={`images/img-CV-min.png`} />
        <Title variant={nightMode}>Ignacio Marquez</Title>
        <SubTitle variant={nightMode}>Full Stack Developer</SubTitle>
        <IconsConteiner variant={nightMode}>
          <a href="https://github.com/ignacioM3" target="_blank">
            <AiFillGithub />
          </a>
        </IconsConteiner>
      </DescriptionContent>

      <TextDescription variant={nightMode}>
        Bienvenido a mi portafolio! Soy desarrollador Full Stack JR en progreso constante!
        Con ganas de emprender nuevos retos y aprender nuevas tecnologias.
        Egresado de Digital House en noviembre 2021, actualmente me encuentro mejorando mis habilidades principalmente en React y NodeJs. Tengo como principal objetivo a futuro incursionar en el mundo del Blockchain.
      </TextDescription>
      <ConteinerContact>
        <DownloadContainer>
          <a download href="images/Cv-IgnacioMarquez.pdf">
            <TitleDownload>Download CV<MdDownload />
            </TitleDownload></a>
        </DownloadContainer>


        <IconsContact variant={nightMode}>
          <a href="http://wa.me/5491136176964" target="__blak"> <BsWhatsapp /></a>
          <a href="https://www.linkedin.com/in/marquez-ignacio/" target="__blak">  <AiFillLinkedin /></a>
        </IconsContact>
      </ConteinerContact>

    </header>
  )
}

const OptionContent = styled.div`
  margin: 2rem 0;
  cursor: pointer;
  svg{
    font-size: 1.5rem;
    color: #4697f3;
    position: absolute;
    right: 1rem;
    top: 1.5rem;
  }

  @media (min-width: 1024px) {
    svg{
      font-size: 2.2rem;
    }
  }
`
const DescriptionContent = styled.div`
  margin: 5rem 0 0 0;
  text-align: center;
`
const ImageAvatar = styled.img`
  width: 12rem;
  height: 15rem;
  border-radius: 8rem;
  border: 3.5px solid rgba(183, 194, 243, 0.3);;

`
const Title = styled.h3`
  color: ${props => props.variant ? Themes.dark.title : Themes.light.title};

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`
const SubTitle = styled.h5`
  font-weight: normal;
  color: ${props => props.variant ? Themes.dark.text : Themes.light.text};
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`
const IconsConteiner = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 1rem;

  svg{
    font-size: 1.5rem;
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: ${props => props.variant ? Themes.dark.text : Themes.light.text};
    
  }
  @media (min-width: 1024px) {
    svg{
      font-size: 2rem;
    }
  }
`
const TextDescription = styled.p`
 color: ${props => props.variant ? Themes.dark.text : Themes.light.text};
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`


const DownloadContainer = styled.div`
  background-color: #2987c6b1;
  padding: 0.8rem;
  border-radius: 1rem;
  width: 50%;
  max-width: 11rem;
  margin: 1.2rem auto;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.4s ease-in-out;
  &:hover{
      box-shadow: rgba(0, 0, 0, 0.56) 0px 10px 70px -10px;
  }

  @media (min-width: 1024px) {
    padding: 1rem;
    margin: 1.2rem 1rem 1.2rem 0;
  }
`
const TitleDownload = styled.h6`
  font-size: 1rem;
  color: white;
  text-align: center;
  font-weight: 500;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  svg{
    font-size: 1.5rem;
  }
`

const IconsContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  svg{
    background-color: ${props => props.variant ? Themes.dark.bgcIcons : Themes.light.bgcIcons};
    padding: 0.8rem;
    border-radius: 0.6rem;
  }
  a{
    margin-top: 0.4rem;
    color: #000000a1;
  }

  @media (min-width: 1024px) {
    svg{
      font-size: 1.5rem;
    }
  }
`

const ConteinerContact = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`


export default Header