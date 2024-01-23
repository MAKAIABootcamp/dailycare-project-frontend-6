import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import { getPlaylist } from '../../helpers/getSpotifyPlaylist'
import enfoqueImage from '../../assets/images/w-meditation.png'
import vueltaImage from '../../assets/images/m-meditation.png'
import yogaImage from '../../assets/images/woman-yoga.png'
import basicosImage from '../../assets/images/basicos-meditacion.png'
import estresImage from '../../assets/images/reducir-estres.png'
import playImage from '../../assets/images/playImage.png'
import './styles.sass'
import { getData } from '../../store/content/contentThunks'
import { useDispatch, useSelector } from 'react-redux'
import { getDataFromSuggestedContent } from '../../store/suggestedContent/suggestedContentThunks'


const ExploreActivity = () => {
  const [playlist, setPlaylist] = useState()
  const { content } = useSelector((store) => store.content)
  const { suggestedContent } = useSelector((store) => store.suggestedContent)
  const dispatch = useDispatch()

  const { category } =  useParams()

  const navigate = useNavigate()

  const goToHome = () => navigate('/home')
  const goToActivity = ( id ) => {
    navigate(`/reading-detail/${id}`)
  }
  
  useEffect(() => {
      getPlaylist()
        .then(response => setPlaylist(response))
    }, [])

  useEffect(() => {
    dispatch(getData(category))
  }, [])

  useEffect(() => {
    dispatch(getDataFromSuggestedContent(category))
  }, [])

  console.log(suggestedContent[0].exercise)

  return (
    <main className='main-explore'>
      <button className='content-detail__back-button m-3' onClick={() => goToHome()}>
        <FaChevronLeft />
      </button>
      <div className='container3'>
        <div className='container3__title'>
          <h1>Explorar Actividad</h1>
        </div>
        <section className='container3__activity__A'>
          <div className='container3__activity__A__nivel1'>
            {/* <div className='container3__activity__A__nivel1__X'>
              <div className='container3__activity__A__nivel1__X--efectoiconos'>
                <img className='line1'src={enfoqueImage} alt='' />
              </div>
              <div className='line2'>
                <p className='line3'>Enfoque</p>
              </div>
            </div>
            <div className='container3__activity__A__nivel1__X'>
              <div className='container3__activity__A__nivel1__X--efectoiconos'>
                <img className='line1' src={vueltaImage} alt='' />
              </div>
              <div className='line2'>
                <p className='line3'>Vuelta a la calma</p>
              </div>
            </div>
            <div className='container3__activity__A__nivel1__X'>
              <div className='container3__activity__A__nivel1__X--efectoiconos'>
                <img className='line1' src={yogaImage} alt='' />
              </div>
              <div className='line2'>
                <p className='line3'>Relajación</p>
              </div>
            </div> */}
            {
              suggestedContent[0].exercise.map((item, index) => (
                <div className='container3__activity__A__nivel1__X' key={index}>
                  <div className='container3__activity__A__nivel1__X--efectoiconos'>
                    <img className='line1 suggested-image'src={item.image} alt='' />
                  </div>
                  <div className='line2'>
                    <p className='line3'>{item.name}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <div className='container3__subtitle'>
          <h2>Ejericios básicos</h2>
        </div>
        <section className='container3__activity__B'>
          <div className='container3__activity__B__nivel2'>
            {
              content.map((item, index) => (
                <div 
                  className='container3__activity__B__nivel2__Y rounded-lg' 
                  key={index}
                  onClick={() => goToActivity(item.id)}
                >
                  <img className='container3__activity__B__nivel2__Y--line4 basic-card-image rounded-xl' src={item.cardImage} alt='admin' />
                  <p className='container3__activity__B__nivel2__Y--line5'>{item.title}</p>
                </div>
              ))
            }
          </div>
        </section>
        <section className='container3__activity__C'>
          <div className='container3__activity__C__nivel1'>
            <div className='container3__activity__C__nivel1__Z--line6 playlist-image-container'>
              <img src={playlist?.items[9].images[0].url} alt='' />
            </div>
            <div className='container3__activity__C__nivel1__Z'>
              <a href={playlist?.items[9].external_urls?.spotify} target='_blank' rel='noopener noreferrer'>
                <img className='container3__activity__C__nivel1__Z--line7' src={playImage} alt='' />
              </a>
              <div className='container3__activity__C__nivel1__Z--line8'>
                <h3>{playlist?.items[9]?.name}</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ExploreActivity
