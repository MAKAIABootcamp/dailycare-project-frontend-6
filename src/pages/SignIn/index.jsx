import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginWithEmailAndPassword, loginWithGoogle } from '../../store/users/userThunks'
import { MdOutlineMailOutline, MdOutlineLock  } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import wallpaper from '../../assets/images/wallpaper-1.png'
import './styles.sass'

const SignIn = () => {

  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm()


  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle())
    navigate('/home') /* Provicional mientras estan implementadas las rutas protegidas */
  }


  const handleLoginWithEmailAndPassword = ( userData ) => {
    console.log(userData)
    dispatch(loginWithEmailAndPassword(userData))
    navigate('/home') /* Provicional mientras estan implementadas las rutas protegidas */
  }

  return (
    <main className='sign-in'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='background image' />
      </section>
      <section className='sign-in__form-wrapper'>
        <h2 className='sign-in__form-wrapper--title'>Iniciar sesión</h2>
        <form 
          className='sign-in__form-wrapper--form form'
          onSubmit={handleSubmit(handleLoginWithEmailAndPassword)}
        >
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
                autoComplete='off'
                { ...register('email', { required: 'Correo electrónico requerido' }) }
                aria-invalid={errors.email ? 'true' : 'false'}
              />
            </div>
            {errors.email && <p className='text-rose-500' role='alert'>{errors.email.message}</p>}
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
                { ...register('password', { required: true, minLength: 8 }) }
                />
            </div>
            {errors.password && <p className='text-rose-500' role='alert'>La contraseña debe tener al menos 8 caracteres</p> }
          </div>
          <div className='form__buttons-container'>
            <button
              className='form__buttons-container--sign-in'
              type='submit'
            >
              Iniciar sesión
            </button>
            <button
              className='form__buttons-container--google flex'
              onClick={() => handleLoginWithGoogle()}
            >
              <span>Google</span>
              <span>
                <FcGoogle />
              </span>
            </button>
            <button
              className='form__buttons-container--phone'
              onClick={() => navigate('/sign-in-phone')}
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
