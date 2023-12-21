import { Link } from 'react-router-dom'
import { FaRegUser, FaRegHeart  } from 'react-icons/fa6'
import { MdModeEdit, MdOutlineLock } from 'react-icons/md' 
import { TbTargetArrow } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'
import wallpaper from '../../assets/images/wallpaper-profile.png'
import profilePicture from '../../assets/images/profile-picture.jpg'
import './styles.sass'


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
      <Link className='close-edit'>
        <IoClose />
      </Link>
      <section className='sign-in__form-wrapper'>
        <h2 className='sign-in__form-wrapper--title'>Tu información personal</h2>
        <form className='sign-in__form-wrapper--form form'>
          <div className='form__input-label'>
            <label 
              htmlFor='name-input'
              className='form__input-label--label'
            >
              Nombre
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='name-input' className='icon'>
                <FaRegUser />
              </label>
              <input 
                type='text' 
                placeholder='Jane Doe' 
                id='name-input' 
                className='input'
              />
            </div>
          </div>
          <div className='form__input-label'>
            <label 
              htmlFor='genre-input'
              className='form__input-label--label'
            >
              Género
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='genre-input' className='icon'>
                <FaRegHeart />
              </label>
              <select name='' id='genre-input' className='input'>
                <option value=''>Femenino</option>
                <option value=''>Masculino</option>
                <option value=''>No binario</option>
                <option value=''>Agénero</option>
                <option value=''>Bigénero</option>
                <option value=''>Fluido</option>
                <option value=''>Tercer género</option>
              </select>
            </div>
          </div>
          <div className='form__input-label'>
            <label 
              htmlFor='quote-input'
              className='form__input-label--label'
            >
              Frase favorita | cómo te sientes
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='quote-input' className='icon'>
                <MdModeEdit />
              </label>
              <input 
                type='text' 
                placeholder='Mi frase favorita' 
                id='quote-input' 
                className='input'
              />
            </div>
          </div>
          <div className='form__input-label'>
            <label 
              htmlFor='goals-input'
              className='form__input-label--label'
            >
              Género
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='goals-input' className='icon'>
                <TbTargetArrow />
              </label>
              <select name='' id='goals-input' className='input'>
                <option value=''>Aliviar estrés</option>
                <option value=''>Relaciones interpersonales</option>
                <option value=''>Concentración y memoria</option>
                <option value=''>Estiramientos</option>
                <option value=''>Pensamiento creativo</option>
                <option value=''>Cominucación asertiva</option>
              </select>
            </div>
          </div>
          <div className='form__input-label'>
            <label 
              htmlFor='password-confirm-input'
              className='form__input-label--label'
            >
              Confirmar contraseña
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='password-confirm-input' className='icon'>
                <MdOutlineLock />
              </label>
              <input 
                type='password' 
                placeholder='***********' 
                id='password-confirm-input' 
                className='input'
              />
            </div>
          </div>
          <div className='form__buttons-container'>
            <button
              className='form__buttons-container--sign-in user-profile-button'
            >
              Actualizar perfil
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default UserProfile
