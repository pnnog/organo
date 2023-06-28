import './style.css'
import { lowerCase } from 'lodash'

const DropDown = ({label, items, required, value, handleChange}) => {
  const id = lowerCase(label)
  const handleOnChange = (e) =>{
    e.preventDefault()
    handleChange(e.target.value)
  }
  
  return(
    <div className='dropdown-wrapper'>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} required={required} value={value} onChange={handleOnChange}>
        <option value="">Escolha o seu time</option>
        {items.map((option)=> <option key={option.id} value={option.id}>{option.name}</option>
      )}

      </select>
    </div>
  )

}

export default DropDown