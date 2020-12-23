import { Field } from "redux-form";

const AOField = (props) => {
   const { componentName, id, label, name, typeName } = props;

   return(
     <div className="components-ao-field">
       {label && <label htmlFor={id}>{label}</label>}
       <div className="input-field">
         <Field 
           name={name || id}
           id={id}
           type={typeName}
           component={componentName}
         />
       </div>
     </div>
   )
}

AOField.defaultProps = {
  componentName: "input",
  type: "text"
}

AOField.propTypes = {
  componentName: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  typeName: PropTypes.string
}

export default AOField;


// const Input = ({ type, className, id, name, onChange }) => {
//   const [ focus, setFocus ] = React.useState(false);

//   const getClassName = () => [
//       'components-input',
//       focus && 'focus',
//       className
//   ].filter(v => v).join(" ")


//   return (
//     <div className={ getClassName() }>
//       <input 
//         type={ type }
//         id={ id }
//         name={ name || id }
//         onChange = { onChange }
//         onFocus = {  (e) => { setFocus(true);  } 
//         }
//         onBlur ={  (e) => { setFocus(false); }
//         }
//       />
//     </div>
//   )
// }

// Input.defaultProps = {
//   type: 'text'
// };

// Input.propTypes = {
//   className: PropTypes.string,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   onChange: PropTypes.func
// }

// export default Input;