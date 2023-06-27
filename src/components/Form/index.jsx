import { useState } from "react"
import Button from "../Button"
import DropDown from "../Dropdow"
import TextField from "../TextField"

import './styles.css'

 const Form = ({handleSubmit, squads}) =>{

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

 
  function handleOnSubmit(e) {
  e.preventDefault()
  const colaborator = {
    nome,
    cargo,
    imagem,
    time
  }

  setNome('')
  setCargo('')
  setImagem('')
  setTime('')

  handleSubmit(colaborator)
  }

  return(
    <section className="form-wrapper">
      <form onSubmit = {handleOnSubmit} className="form">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          required 
          label='Nome' 
          placeholder='Digite seu nome' 
          value={nome} 
          handleChange ={(value) => setNome(value) } />

        <TextField
          required
          label='Cargo'
          placeholder='Digite seu cargo'
          value={cargo}
          handleChange = {(value) => setCargo(value)}
        />
        <TextField 
          required
          label='Imagem'
          placeholder='Informe o endereço da imagem'
          value={imagem}
          handleChange = {(value) => setImagem(value)} />
          
        <DropDown
          required 
          label='Time' 
          items ={squads}
          value={time}
          handleChange = {(value) => setTime(value)} 
        />
        <Button>Criar card</Button>
      </form>
    </section>

  )
   

}


export default Form