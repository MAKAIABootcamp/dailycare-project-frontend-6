import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import wallpaper from '../../assets/images/wallpaper-profile.png';
import TotalScore from '../../components/TotalScore';
import Footer from '../../components/Footer';
import face from '../../assets/images/face.png';
import PersonalContent from '../../components/PersonalContent';
import { useSelector, useDispatch } from 'react-redux';
import './styles.sass';
import { getAllUsers } from '../../store/admin/adminThunks';

const AdminHome = () => {
  const dispatch = useDispatch();
  const user = { name: 'Julián Barberi' };
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { users } = useSelector((store) => store.admin);
  const employeeUsers = users?.filter(item => item.rol === 'employee');

  return (
    <main className='main-adminhome'>
      <div>
        <h1 className="contact-title">Bienvenido</h1>
        <section className='contact__info'>
          <h2 className='contact-title2'>{user.name}</h2>
        </section>
      </div>
      <div className="container">
        <section className='container__form-wrapper'>
          {employeeUsers?.map(item => (
            <article key={item.id} className='container__content-card'>
              <img className='container__image' src={item.photoURL} alt='' />
              <div className='container__bar'></div>
              <div className='container__description'>
                <h3 className='container__description--title'>{item.name}</h3>
                <p className='container__description--text'>{item.rol}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default AdminHome;
