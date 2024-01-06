import PersonalContentCard from '../PersonalContentCard'
import creative from '../../assets/images/creative.jpg'
import memory from '../../assets/images/memory.jpg'
import stretch from '../../assets/images/stretch.jpg'
import comunication from '../../assets/images/comunication.jpg'
import './styles.sass'


const PersonalContent = () => {
  return (
    <section className='personal-content'>
      <nav className='personal-content__options'>
        <ul className='personal-content__options--list'>
          <li 
            className='item'
          >
            <img className='thumbnail' src={memory} alt='thumbnail picture' />
            <span>Concentración y memoria</span>
          </li>
          <li 
            className='item'
          >
            <img className='thumbnail' src={comunication} alt='thumbnail picture' />
            <span>Comunicación asertiva</span>
          </li>
          <li 
            className='item'
          >
            <img className='thumbnail' src={stretch} alt='thumbnail picture' />
            <span>Estiramientos</span>
          </li>
          <li 
            className='item'
          >
            <img className='thumbnail' src={creative} alt='thumbnail picture' />
            <span>Pensamiento creativo</span>
          </li>
        </ul>
      </nav>
      <div className='personal-content__card-container'>
        <PersonalContentCard />
        <PersonalContentCard />
        <PersonalContentCard />
        <PersonalContentCard />
        <PersonalContentCard />
        <PersonalContentCard />
        <PersonalContentCard />
        <PersonalContentCard />
        <PersonalContentCard />
        <PersonalContentCard />
      </div>
    </section>
  )
}

export default PersonalContent
