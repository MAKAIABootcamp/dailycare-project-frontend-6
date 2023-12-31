import wavingHand from '../../assets/icons/waving-hand.svg'
import star from '../../assets/icons/star.svg'
import ActivityCard from '../../components/ActivityCard'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'
import './styles.sass'

const Activity = () => {
  const { user } = useSelector((store) => store.user)
  return (<>
    <main className='activity'>
      <div className='activity__hi'>
        <h3 className='activity__hi--title'>Hola, <span>{user.name}</span></h3>
        <img src={wavingHand} alt='waving hand icon' />
      </div>
      <h2 className='activity__welcome'>¡Bienvenido de nuevo!</h2>
      <section className='activity__points'>
        <div className='activity__points--icon'>
          <img src={star} alt='star icon' />
        </div>
        <div className='activity__points--points-number'>
          <span className='text'>Tus puntos</span>
          <span className='number'>2000</span>
        </div>
      </section>
      <section className='activity__cards-container'>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </section>
    </main>
    <Footer />
  </>)
}

export default Activity
