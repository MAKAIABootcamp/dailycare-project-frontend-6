import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import wallpaper from '../../assets/images/wallpaper-3.png'
import profilePicture from '../../assets/images/profile-picture.jpg'
import './styles.sass'
import EditProfileForm from '../../components/EditProfileForm'
import TotalScore from '../../components/TotalScore'
import PersonalContent from '../../components/PersonalContent'


const UserProfile = () => {
  return (
    <main className='sign-in user-profile'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='background wallpaper' />
      </section>
      <section className='user-profile__picture-container'>
        <img src={profilePicture} alt='profile picture' />
      </section>
      <section className='user-profile__contact-info'>
        <h2 className='user-profile__contact-info--title'>Username</h2>
        <span className='user-profile__contact-info--text'>Company name</span>
        <span className='user-profile__contact-info--span'>Resumen</span>
      </section>
      <TotalScore />
      <Link className='close-edit'>
        <IoClose />
      </Link>
      <section className='sign-in__form-wrapper'>
        {/* <EditProfileForm /> */}
        <PersonalContent />
      </section>
    </main>
  )
}

export default UserProfile
