import hexToRgba from 'hex-to-rgba'
import Card from '../Card'
import './style.css'

const Squad = ({colaborators, onDelete, changeColor, squad}) =>{

  const handleOnChange = (e) =>{
    const color =  e.target.value
    changeColor(color, squad.id)
  }

  const changeOpacity = (color) => {
    const bgColor = hexToRgba(color, 0.6) 
    return bgColor
  }

  return (
    !!colaborators.length &&
      <section style={{backgroundColor: changeOpacity(squad.color)}} className='squad-wrapper'>
        <div className='container'>
        <h3 style={{borderColor: squad.color}}>{squad.name}</h3>

        <input value={squad.color} className='input-color' type="color" name="input-color" id="input-color" onChange={handleOnChange}/>

        <div className='colaborators'>
          {colaborators.map(colaborator => {
            return (
              <Card {...colaborator} backgroundColor = {squad.color} key={colaborator.id} onDelete = {onDelete}/>
            )
          })}
        </div>

        </div>
      </section>
  )
}

export default Squad