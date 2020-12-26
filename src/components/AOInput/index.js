import { Field } from "redux-form";
import CustomInput from './CustomInput';

const AOInput = (props) => {
  const { hint,id, label, name, typeName } = props;

  return(  
    <Field 
      name={name || id}
      component={CustomInput}
      hint={ hint }
      id={ id }
      type= { typeName }
      label= { label }
    />      
  )
}

AOInput.defaultProps = {
  typeName: "text"
}

AOInput.propTypes = {
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  typeName: PropTypes.string
}

export default AOInput;
