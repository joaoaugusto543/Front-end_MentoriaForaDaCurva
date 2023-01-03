import Styles from './beneficios.module.css'

function Beneficios(){
    return(
        <div className={Styles.beneficios}>
            <h2>Benefícios</h2>
            <div>
                <ul>
                    <li>Auto conhecimento;</li>
                    <li>Potencializar seus Pontos Fortes;</li>
                    <li>Neutralizar seus Pontos Fracos;</li>
                    <li>Desenvolver sua soft Skills;</li>
                    <li>Melhores resultados;</li>
                    <li>Aumento do Networking;</li>
                    <li>Oportunidade de crescimento no mercado de trabalho.</li>
                </ul>
            </div>
        </div>
    )
}

export default Beneficios