import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createActivityAsync } from '../../store/activity/activityThunks'
import { FaChevronLeft } from 'react-icons/fa'
import './styles.sass'


const ContentDetail = ({ children, details }) => {
  ContentDetail.propTypes = {
    details: PropTypes.object,
    children: PropTypes.object
  }
  
  const navigate = useNavigate()
  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch()

  const goTo = () => navigate('/home')

  const [btnTrigger, setBtnTrigger] = useState(true)
  const [btnColor, setBtnColor] = useState('#616161')

  const handleOnClick = () => {
    dispatch(createActivityAsync(details, user.id))
    navigate('/activity')
  }

  useEffect(() => {
    const detailsMinutes = parseInt(details.lenght.substring(0,2))
    const detailsSeconds = parseInt(details.lenght.substring(3,5))
    const time = (detailsMinutes*60 + detailsSeconds)*1000
    setTimeout(() => {
      setBtnTrigger(false)
      setBtnColor("#4E7949")
    }, 5000)
  },[])

  return (<>
    <section className='content-detail'>
      <section className='content-detail__hero-container'>
        {
          details.materialType === 'video' 
            ? <iframe className='content-detail__hero-container--image' src={details.img} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            : <img className='content-detail__hero-container--image' src={details.img} alt={details.title} />
        }
      </section>
      <button className='content-detail__back-button'onClick={() => goTo()}>
        <FaChevronLeft />
      </button>
      <section className='content-detail__content-container'>
        <div className='content-detail__content-container--content'>
          <h1 className='title'>{details.title}</h1>
          <div className='category-button-wrapper'>
            { children }
          </div>
          <div className='content-wrapper'>
            {
              details.material.map((info, index) => (
                <p key={index}>{info}</p>
              ))
            }
          </div>
        </div>
      </section>
      <button style={{backgroundColor: btnColor}} className='content-detail__check-activity' onClick={handleOnClick} disabled={btnTrigger}>Completar</button>
    </section>
  </>)
}

export default ContentDetail
