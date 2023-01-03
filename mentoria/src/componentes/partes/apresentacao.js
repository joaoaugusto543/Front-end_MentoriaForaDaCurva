import Styles from './Apresentacao.module.css'
import VemComAGente from '../../img/vemComAgente.jpeg'


function Apresentacao(){
    return(
        <div>
                <h2 className={Styles.titulo}>Mentoria Fora da Curva</h2>
                <p className={Styles.textoDeApresentacao}>
                     Enfermeiros que buscam liderar de maneira efetiva, destacando-se no mercado de trabalho
                </p>
                <div className={Styles.Apresentacao}>
                    <div className={Styles.listaDePerguntas}>
                       
                            <ul>
                                <li>Você conhece seus pontos fortes e fracos na liderança?</li>
                                <li>Você conhece seus pontos cegos na liderança?</li>
                                <li>Você sabe o que te tira do controle?</li>
                                <li>Consegue gerir suas emoções?</li>
                                <li>Consegue engajar seu time?</li>
                                <li>Consegue delegar de maneira eficaz?</li>
                                <li>Sabe gerir os conflitos do seu time?</li>
                        
                            </ul>
                            <img src={VemComAGente} className={Styles.vemComAgentePc} alt='imagem das monitores segurando uma placa'/>
                    
                    
                    </div>

                        <p >Se você respondeu <span>NÃO</span> para alguma dessas perguntas então a mentoria é para você</p>
                        <img src={VemComAGente} className={Styles.vemComAgenteCell} alt='imagem das monitores segurando uma placa'/>

                </div>
         
        </div>
    )
}

export default Apresentacao