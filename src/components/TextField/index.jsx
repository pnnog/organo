import { lowerCase } from "lodash"
import './style.css'

const TextField = ({label, placeholder, required, value, handleChange } ) =>{
  const id = lowerCase(label)


  const handleOnChange = (e) =>{
    e.preventDefault()
    handleChange(e.target.value)
  }

  return(
    <div className="textfield-wrapper">
      <label htmlFor={id}>{label}</label>
      <input value={value} type="text" id={id} placeholder={placeholder} required = {required} onChange = {handleOnChange}/>
    </div>
    
  )
}

export default TextField