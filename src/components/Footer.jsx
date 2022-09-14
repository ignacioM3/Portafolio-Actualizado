import styled from 'styled-components'
import useProyectos from '../hooks/useProyectos'
import Themes from '../theme/Theme'
import Contacto from './Contacto'

const Footer = () => {
  const {nightMode} = useProyectos()

  return (
    <footer>
        <Contacto />
        <FooterContent variant={nightMode}>© Ignacio Marquez</FooterContent>
    </footer>
  )
}

const FooterContent = styled.h5`
  margin-top: 3rem;
  text-align: center;
  color: ${props => props.variant ? Themes.dark.text : Themes.light.text}

`


export default Footer