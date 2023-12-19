import play from '../../assets/images/button-player.png'
import './styles.sass'

const PlayButton = () => {
  return (
    <button className='play-button'>
      <img src={play} alt='' />
    </button>
  )
}

export default PlayButton
