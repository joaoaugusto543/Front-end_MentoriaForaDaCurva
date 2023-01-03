import Aulas from '../funcoes/Aulas'
import Styles from './funcionamentoDoCurso.module.css'

function FuncionamentoDoCurso(){

    const faseUm=['Roda da vida;','Teste de Personalidade.']
    const faseDois=['Pontos Fracos;','Pontos Fortes;','Pontos Cegos da Liderança.']
    const faseTres=['Como manter o foco;','O Processo de Delegar;','Metas e prazos.']
    const faseQuatro=['Comunicação Não Violenta;','Como Motivar Seu Time;','Reuniões One a One.']
    const faseCinco=['FeedBack;','Relação com o time;','Relação com superiores;','Relações estratégicas e alianças.']
    const faseSeis=['Soft Skills;','Hard Skills.']

    return(
        <div className={Styles.funcionamento}>
            <h2 className={Styles.titulo}>Como funciona a mentoria?</h2> 

            <ul className={Styles.listaFuncionamento}>
                <li>Encontros 100% online;</li>
                <li>Aulas dinâmicas;</li>
                <li>Conteúdos e dúvidas via Whatsapp.</li>
            </ul>

            <h2>Conteúdos</h2>

            <div>
                <Aulas numeroDaAula='1' nomeDaAula='Autoconsciência' temas={faseUm}/>
                <Aulas numeroDaAula='2' nomeDaAula='Autocontrole' temas={faseDois}/>
                <Aulas numeroDaAula='3' nomeDaAula='Automotivação' temas={faseTres}/>
                <Aulas numeroDaAula='4' nomeDaAula='Empatia' temas={faseQuatro}/>
                <Aulas numeroDaAula='5' nomeDaAula='Competência Social' temas={faseCinco}/>
                <Aulas numeroDaAula='6' nomeDaAula='Desenvolva suas habilidades' temas={faseSeis}/>
            </div>
        </div>
    )
}

export default FuncionamentoDoCurso