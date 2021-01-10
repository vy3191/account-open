import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const Card = ({ trackEdit, data: {title, editPath,  ...rest} })  => {
  return (
    <article className="components-card">
      <h3>{title}
        <Link 
          className="edit" 
          to={ editPath } 
          onClick={ trackEdit }
        >
          <BsPencilSquare />
        </Link>
      </h3>
      <div className="wrapper">
        { 
          /* item = [key, value] */
          Object.entries(rest).map(([key, value], idx) => (
            <p key={idx}><strong>{key}</strong>&nbsp;{value}</p>
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
