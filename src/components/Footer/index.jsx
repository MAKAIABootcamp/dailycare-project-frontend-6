import { Link } from 'react-router-dom'
import { TbHome } from 'react-icons/tb'
import { RiUserLine } from 'react-icons/ri'
import { FiActivity } from 'react-icons/fi'
import './styles.sass'

const Footer = () => {

  return (
    <nav className='footer'>
      <Link to='/'>
        <div className='option flex flex-col justify-center items-center gap-1'>
          <TbHome />
          <span>Inicio</span>
        </div>
      </Link>
      <Link to='/activity'>
        <div className='option flex flex-col justify-center items-center gap-1'>
          <FiActivity />
          <span>Actividad</span>
        </div>
      </Link>
      <Link to='/user-profile'>
        <div className='option flex flex-col justify-center items-center gap-1'>
          <RiUserLine />
          <span>Perfil</span>
        </div>
      </Link>
    </nav>
  )
}

export default Footer
