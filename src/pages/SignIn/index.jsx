import { MdOutlineMailOutline, MdOutlineLock  } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import wallpaper from '../../assets/images/wallpaper-1.png'
import './styles.sass'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <main className='sign-in'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='' />
      </section>
      <section className='sign-in__form-wrapper'>
        <h2 className='sign-in__form-wrapper--title'>Iniciar sesión</h2>
        <form className='sign-in__form-wrapper--form form'>
          <div className='form__input-label'>
            <label 
              htmlFor='email-input'
              className='form__input-label--label'
            >
              Email
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='email-input' className='icon'>
                <MdOutlineMailOutline />
              </label>
              <input 
                type='email' 
                placeholder='example@email.com' 
                id='email-input' 
                className='input'
              />
            </div>
          </div>
          <div className='form__input-label'>
            <label 
              htmlFor='password-input'
              className='form__input-label--label'
            >
              Contraseña
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='password-input' className='icon'>
                <MdOutlineLock />
              </label>
              <input 
                type='password' 
                placeholder='***********' 
                id='password-input' 
                className='input'
              />
            </div>
          </div>
          <div className='form__buttons-container'>
            <button
              className='form__buttons-container--sign-in'
            >
              Iniciar sesión
            </button>
            <button
              className='form__buttons-container--google flex'
            >
              <span>Google</span>
              <span>
                <FcGoogle />
              </span>
            </button>
            <button
              className='form__buttons-container--phone'
            >
              <FiPhone />
            </button>
          </div>
        </form>
        <p className='sign-in__form-wrapper--text'>¿No tienes cuenta? <Link to='/sign-up'>crea una cuenta</Link></p>
      </section>
    </main>
  )
}

export default SignIn
