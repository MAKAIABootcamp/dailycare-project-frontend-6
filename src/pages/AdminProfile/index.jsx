import wallpaper from '../../assets/images/wallpaper-profile.png'
import profilePicture from '../../assets/images/profile-picture.jpg'
import Footer from '../../components/Footer'
import AdminContent from '../../components/AdminContent'
import './styles.sass'


const AdminProfile = () => {
  return (
    <main className='sign-in admin-profile'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='background wallpaper' />
      </section>
      <section className='admin-profile__picture-container'>
        <img src={profilePicture} alt='profile picture' />
      </section>
      <section className='admin-profile__contact-info'>
        <h2 className='admin-profile__contact-info--title'>Username</h2>
        <span className='admin-profile__contact-info--text'>Company name</span>
        <span className='admin-profile__contact-info--span'>Resumen</span>
      </section>
      <div className='admin-profile__progress-counter'>
        <span className='admin-profile__progress-counter--number'>60%</span>
      </div>
      <section className='sign-in__form-wrapper'>
        <AdminContent />
      </section>
      <Footer />
    </main>
  )
}

export default AdminProfile
