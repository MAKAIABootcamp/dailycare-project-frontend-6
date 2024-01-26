import { useSelector } from 'react-redux'
import './styles.sass'

const TotalScore = () => {

  const { totalScoreG, doneActivities } = useSelector(store => store.activity)

  return (
    <section className='total-score'>
      <div className="total-score__items">
        <span className="total-score__items--number">{totalScoreG}</span>
        <span className="total-score__items--span">puntaje acumulado</span>
      </div>
      <div className="total-score__items">
        <span className="total-score__items--number">{doneActivities}</span>
        <span className="total-score__items--span">Actividades finalizadas</span>
      </div>
    </section>
  )
}

export default TotalScore
