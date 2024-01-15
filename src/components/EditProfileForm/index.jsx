import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegUser, FaRegHeart  } from 'react-icons/fa6'
import { MdModeEdit, MdOutlineMailOutline } from 'react-icons/md' 
import { saveImage } from '../../helpers/uploadFile'
import profilePicture from '../../assets/images/profile-picture.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileAsync } from '../../store/users/userThunks'
import './styles.sass'

const EditProfileForm = () => {
  const [labelStates, setLabelStates] = useState({
    'check-relieve-stress': false,
    'check-relationships': false,
    'check-stretching': false,
    'check-creative': false,
  })
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [ imagePreview, setImagePreview ] = useState(profilePicture)
  const { 
    register, 
    formState: { errors }, 
    handleSubmit,
    watch
  } = useForm({
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
      photoURL: user.photoURL || ''
    }
  })

  const selectedGoals = watch('goals', [])

  const onSubmit = async ( userData ) => {
    console.log(userData)
    const file = userData.photoURL[0]
    const imageUrl = await saveImage(file)
    const newUserData = {
      ...userData,
      name: userData.name,
      photoURL: imageUrl,
      id: user.id,
      gender: userData.gender,
      category: selectedGoals,
      email: userData.email
    }
    dispatch(updateProfileAsync(newUserData))
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

  const handleLabelClick = ( labelId ) => {
    setLabelStates((prevLabelStates) => ({
      ...prevLabelStates,
      [labelId]: !prevLabelStates[labelId]
    }))
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
              placeholder={user.name ? user.name : 'Jane Doe'} 
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
          htmlFor='password-confirm-input'
          className='form__input-label--label'
          >
            Email
          </label>
          <div className='form__input-label--wrapper'>
          <label htmlFor='password-confirm-input' className='icon'>
            <MdOutlineMailOutline />
          </label>
          <input 
            type='email' 
            placeholder={user.email ? user.email : 'example@email.com' }
            id='email-input' 
            className='input'
            { ...register('email') }
          />
          </div>
          {errors.name && <p className='text-rose-500' role='alert'>Mínimo 8 caracteres</p>}
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
        </div>
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
