import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createAnAccountAsync } from '../../store/users/userThunks'
import { MdOutlineMailOutline, MdOutlineLock  } from 'react-icons/md'
import { FaRegUser, FaRegHeart  } from 'react-icons/fa6'
import wallpaper from '../../assets/images/wallpaper-2.png'
import './styles.sass'

const SignUp = () => {
  const [labelStates, setLabelStates] = useState({
    'check-relieve-stress': false,
    'check-relationships': false,
    'check-stretching': false,
    'check-creative': false,
  })
  
  const dispatch = useDispatch()

  const { 
    register, 
    formState: { errors }, 
    handleSubmit,
    watch, 
    setValue
  } = useForm()

  const handleLabelClick = ( labelId ) => {
    setLabelStates((prevLabelStates) => ({
      ...prevLabelStates,
      [labelId]: !prevLabelStates[labelId]
    }))
  }

  const selectedGoals = watch('goals', [])
  const selectedRol = watch('rol')

  const handleRadioClick = ( value ) => {
    setValue('rol', value)
  }

  const handleRegister = ( registerData ) => {
    const userData = {
      name: registerData.name,
      email: registerData.email,
      gender: registerData.gender,
      category: selectedGoals,
      password: registerData.password,
      rol: registerData.rol,
      photoURL: '',
      company: 'Company LLC',
      notificationCheck: false,
      alertsCheck: false
    }
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
            <span 
              className='form__input-label--label'
            >
              Eres
            </span>
            <div className='options-group flex justify-center'>
              <div className='flex items-center justify-center'>
                <input
                  defaultChecked
                  type='radio'
                  id='rol-admin'
                  className='radio-input'
                  value='admin'
                  { ...register('rol') }
                />
                <label
                  htmlFor='rol-admin'
                  className={`radio-label ${selectedRol === 'admin' ? 'selected-radio' : ''}`}
                  onClick={() => handleRadioClick('admin')}
                >
                  Admin
                </label>
              </div>
              <div className='flex items-center justify-center'>
                <input
                  type='radio'
                  id='rol-employee'
                  className='radio-input'
                  value='employee'
                  { ...register('rol') }
                />
                <label
                  htmlFor='rol-employee'
                  className={`radio-label ${selectedRol === 'employee' ? 'selected-radio' : ''}`}
                  onClick={() => handleRadioClick('employee')}
                >
                  Empleado
                </label>
              </div>
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
          {
            selectedRol === 'employee'
            ? (<div className='form__input-label'>
              <span 
                className='form__input-label--label'
              >
                Metas de bienestar
              </span>
              <div className='options-group'>
                <div className='flex items-center justify-center'>
                  <input
                    type='checkbox'
                    id='check-relieve-stress'
                    className='check-input'
                    value='aliviar el estres'
                    { ...register('goals') }
                  />
                  <label
                    htmlFor='check-relieve-stress'
                    className='check-label'
                    style={{
                      color: labelStates['check-relieve-stress']
                        ? '#FFFFFF'
                        : '#3F615A',
                      backgroundColor: labelStates['check-relieve-stress']
                        ? '#4E7949'
                        : '#EDF1DF',
                    }}
                    onClick={() => handleLabelClick('check-relieve-stress')}
                  >
                    Aliviar el estrés
                  </label>
                </div>
                <div className='flex items-center justify-center'>
                  <input
                    type='checkbox'
                    id='check-relationships'
                    className='check-input'
                    value='relaciones interpersonales'
                    { ...register('goals') }
                  />
                  <label
                    htmlFor='check-relationships'
                    className='check-label'
                    style={{
                      color: labelStates['check-relationships']
                        ? '#FFFFFF'
                        : '#3F615A',
                      backgroundColor: labelStates['check-relationships']
                        ? '#4E7949'
                        : '#EDF1DF',
                    }}
                    onClick={() => handleLabelClick('check-relationships')}
                  >
                    Relaciones interpersonales
                  </label>
                </div>
                <div className='flex items-center justify-center'>
                  <input
                    type='checkbox'
                    id='check-stretching'
                    className='check-input'
                    value='estiramientos'
                    { ...register('goals') }
                  />
                  <label
                    htmlFor='check-stretching'
                    className='check-label'
                    style={{
                      color: labelStates['check-stretching']
                        ? '#FFFFFF'
                        : '#3F615A',
                      backgroundColor: labelStates['check-stretching']
                      ? '#4E7949'
                      : '#EDF1DF',
                    }}
                    onClick={() => handleLabelClick('check-stretching')}
                  >
                    Estiramientos
                  </label>
                </div>
                <div className='flex items-center justify-center'>
                  <input
                    type='checkbox'
                    id='check-creative'
                    className='check-input'
                    value='pensamiento creativo'
                    { ...register('goals') }
                  />
                  <label
                    htmlFor='check-creative'
                    className='check-label'
                    style={{
                      color: labelStates['check-creative']
                        ? '#FFFFFF'
                        : '#3F615A',
                      backgroundColor: labelStates['check-creative']
                        ? '#4E7949'
                        : '#EDF1DF',
                    }}
                    onClick={() => handleLabelClick('check-creative')}
                  >
                    Pensamiento creativo
                  </label>
                </div>
              </div>
              </div>)
            : <></>
          }
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
