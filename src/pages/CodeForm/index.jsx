import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { loginWithPhoneCodeAsync } from "../../store/users/userThunks"
import Swal from 'sweetalert2'
import wallpaper from '../../assets/images/wallpaper-1.png'

const CodeForm = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  // const { isAuthenticated, error } = useSelector(( store ) => store.user)
  // const navigate = useNavigate()

  const login = (data) => {
    dispatch(loginWithPhoneCodeAsync(data.code))
    // if(isAuthenticated && !error){
    //     Swal.fire({
    //         title: '¡Bienvenido/a!',
    //         text: `Código válido. Inicio de sesión exitoso.`,
    //         icon: 'success'
    //     })
    //     .then(() => navigate('/home'))
    // }else{
    //     Swal.fire({
    //         title: '¡Oops!',
    //         text: `Algo salió mal. Vuelve a intentarlo.`,
    //         icon: 'error'
    //     })
    // }
  }

  return (
    <main className='sign-in'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='background image' />
      </section>
      <section className='sign-in__form-wrapper form-wrapper-phone'>
        <h2 className='sign-in__form-wrapper--title'>Inserte su código de verificación</h2>
        <form
          className='sign-in__form-wrapper--form form'
          onSubmit={handleSubmit(login)}
        >
          <div className='form__input-label'>
            <label 
              htmlFor='code-input'
              className='form__input-label--label'>Ingrese su codigo de verificacion</label>
            <div className='form__input-label--wrapper'>
              <input
                id="code-input"
                className='input'
                type='number'
                placeholder='000000'
                { ...register('code') }
              />
            </div>
          </div>
          <div className='form__buttons-container'>
            <button
              className='form__buttons-container--sign-in'
            >
              Confirmar código
            </button>
          </div>
        </form>
      </section>
      <div id='recaptcha-container'></div>
    </main>
  )
}

export default CodeForm
