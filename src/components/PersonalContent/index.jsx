import PersonalContentCard from '../PersonalContentCard'
import creative from '../../assets/images/creative.jpg'
import memory from '../../assets/images/memory.jpg'
import stretch from '../../assets/images/stretch.jpg'
import comunication from '../../assets/images/comunication.jpg'
import './styles.sass'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getData } from '../../store/content/contentThunks'


const PersonalContent = () => {
  const [category, setCategory] = useState('')
  const { content } = useSelector((store) => store.content)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData(category))
  }, [category])

  return (
    <section className='personal-content'>
      <nav className='personal-content__options'>
        <ul className='personal-content__options--list'>
          <li 
            className='item'
            onClick={() => setCategory('concentra')}
          >
            <img className='thumbnail' src={memory} alt='thumbnail picture' />
            <span>Concentración y memoria</span>
          </li>
          <li 
            className='item'
            onClick={() => setCategory('aliviar')}
          >
            <img className='thumbnail' src={comunication} alt='thumbnail picture' />
            <span>Aliviar el estrés</span>
          </li>
          <li 
            className='item'
            onClick={() => setCategory('estiramientos')}
          >
            <img className='thumbnail' src={stretch} alt='thumbnail picture' />
            <span>Estiramientos</span>
          </li>
          <li 
            className='item'
            onClick={() => setCategory('pensamiento')}
          >
            <img className='thumbnail' src={creative} alt='thumbnail picture' />
            <span>Pensamiento creativo</span>
          </li>
        </ul>
      </nav>
      <div className='personal-content__card-container'>
        {
          content.map((item, index) => (
            <PersonalContentCard key={index} details={item} />
          ))
        }
      </div>
    </section>
  )
}

export default PersonalContent
