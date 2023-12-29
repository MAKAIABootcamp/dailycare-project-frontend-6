import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { MdOutlineMailOutline, MdOutlineLock  } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa6'
import wallpaper from '../../assets/images/wallpaper-2.png'

const SignUp = () => {


  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = ( userData ) => {
    console.log(userData)

  }

  return (
    <main className='sign-in'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='' />
      </section>
      <section className='sign-in__form-wrapper'>
        <h2 className='sign-in__form-wrapper--title'>Crear cuenta</h2>
        <form 
          className='sign-in__form-wrapper--form form'
          onSubmit={handleSubmit(onSubmit)}
        >
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
                autoComplete='off'
                { ...register('name', { required: true, minLength: 3 }) }
                aria-invalid={errors.name ? 'true' : 'false'}
              />
            </div>
            {errors.name && <p className='text-rose-500' role='alert'>Campo requerido</p>}
          </div>
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
                { ...register('email', { required: true }) }
              />
            </div>
            {errors.email && <p className='text-rose-500' role='alert'>Campo requerido</p>}
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
            {errors.password && <p className='text-rose-500' role='alert'>La contraseña debe tener al menos 8 caracteres</p>}
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
                { ...register('confirmPassword', { required: true, minLength: 8 }) }
              />
            </div>
            {errors.confirmPassword && <p className='text-rose-500' role='alert'>Campo requerido</p>}
          </div>
          <div className='form__buttons-container'>
            <button
              className='form__buttons-container--sign-in'
              type='submit'
            >
              Crear cuenta
            </button>
          </div>
        </form>
        <p className='sign-in__form-wrapper--text'>¿Ya tienes cuenta? <Link to='/sign-in'>inicia sesión</Link></p>
      </section>
    </main>
  )
}

export default SignUp
