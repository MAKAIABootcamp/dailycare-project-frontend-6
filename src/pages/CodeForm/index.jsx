import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { loginWithPhoneCodeAsync } from "../../store/users/userThunks"
import Swal from 'sweetalert2'

const CodeForm = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const { isAuthenticated, error } = useSelector(( store ) => store.user)
  const navigate = useNavigate()

  const login = (data) => {
    console.log(data)
    dispatch(loginWithPhoneCodeAsync(data.code))
    if(isAuthenticated && !error){
        Swal.fire({
            title: '¡Bienvenido/a!',
            text: `Código válido. Inicio de sesión exitoso.`,
            icon: 'success'
        })
        .then(() => navigate('/home'))
    }else{
        Swal.fire({
            title: '¡Oops!',
            text: `Algo salió mal. Vuelve a intentarlo.`,
            icon: 'error'
        })
    }
  }

  return (
    <main>
      <h1 className='text-3xl font-bold underline my-3'>Insertar su codigo de verificación</h1>
      <form
        className='grid justify-start'  
        onSubmit={handleSubmit(login)}
      >
        <input  
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='number' 
          placeholder='ingrese su codigo de verificacion' 
          { ...register('code') }
        />
        <button
            className='bg-green-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center flex gap-2'
        >Confirmar código</button>
      </form>
      <div id='recaptcha-container'></div>
    </main>
  )
}

export default CodeForm
