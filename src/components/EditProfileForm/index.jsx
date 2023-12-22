import { FaRegUser, FaRegHeart  } from 'react-icons/fa6'
import { MdModeEdit, MdOutlineLock } from 'react-icons/md' 
import { TbTargetArrow } from 'react-icons/tb'

const EditProfileForm = () => {
  return (
    <>
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
    </>
  )
}

export default EditProfileForm
