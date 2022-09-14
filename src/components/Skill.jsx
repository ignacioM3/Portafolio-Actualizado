import styled from "styled-components"
import Themes from '../theme/Theme'
import useProyectos from "../hooks/useProyectos"

import {MdOutlineNavigateNext} from 'react-icons/md'

const Skill = () => {

    const {nightMode} = useProyectos()

    return (
        <ContainerSkill variant={nightMode}>
            <SkillContent>
                <TitleSkill>Frontend</TitleSkill>
                <SkillItem><MdOutlineNavigateNext/> HTML</SkillItem>
                <SkillItem><MdOutlineNavigateNext/> CSS</SkillItem>
                <SkillItem><MdOutlineNavigateNext/> JavaScript</SkillItem>
                <SkillItem><MdOutlineNavigateNext/> React</SkillItem>
                <SkillItem><MdOutlineNavigateNext/> Git</SkillItem>
            </SkillContent>

            <SkillContent>
                <TitleSkill>Backend</TitleSkill>
                <SkillItem><MdOutlineNavigateNext/> NodeJs</SkillItem>
                <SkillItem><MdOutlineNavigateNext/> Express</SkillItem>
                <SkillItem><MdOutlineNavigateNext/> MongoDb</SkillItem>
                <SkillItem><MdOutlineNavigateNext/> MySql</SkillItem>
            </SkillContent>
        </ContainerSkill>
    )
}

const ContainerSkill = styled.div`
    max-width: 22rem;
    margin: 0 auto 4rem;
    color: ${props => props.variant ? Themes.dark.title : Themes.light.title }
`
const SkillContent = styled.div``
const TitleSkill = styled.h3`
    text-align: center;
    margin-bottom: 1.2rem;

`
const SkillItem = styled.p`
   margin: 0 0 0 1.5rem;
   font-weight: 400;

`


export default Skill