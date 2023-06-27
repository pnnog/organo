import Card from '../Card'
import './style.css'

const Squad = ({title, colaborators, primaryColor, secondaryColor}) =>{

  return (
    !!colaborators.length &&
      <section style={{backgroundColor: primaryColor}} className='squad-wrapper'>
        <h3 style={{borderColor: secondaryColor}}>{title}</h3>

        <div className='colaborators'>
          {colaborators.map(colaborator => <Card {...colaborator} backgroundColor = {secondaryColor} key={colaborator.nome}/>)}
        </div>
      </section>
  )
}

export default Squad