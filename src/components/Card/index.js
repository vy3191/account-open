import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const Card = ({ data: {title, editPath, ...rest} })  => {
  return (
    <article className="components-card">
      <h2>{title}<Link className="edit" to={ editPath }><BsPencilSquare /></Link></h2>
      <div className="wrapper">
        { 
          /* item = [key, value] */
          Object.entries(rest).map(([key, value], idx) => (
            <p><strong>{key}</strong>&nbsp;{value}</p>
          ))
        }
  
      </div>
    </article>
  )
};

Card.propTypes = {
  data: PropTypes.object
}

export default Card
