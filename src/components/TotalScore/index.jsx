import './styles.sass'

const TotalScore = () => {
  return (
    <section className='total-score'>
      <div className="total-score__items">
        <span className="total-score__items--number">1533</span>
        <span className="total-score__items--span">puntaje acumulado</span>
      </div>
      <div className="total-score__items">
        <span className="total-score__items--number">56</span>
        <span className="total-score__items--span">Actividades finalizadas</span>
      </div>
    </section>
  )
}

export default TotalScore
