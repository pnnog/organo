import './style.css'

const Footer = () =>{
  return(
    <footer className='footer-wrapper'>
      <div className='content container' >  
        <div className='social-links'>
          <ul>
            <li>
                <a href="http://facebook.com.br"target='_blank' rel="noreferrer"> <img src="/img/fb.png" alt="Logo facebook"/> </a>
            </li>

            <li>
                <a href="https://twitter.com/?lang=pt"target='_blank' rel="noreferrer"> <img src="/img/tw.png" alt="Logo twitter"/> </a>
            </li>

            <li>
                <a href="http://instagram.com.br"target='_blank' rel="noreferrer"> <img src="/img/ig.png" alt="Logo instagram"/> </a>
            </li>
            </ul>
        </div>
        <div className='logo'> <img src="/img/logo.png" alt="Logo" /></div>
        <p>Desenvolvido por pnnog</p>
      </div>


    </footer>
  )
}

export default Footer