import './Home.css'
import imageAbout from '../../img/vemComAgente.jpeg'
import BrunaLopes from '../../img/BrunaLopes.jpeg'
import ElisandraLeites from '../../img/ElisandraLeites.jpeg'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import {useEffect, useState } from 'react'
import moveRight from '../../scripts/slides/moveRight'
import { classes, classesMobile } from '../../data/classes'
import moveLeft from '../../scripts/slides/moveLeft'
import screenSize from '../../scripts/slides/screenSize'
import moveLeftMobile from '../../scripts/slides/moveLeftMobile'
import moveRightMobile from '../../scripts/slides/moveRightMobile'
import sendEmail from '../../services/emailServices'

function Home() {

  const [count,setCount]=useState(1)
  const [countMobile,setCountMobile]=useState(1)

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [messageSuccess,setMessageSucess]=useState(null)
  const [messageError,setMessageError]=useState(null)

  useEffect(()=>{
    screenSize()
  },[])
  
  function handleMoveRight(){
    moveRight(count)
    if(count===1){
        setCount(count + 1)
    }
  }

  function handleMoveLeft(){
    moveLeft(count)
    if(count===2){
        setCount(count - 1)
    }
  }

  function handleMoveRightMobile(){
    moveRightMobile(countMobile)
    if(countMobile!==6){
        setCountMobile(countMobile+1)
    }

  }

  function handleMoveLeftMobile(){
    moveLeftMobile(countMobile)
    if(countMobile!==1){
        setCountMobile(countMobile-1)
    }

  }

  async function handleSubmit(e){
    e.preventDefault()

    const contact={
        name,
        email,
        message
    }

    const data=await sendEmail(contact)

    if(data.success){
        setMessageSucess('Enviado com sucesso')

        setTimeout(()=>{
            setMessageSucess(null)
        },3000)
    }

    if(data.error){
        setMessageError('Falha no envio')

        setTimeout(()=>{
            setMessageError(null)
        },3000)
    }

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
        <section className='banner'>
            <h1 className='titleBanner'>Mentoria Fora da Curva</h1>
        </section>
        <section className='about container'> 
            <div className='aboutBox'>
                <img src={imageAbout} alt='curva' />
                <div className='textAbout'>
                    <h2>Sobre</h2>
                    <p>Mentoria destinada a Enfermeiros que buscam ser reconhecidos, desejam liderar com segurança e pretendem ser e ter uma equipe resolutiva, através de aulas onde serão trabalhados pontos importantes para obter sucesso.</p>
                    <div>
                        <a href='https://www.instagram.com/mentoriaforadacurva' className='instagram'>@mentoriaforadacurva</a>
                    </div>
                </div>
            </div>
        </section>
        <section className='instructors container'>
            <div className='instructor'>
                <img src={BrunaLopes} alt='Bruna' />
                <div>
                    <h2>Bruna Lopes</h2>
                    <p>Sou Bruna Lopes, Supervisora de Enfermagem e Mentora Profissional com 17 anos de experiência em um dos melhores hospitais do Brasil. Meu trabalho vai além da supervisão, pois tenho paixão por desenvolver pessoas e transformar enfermeiros em líderes extraordinários. Através de orientação, treinamento e apoio contínuo, busco capacitar minha equipe para oferecer cuidados excepcionais aos pacientes, impactando positivamente suas vidas.</p>
                </div>
            </div>
            <div className='instructor'>
                <img src={ElisandraLeites} alt='Bruna' />
                <div>
                    <h2>Elisandra Leites</h2>
                    <p>Sou Elisandra Leites, Supervisora de Enfermagem com 15 anos de experiência em um dos melhores hospitais do Brasil. Como Mestre em Educação em Saúde, busco contribuir para o desenvolvimento da equipe. Lidero um time talentoso que compartilha o objetivo de oferecer cuidados de qualidade aos pacientes. Minha motivação vai além das tarefas diárias, pois luto por um mundo mais justo e igualitário.</p>
                </div>
            </div>
        </section>
        <section className='classes container'>
            <h1>Aulas</h1>
            <div className='slidesContainer'>
                <div className='slides'>
                    {classes && classes.map((item,index)=>(
                        <div key={index+100} className={`slide slide${index+1}`}> 
                            <div key={index+43} className='class'>
                                <h2>Aula {item[0].class}</h2>
                                <h3>{item[0].name}</h3>
                                <ul>
                                    {item[0].listy.map((itemListy,index)=>(
                                        <li key={index+34}>{itemListy}</li>
                                    ))}
                                </ul>
                            </div>
                            <div key={index+87} className='class'>
                                <h2>Aula {item[1].class}</h2>
                                <h3>{item[1].name}</h3>
                                <ul>
                                    {item[1].listy.map((itemListy,index)=>(
                                        <li key={index+56}>{itemListy}</li>
                                    ))}
                                </ul>
                            </div>
                            <div key={index+5} className='class'>
                                <h2>Aula {item[2].class}</h2>
                                <h3>{item[2].name}</h3>
                                <ul>
                                    {item[2].listy.map((itemListy,index)=>(
                                        <li key={index+21}>{itemListy}</li>
                                    ))}
                                </ul>
                            </div>
                            
                        </div>
                    ))}
                    <div className='controllers'>
                        <p className='left' onClick={handleMoveLeft}><FaArrowAltCircleLeft/></p>
                        <p className='right' onClick={handleMoveRight}><FaArrowAltCircleRight/></p>
                    </div>
                </div>
            </div>
        </section>
        <section className='classesMobile container'>
            <h1>Aulas</h1>
            <div className='slidesContainer'>
                <div className='slides'>
                    {classesMobile && classesMobile.map((item,index)=>(
                        <div key={index} className={`class class${index+1}`}>
                            <h2>Aula {item.class}</h2>
                            <h3>{item.name}</h3>
                            <ul>
                                {item.listy.map((itemListy,index)=>(
                                    <li key={index+34}>{itemListy}</li>
                                ))}
                            </ul>
                        </div>                            
                    ))}
                    <div className='controllers'>
                        <p className='leftMobile' onClick={handleMoveLeftMobile}><FaArrowAltCircleLeft/></p>
                        <p className='rightMobile' onClick={handleMoveRightMobile}><FaArrowAltCircleRight/></p>
                    </div>
                </div>
            </div>
        </section>
        <section className='contacts container'>
            <h1>Contato</h1>
            {messageSuccess && <p className='success'>{messageSuccess}</p>}
            {messageError && <p className='error'>{messageError}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome *</span>
                    <input type='text' required placeholder='Digite seu nome' value={name} onChange={(e)=>setName(e.target.value)}/>
                </label>
                <label>
                    <span>E-mail *</span>
                    <input type='email' required placeholder='Digite seu email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Mensagem *</span>
                    <textarea required placeholder='Digite sua mensagem' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </label>
                <input type='submit' value='Enviar' />
            </form>
        </section>
    </>
  )
}

export default Home