import { Link } from 'react-router-dom'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import wallpaper from '../../assets/images/wallpaper-profile.png'
import profilePicture from '../../assets/images/profile-picture.jpg'
import TotalScore from '../../components/TotalScore'
import PersonalContent from '../../components/PersonalContent'
import Footer from '../../components/Footer'
import './styles.sass'


const UserProfile = () => {

  return (
    <main className='sign-in user-profile'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='background wallpaper' />
      </section>
      <div>
        <section className='user-profile__picture-container'>
          <img src={profilePicture} alt='profile picture' />
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
        <h2 className='user-profile__contact-info--title'>Username</h2>
        <span className='user-profile__contact-info--text'>Company name</span>
        <span className='user-profile__contact-info--span'>Resumen</span>
      </section>
      <TotalScore />
      <section className='sign-in__form-wrapper'>
        <PersonalContent />
      </section>
      <Footer />
    </main>
  )
}

export default UserProfile
