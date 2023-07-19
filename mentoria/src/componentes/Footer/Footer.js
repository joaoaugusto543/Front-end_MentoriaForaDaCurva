import './Footer.css'
import {HiFire} from 'react-icons/hi'
import {AiFillInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
        <div className='socialMidias'>
            <a href='https://hotmart.com/pt-br/marketplace/produtos/5o-mentoria-fora-da-curva/W82064661W'><HiFire/>Hotmart</a>
            <a href='https://www.instagram.com/mentoriaforadacurva'><AiFillInstagram/>Instagram</a>
        </div>
        <p className='copy'>Mentoria Fora da Curva&copy;2023</p>
        <p className='developer'>Desenvolvido por João Augusto Correia Lopes</p>
    </footer>
  )
}

export default Footer