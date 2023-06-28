import { lowerCase } from "lodash"
import './style.css'

const Field = ({type ='text' || 'color', label, placeholder, required, value, handleChange } ) =>{
  const id = lowerCase(label)


  const handleOnChange = (e) =>{
    e.preventDefault()
    handleChange(e.target.value)
  }

  return(
    <div className="field-wrapper ">
      <label htmlFor={id}>{label}</label>
      <input value={value} type={type} id={id} placeholder={placeholder} required = {required} onChange = {handleOnChange} />
    </div>
    
  )
}

export default Field