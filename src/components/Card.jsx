import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'

const Card = ({ name, img, gitHub, page }) => {
  return (
    <CardConteiner variant={img}>
      <Content>
        <Title>{name}</Title>
        <div>
          <LinkUrl href={gitHub} target="_blank">
            <AiFillGithub />
          </LinkUrl >
          <LinkUrl href={page} target="_blank">
            <TbWorld />
          </LinkUrl>
        </div>


      </Content>
    </CardConteiner>
  )
}

const CardConteiner = styled.div`
    width: 280px;
    height: 180px;
    margin: 2rem;
    border-radius: 2rem;
    background: url(${props => props.variant ? `images/${props.variant}` : ""}); 
    background-size: cover;
    overflow: hidden;
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
  opacity: 0;
  transition: .5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover{
    opacity: 1;
  }
`

const Title = styled.h5`
  color: rgba(255, 255, 255, .8);
  margin: 10px 0 5px;
  font-size: 1.5rem;
`

const LinkUrl = styled.a`
svg{
  font-size: 2rem;
  color: white;
  margin: 10px 1rem;
}

`

export default Card