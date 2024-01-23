import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { auth } from '../../firebase/firebaseConfig'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import Swal from 'sweetalert2'
import wallpaper from '../../assets/images/wallpaper-1.png'
import { MdLocalPhone } from 'react-icons/md'
import './styles.sass' 

function SignInWithPhone() {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()
  
  const generateRecaptch = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': () => {},
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const onSubmit = ( data ) => {
    console.log(data)
    generateRecaptch()
    const appVerifier = window.recaptchaVerifier
    sendSMS(data.phone, appVerifier)
  }

  const sendSMS = ( phone, recaptchaVerifier ) => {
    signInWithPhoneNumber(auth, `+57${phone}`, recaptchaVerifier)
      .then((response) => {
        window.confirmationResult = response
        console.log(response)
        Swal.fire({
          title: 'Excelente!',
          text: `Te enviaremos un mensaje de texto para confirmar al número celular ${phone}`,
          icon: 'success'
        })
          .then(() => navigate('/code-form'))
      })
      .catch(error => {
        console.warn(error)
        Swal.fire({
          title: '¡Oops!',
          text: 'Ha ocurrido un error, no se pudo enviar el mensaje de texto',
          icon: 'error'
        })
      })
  }

  return (
    <main className='sign-in'>
      <section className='sign-in__wallpaper-container'>
        <img src={wallpaper} alt='background image' />
      </section>
      <section className='sign-in__form-wrapper form-wrapper-phone'>
        <h2 className='sign-in__form-wrapper--title'>Inicio sesión con su número celular</h2>
        <form
          className='sign-in__form-wrapper--form form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='form__input-label'>
            <label 
              htmlFor='phone-input'
              className='form__input-label--label'
            >
              Ingrese su número de celular</label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='phone-input' className='icon'>
                <MdLocalPhone />
              </label>
              <input
                id='phone-input'
                className='input'
                type='number'
                placeholder='3101234422'
                { ...register('phone') }
              />
            </div>
          </div>
          <div className='form__buttons-container'>
            <button
              className='form__buttons-container--sign-in'
            >
              Enviar SMS
            </button>
          </div>
        </form>
      </section>
      <div id='recaptcha-container'></div>
    </main>
  )
}

export default SignInWithPhone;
