import wallpaper from '../../assets/images/wallpaper-profile.png'
import EditProfileForm from '../../components/EditProfileForm'
import Footer from "../../components/Footer"

const UpdateUserProfile = () => {
  return (
    <main className='sign-in user-profile'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='background wallpaper' />
      </section>
      <section className='sign-in__form-wrapper'>
        <EditProfileForm />
      </section>
      <Footer />
    </main>
  )
}

export default UpdateUserProfile
