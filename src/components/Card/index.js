import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const Card = ({ data: {title, editPath, ...rest} })  => {
  console.log('rest>>>>', rest);
  return (
    <article className="components-card">
      <h2>{title}<Link className="edit" to={ editPath }><BsPencilSquare /></Link></h2>
      <div className="wrapper">
        
  
      </div>
    </article>
  )
};

Card.propTypes = {
  data: PropTypes.object
}

export default Card
