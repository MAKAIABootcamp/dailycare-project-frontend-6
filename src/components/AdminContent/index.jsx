import { IoMdInformationCircleOutline } from 'react-icons/io'
import './styles.sass'

const AdminContent = () => {
  return (
    <section className='admin-content'>
      <h2 className='admin-content__title'>Cuenta</h2>
      <div className='admin-content__personal-info-container'>
        <IoMdInformationCircleOutline />
        <span className='admin-content__personal-info-container--text'>Información personal</span>
      </div>
      <section className='admin-content__contact-info'>
        <div className='admin-content__contact-info--tag-wrapper'>
          <span className='tag'>Nombre(s):</span>
          <span className='name'>Name</span>
        </div>
        <div className='admin-content__contact-info--tag-wrapper'>
          <span className='tag'>Apellido(s):</span>
          <span className='name'>Name</span>
        </div>
        <div className='admin-content__contact-info--tag-wrapper'>
          <span className='tag'>Identificación:</span>
          <span className='name'>Name</span>
        </div>
        <div className='admin-content__contact-info--tag-wrapper'>
          <span className='tag'>Contrato:</span>
          <span className='name'>Name</span>
        </div>
        <div className='admin-content__contact-info--tag-wrapper'>
          <span className='tag'>Cargo:</span>
          <span className='name'>Name</span>
        </div>
        <div className='admin-content__contact-info--tag-wrapper'>
          <span className='tag'>Correo:</span>
          <span className='name'>Name</span>
        </div>
      </section>
    </section>
  )
}

export default AdminContent
