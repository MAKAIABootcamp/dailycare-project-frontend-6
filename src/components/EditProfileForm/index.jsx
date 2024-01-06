import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegUser, FaRegHeart  } from 'react-icons/fa6'
import { MdModeEdit } from 'react-icons/md' 
import { TbTargetArrow } from 'react-icons/tb'
import { saveImage } from '../../helpers/uploadFile'
import profilePicture from '../../assets/images/profile-picture.jpg'
import './styles.sass'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileAsync } from '../../store/users/userThunks'

const EditProfileForm = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [ imagePreview, setImagePreview ] = useState(profilePicture)
  // const [image, setImage] = useState(() => user.photoURL || '')
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
      photoURL: user.photoURL || ''
    }
  })

  const onSubmit = async ( userData ) => {
    console.log(userData)
    const file = userData.photoURL[0]
    const imageUrl = await saveImage(file)
    // const newUserData = {
    //   ...userData,
    //   photoURL: imageUrl
    // }
    // console.log(newUserData)
    userData.photoURL = imageUrl || user.photoURL,
    userData.id = user.id
    dispatch(updateProfileAsync(userData))
  }

  const handleImageChange = event => {
    const chosenImage = event.target.files[0]
    const imageReaderAPI = new FileReader()
    imageReaderAPI.onloadend = () => {
      setImagePreview(imageReaderAPI.result)
    }
    if (chosenImage) {
      imageReaderAPI.readAsDataURL(chosenImage)
    }
  }

  return (
    <>
      <h2 className='sign-in__form-wrapper--title'>Tu información personal</h2>
      <form 
        className='sign-in__form-wrapper--form form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='picture-wrapper'>
          <div className='profile-picture'>
            <figure className='profile-picture__image-container'>
              <img className='current-picture' src={imagePreview} alt='profile photo' />
            </figure>
            <div className='profile-picture__input-container'>
              <input 
                type="file"
                id='input-url' 
                className='profile-picture__input-container--input-image'
                { ...register('photoURL') }
                name='photoURL'
                accept='image/*'
                onChange={handleImageChange}  
              />
              <label htmlFor="input-url">Editar foto</label>
            </div>
          </div>
        </div>
        {/* <input 
          type='file' 
          { ...register('photoURL') }
        /> */}
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
              { ...register('name', { minLength: 3 }) }
              autoComplete='off'
            />
          </div>
          {errors.name && <p className='text-rose-500' role='alert'>Mínimo 3 caracteres</p>}
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
              { ...register('quote') }
              autoComplete='off'
            />
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
        {/* <div className='form__input-label'>
          <label 
            htmlFor='password-confirm-input'
            className='form__input-label--label'
          >
            ¿Quieres cambiar tu contraseña?
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
              { ...register('password', { minLength: 8 }) }
            />
          </div>
          {errors.name && <p className='text-rose-500' role='alert'>Mínimo 8 caracteres</p>}
        </div> */}
        <div className='form__buttons-container'>
          <button
            className='form__buttons-container--sign-in user-profile-button'
            type='submit'
          >
            Actualizar perfil
          </button>
        </div>
      </form>
    </>
  )
}

export default EditProfileForm
