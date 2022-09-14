import styled from "styled-components"
import emailjs from '@emailjs/browser';
import useForm from '../hooks/useForm';
import Swal from 'sweetalert2'
import useProyectos from "../hooks/useProyectos";
import Themes from "../theme/Theme";

const Contacto = () => {

  const {nightMode} = useProyectos()

  const [{ user_name, user_email, user_message }, handleInputChange, reset] = useForm({
    user_name: "",
    user_email: "",
    user_message: ""
  })

  const handleSendEmail = (e) => {
    e.preventDefault()

    console.log(import.meta.env.service)
    emailjs.sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, e.target, import.meta.env.VITE_KEY)
      .then(response => {
        console.log(response)
        Swal.fire('Mensaje enviado con exito')
        reset()
      })

      .catch(error => console.log(error))
  }

    return (
        <ContactoContainer variant={nightMode}>
            <TitleContact>Contactame!</TitleContact>
            <FormControl onSubmit={handleSendEmail} variant={nightMode}>
                <InputGroup variant={nightMode}>
                    <input type="text" id='nameForm' required className='input' name='user_name' onChange={handleInputChange} value={user_name} />
                    <label htmlFor="nameForm" className='input-label'>Nombre</label>
                </InputGroup>
                <InputGroup className='input-group' variant={nightMode}>
                    <input type="email" className='input' id='emailForm' required name='user_email' onChange={handleInputChange} value={user_email}/>
                    <label htmlFor="emailForm" className='input-label'>Email</label>
                </InputGroup>
                <textarea placeholder='Escribe tu mensaje aquí' id='textForm' required name='user_message' onChange={handleInputChange} value={user_message} ></textarea>
                <button className='btn-submit'>Enviar Mensaje</button>
            </FormControl>
        </ContactoContainer>
    )
}

const ContactoContainer = styled.div`
  color: ${props => props.variant ? Themes.dark.title : Themes.light.title};
`


const TitleContact = styled.h3`
    text-align: center;
    margin: 1.4rem 0;
`
const FormControl = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2rem;


  .btn-submit{
    text-transform: uppercase;
    padding: 1rem; 
    border: none;
    font-weight: 700;
    color: ${props => props.variant ? Themes.dark.title : Themes.light.title};
    cursor: pointer;
    background-color: #96989d58;
    border-radius: 10px;
    transition: all .5s ease;
  }

  .btn-submit:hover{
    background-color: #96989d24;
  }

  textarea{
    background-color: transparent;  
    padding: 10px;
    border-radius: 1rem;
    border: 2px solid #abb6d69f;
    color: ${props => props.variant ? Themes.dark.textArea : Themes.light.textArea };
    outline: none;
    font: inherit;
    resize: none;
    width: 12rem;
    height: 6rem;
 
  }

  @media (min-width: 768px) {
    textarea{
        width: 19rem;
    }
  }

  @media (min-width: 1024px) {
    textarea{
        width: 23rem;
    }
  }
`
const InputGroup = styled.div`
  position: relative;
  
  .input{
    padding: 10px;
    border: none;
    border-radius: 4px;
    font: inherit;
    background-color: transparent;  
    outline: 2px solid #abb6d69f; 
  }
 
  .input-label{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px, 10px);
    transition: transform .25s;
    color: ${props => props.variant ? Themes.dark.inputLabel : Themes.light.inputLabel };
  }
  .input:focus+.input-label,
  .input:valid+.input-label{
    transform: translate(10px, -14px) scale(.8);
    color: white;
    padding-inline: 5px;
    background-color: #abb6d6;
    border-radius: 0.2rem;
  }

  .input:is(:focus, :valid){
    outline-color: #8791ae;
  }
  
  @media (min-width: 768px) {
    .input{
        width: 19rem;
    }
  }

  @media (min-width: 1024px) {
    .input{
        width: 23rem;
        padding: 15px;
    }
    .input-label{
      font-size: 1.2rem;
    }
  }

`
export default Contacto