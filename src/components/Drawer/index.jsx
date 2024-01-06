import { Drawer } from 'antd'
import { IoNotificationsOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaRegClock } from 'react-icons/fa6'
import { LuShieldCheck } from 'react-icons/lu'
import NotificationsModal from '../NotificationsModal'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../../store/users/userThunks'
import './styles.sass'


const DrawerAntD = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goTo = () => navigate('/reminders-view')

  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className='menuContainer' onClick={showDrawer}>
        <img src='src/assets/icons/menu.svg' alt='Hamburger Menu' />
      </div>
      <Drawer
        placement='right'
        onClose={onClose}
        open={open}
      >
        <div className='buttons-container'>
          <div className='buttons-container__main-btns'>
            <NotificationsModal />
            <button className='buttons-container__main-btns--btn-styles' onClick={() => goTo()}>
                <span className='span-btn'>
                    <label htmlFor='notification-style' className='icon'>
                        <FaRegClock />
                    </label>
                    Recordatorios
                </span>
            </button>
            <button className='buttons-container__main-btns--btn-styles'>
                <span className='span-btn'>
                    <label htmlFor='notification-style' className='icon-privacy'>
                        <LuShieldCheck />
                    </label>
                    Política de privacidad
                </span>
            </button>
          </div>
          <button 
            className='buttons-container__logout'
            onClick={() => dispatch(logoutAsync())}
          >
            Cerrar sesión
          </button>
        </div>
      </Drawer>
    </>
  )
}
export default DrawerAntD
