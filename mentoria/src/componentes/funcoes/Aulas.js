import Styles from './Aulas.module.css'

function Aulas({numeroDaAula,temas,nomeDaAula}){
    return(
        <div className={Styles.aulas}>
            <div className={Styles.aula}>
                <div className={Styles.bolinha}><p>Aula&nbsp;{numeroDaAula}</p></div>
                <div>
                    <h3>{nomeDaAula}</h3>
                    <ul>
                        {temas.map((tema,index)=><li key={index}>{tema}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Aulas