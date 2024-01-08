import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createAnAccountAsync } from '../../store/users/userThunks'
import { MdOutlineMailOutline, MdOutlineLock  } from 'react-icons/md'
import { FaRegUser, FaRegHeart  } from 'react-icons/fa6'
import { TbTargetArrow } from 'react-icons/tb'
import wallpaper from '../../assets/images/wallpaper-2.png'

const SignUp = () => {
  
  const dispatch = useDispatch()

  const { register, formState: { errors }, handleSubmit } = useForm()

  const handleRegister = ( registerData ) => {
    const userData = {
      name: registerData.name,
      email: registerData.email,
      gender: registerData.gender,
      category: registerData.activities,
      password: registerData.password,
      photoURL: '',
      company: 'Company LLC'
    }
    console.log(userData)
    dispatch(createAnAccountAsync(userData))
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
          onSubmit={handleSubmit(handleRegister)}
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
              htmlFor='genre-input'
              className='form__input-label--label'
            >
              Género
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='genre-input' className='icon'>
                <FaRegHeart />
              </label>
              <select 
                name='gender' 
                id='genre-input' 
                className='input text-green-800'
                { ...register('gender') }
              >
                <option value='female'>Femenino</option>
                <option value='male'>Masculino</option>
                <option value='nonBinary'>No binario</option>
                <option value='agender'>Agénero</option>
                <option value='bigender'>Bigénero</option>
                <option value='fluid'>Fluido</option>
                <option value='thirdGender'>Tercer género</option>
              </select>
            </div>
          </div>
          <div className='form__input-label'>
            <label 
              htmlFor='goals-input'
              className='form__input-label--label'
            >
              Metas de bienestar
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='goals-input' className='icon'>
                <TbTargetArrow />
              </label>
              <select 
                id='goals-input' 
                className='input text-green-800'
                { ...register('activities') }
              >
                <option value='aliviar-estres'>Aliviar estrés</option>
                <option value='relaciones-interpersonales'>Relaciones interpersonales</option>
                <option value='concentracion-memoria'>Concentración y memoria</option>
                <option value='estiramientos'>Estiramientos</option>
                <option value='pensamiento-creativo'>Pensamiento creativo</option>
                <option value='comunicacion-asertiva'>Comunicación asertiva</option>
              </select>
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
                { ...register('password', { required: true, minLength: 8 }) }
              />
            </div>
            {errors.password && <p className='text-rose-500' role='alert'>La contraseña debe tener al menos 8 caracteres</p>}
          </div>
          {/* <div className='form__input-label'>
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
          </div> */}
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
