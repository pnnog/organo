import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import Button from "../Button"
import DropDown from "../Dropdow"
import Field from "../Field"


import './styles.css'

const Form = ({SubmitColaborators, SubmitNewSquad, squads}) =>{

  const [name, setName] = useState('')
  const [office, setOffice] = useState('')
  const [image, setImage] = useState('')
  const [squad, setSquad] = useState('')
  const [newSquad, setNewSquad] = useState('')
  const [colorSquad, setColorSquad] = useState('#6278F7')
  console.log(colorSquad)

  function handleOnSubmit(e) {
    e.preventDefault()
    const colaborator = {
      id: uuidv4(),
      name,
      office,
      image,
      squad
    }

    setName('')
    setOffice('')
    setImage('')
    setSquad('')

    SubmitColaborators(colaborator)
  }

  function handleOnSubmitSquad(e) {
    e.preventDefault()
    SubmitNewSquad({
      id: uuidv4(),
      color: colorSquad,
      name: newSquad
    })
  
    setNewSquad("")
    setColorSquad("#6278F7")
  }

  return(
    <>
      <section className="form-wrapper container">
        <form onSubmit = {handleOnSubmitSquad} className="form">
          <h2>Preencha os dados para criar um novo time</h2>
          <Field 
            required 
            label='Nome do time' 
            placeholder='Digite um nome para o seu time' 
            value={newSquad} 
            handleChange={(value) => setNewSquad(value)}
            /> 

          <Field 
            required 
            type='color'
            label='Cor' 
            value={colorSquad} 
            handleChange={(value) => setColorSquad(value)}
            /> 
          <Button>Criar time</Button>
        </form>
      </section>

      <section className="form-wrapper container">
        <form onSubmit = {handleOnSubmit} className="form">
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <Field 
            required 
            label='Nome' 
            placeholder='Digite seu nome' 
            value={name} 
            handleChange ={(value) => setName(value) } />

          <Field
            required
            label='Cargo'
            placeholder='Digite seu cargo'
            value={office}
            handleChange = {(value) => setOffice(value)}
          />
          <Field 
            required
            label='Imagem'
            placeholder='Informe o endereço da imagem'
            value={image}
            handleChange = {(value) => setImage(value)} />
            
          <DropDown
            required 
            label='Time' 
            items ={squads}
            value={squad}
            handleChange = {(value) => setSquad(value)} 
          />
          <Button>Criar card</Button>
        </form>
      </section>
    </>
  )
}


export default Form