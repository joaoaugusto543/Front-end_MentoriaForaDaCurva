import Styles from './Monitores.module.css'

function Monitores({img,lista}){
    return(
        <div className={Styles.cardApresentacao}>
            <img src={img} alt='imagem do monitor'/>
            <ul>
                {lista.map((lista,index)=>{
                    return <li key={index}>{lista}</li>
                })}
            </ul>
        </div>
    )
}

export default Monitores