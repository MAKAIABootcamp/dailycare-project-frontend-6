import PropTypes from 'prop-types'
import './styles.sass'

const CategoryLabel = ({ details }) => {
  CategoryLabel.propTypes = {
    details: PropTypes.array
  }

  return (<>
    {
      details.map((item, index) => (
        <div className='category-label' key={index}>
          <span>{item}</span>
        </div>
      ))
    }
  </>)
}

export default CategoryLabel
