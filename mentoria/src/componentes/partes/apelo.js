import Styles from './apelo.module.css'
import Investimento from './investimento'

function Apelo(){
    return(
        <div>
        <div className={Styles.apelo}>
                <p className={Styles.pergunta}>Você deseja se destacar no mercado de trabalho?</p>
            <div className={Styles.venhaFazerParte}>
                <div className={Styles.resposta}>
                    <p>Então venha se tornar um Enfermeiro</p>
                    <p className={Styles.foraDaCurva}>Fora da Curva</p>
                </div>
            </div>
        </div>
            <Investimento/>
        </div>
    )
}

export default Apelo