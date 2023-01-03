import Monitores from '../funcoes/Monitores'
import Styles from './SobreNos.module.css'
import BrunaLopes from '../../img/BrunaLopes.jpeg'
import ElisandraLeites from '../../img/ElisandraLeites.jpeg'

function SobreNos(){

    const brunaLopes=['Me chamo Bruna Lopes;','Sou Supervisora de Enfermagem;','Sou Mentora Profissional;','Atuo na área há 17 anos;',
    'Lidero um grande time em um dos melhores hospitais do Brasil;','O que me move é desenvolver pessoas e extrair o melhor delas;, transformar simples enfermeiros em líderes extraordinários.']
    
    const elisandraLeites=['Me chamo Elisandra Leites;','Sou Supervisora de Enfermagem;','Sou Mestre em Educação em Saúde;','Atuo na área há 15 anos;',
    'Lidero um grande time em um dos melhores hospitais do Brasil;','O que me move é a esperança de um mundo mais justo e igualitário.']
    
    return(
        <>
            <h2 className={Styles.titulo}>Quem somos?</h2>
            <Monitores img={BrunaLopes} lista={brunaLopes} />
            <Monitores img={ElisandraLeites} lista={elisandraLeites}/>
        </>
    )
}

export default SobreNos