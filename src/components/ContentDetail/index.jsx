import { useNavigate } from "react-router";
import image from '../../assets/images/med.png'
import { FaChevronLeft } from 'react-icons/fa'
import './styles.sass'

const ContentDetail = ({ children }) => {
  const navigate = useNavigate()

    const goTo = () => navigate('/home');

  return (
    <section className='content-detail'>
      <section className='content-detail__hero-container'>
        <img className='content-detail__hero-container--image' src={image} alt='' />
      </section>
      <button className='content-detail__back-button'onClick={() => goTo()}>
        <FaChevronLeft />
      </button>
      <h1 className='content-detail__title'>Titulo de la actividad</h1>
      <section className='content-detail__content-container'>
        <div className='content-detail__content-container--background'></div>
        <div className='content-detail__content-container--content'>
          <div className='category-button-wrapper'>
            { children }
          </div>
          <div className='content-wrapper'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde, facilis hic voluptas similique quia fugiat ab quod, corrupti eaque et. Accusantium placeat blanditiis ex magni numquam aspernatur vero sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, repellendus? Veniam vitae omnis necessitatibus ducimus suscipit impedit dolores voluptatum temporibus, minima nam aliquam voluptas totam eum est perferendis error excepturi.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, repellendus? Veniam vitae omnis necessitatibus ducimus suscipit impedit dolores voluptatum temporibus, minima nam aliquam voluptas totam eum est perferendis error excepturi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde, facilis hic voluptas similique quia fugiat ab quod, corrupti eaque et. Accusantium placeat blanditiis ex magni numquam aspernatur vero sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, repellendus? Veniam vitae omnis necessitatibus ducimus suscipit impedit dolores voluptatum temporibus, minima nam aliquam voluptas totam eum est perferendis error excepturi.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, repellendus? Veniam vitae omnis necessitatibus ducimus suscipit impedit dolores voluptatum temporibus, minima nam aliquam voluptas totam eum est perferendis error excepturi.</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ContentDetail
