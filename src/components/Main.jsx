import { useState } from "react"
import styled from "styled-components"
import useProyectos from "../hooks/useProyectos";
import Card from "./Card"
import Skill from "./Skill";


const Main = () => {
    const [skill, setSkill] = useState(false);
    const {proyectos, load} = useProyectos()
    
    const {nightMode} = useProyectos()

    
    return (
        <MainContainer>
            <NavBar>
                <TitleNav onClick={() => setSkill(false)} className={skill ? '': 'skillActive' }>Proyectos</TitleNav>
                <TitleNav onClick={() => setSkill(true)} className={skill ? 'skillActive': '' } >Skill</TitleNav>
            </NavBar>
            {
                skill ? (
                    <Skill />
                ) : (
                    <CardContainer>
                        <Row>
                            
                            {
                                load ? <Cargando>Cargando...</Cargando> 
                                : Object.keys(proyectos).length === 0 ? <p>No hay resultados</p> 
                                : (
                                    proyectos.map(proyect =>(
                                        <Card key={proyect.id} {...proyect}/>
                                    ))
                                )
                            }
                        </Row>

                    </CardContainer>
                )
            }
        </MainContainer >
    )
}

const MainContainer = styled.main`
    margin: 2rem auto 0;
`
const NavBar = styled.div`
    width: 17rem;
    background-color: #96989d58;
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
    margin: 1rem auto;
    padding: 0 0.4rem;
    gap: 1rem;
`
const TitleNav = styled.h5`
    font-size: 1rem;
    padding: 12px 14px;
    width: 50%;
    margin: 0.4rem 0;
    border-radius: 0.8rem;
    text-align: center;
    font-weight: normal;
    cursor: pointer;
`

const CardContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
`
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Cargando = styled.p``


export default Main