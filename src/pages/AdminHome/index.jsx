import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import wallpaper from '../../assets/images/wallpaper-profile.png'
import TotalScore from '../../components/TotalScore'
import Footer from '../../components/Footer'
import face from '../../assets/images/face.png'
import PersonalContent from '../../components/PersonalContent'
import { useSelector, useDispatch } from 'react-redux'
import './styles.sass'
import { getAllUsers } from '../../store/admin/adminThunks'


const AdminHome = () => {
  const dispatch = useDispatch()
  const user ={name: "Julián Barberi"}
  useEffect(()=> {
    dispatch(getAllUsers())
  }, [])

  const { users } = useSelector((store) => store.admin)

  return (
    <main className='main-adminhome'>
      <div className="container">
        <div>
          <section className='container__picture-container'>
            <img src={user.photoURL} alt='container__img' />
          </section>
          <Link 
            className='flex gap-3 items-center edit-profile'
            to='/edit-profile'
          >
            <MdOutlineModeEditOutline />
            <span>Editar perfil</span>
          </Link>
        </div>
        <section className='user-profile__contact-info'>
          <h2 className='user-profile__contact-info--title'>{user.name}</h2>
          <span className='user-profile__contact-info--text'>Company name</span>
          <span className='user-profile__contact-info--span'>Resumen</span>
        </section>
        { users?.map(item => 
          <section className='sign-in__form-wrapper'>
            <article className='personal-content-card'>
                <img className='personal-content-card__image' src={face} alt="" />
                <div className='personal-content-card__bar'></div>
                <div className='personal-content-card__description'>
                    <h3 className='personal-content-card__description--title'>{item.name}</h3>
                    <p className='personal-content-card__description--text'>{item.rol}</p>
                </div>
            </article>
            <article className='personal-content-card'>
              <img className='personal-content-card__image' src={face} alt="" />
              <div className='personal-content-card__bar'></div>
              <div className='personal-content-card__description'>
                <h3 className='personal-content-card__description--title'>Escucha activa</h3>
                <p className='personal-content-card__description--text'>Practica la escucha activa, intenta escuchar, y luego repetir y resumir.</p>
              </div>
            </article>
          </section>
        )}
      </div>
    </main>
  )
}

export default AdminHome

