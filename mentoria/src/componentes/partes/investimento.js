import Styles from './investimento.module.css'
import {FiInstagram} from 'react-icons/fi'

function Investimento(){
    return(
        <div className={Styles.investimento}>
            <div className={Styles.cardInvestimento}>
                <h3>Investimento</h3>
                <ul>
                    <li>995,00 à vista;</li>
                    <li>1000,00 em 4x no Pix;</li>
                    <li>997,00 em 12X.</li>
                </ul>
            <div>
            <div className={Styles.pagamento}>

                <p>Para fazer parte da próxima turma chame no direct</p>
                <a href='https://www.instagram.com/mentoriaforadacurva'><button className={Styles.button}><FiInstagram/>@mentoriaforadacurva</button></a>

            </div>


                </div>
            </div>
        </div>
    )
}

export default Investimento