import { useState } from 'react'
import './style.css'
import {AiFillCloseCircle, AiFillHeart} from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

const Card = ({id, name, office, image, backgroundColor, onDelete}) =>{

  const [fav, setFav] = useState(false)

  const handleOnClick = (e) =>{
    e.preventDefault()
    onDelete(id)
  }

  return (
    <div className="card-wrapper" style={{background:`linear-gradient(180deg,${backgroundColor} 40%, #FFF 40%`}}>
      <div className='delete' onClick={handleOnClick}><AiFillCloseCircle/></div>
      <picture className="box-image">
        <img src={image} alt={name} />
      </picture>
      <div className="subtitle">
        <h4>{name}</h4>
        <p>{office} </p>
      </div>
      {!fav && <div onClick={() => setFav(true)} className='fav'><AiOutlineHeart size={25}/></div>} 
      {!!fav && <div onClick={() => setFav(false)} className='fav'><AiFillHeart size={25} color='red'/></div>}
    </div>
  )
}

export default Card



