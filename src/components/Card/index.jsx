import './style.css'
const Card = ({nome, cargo, imagem, backgroundColor}) =>{
  console.log(backgroundColor)

  return(
    <div className="card-wrapper" style={{background:`linear-gradient(180deg,${backgroundColor} 40%, #FFF 40%`}}>
      <picture className="box-image">
        <img src={imagem} alt={nome} />
      </picture>
      <div className="subtitle">
        <h4>{nome}</h4>
        <p>{cargo} </p>
      </div>
    </div>
  )
}

export default Card



