

const Input = ({ type, className, id, name, onChange }) => {
  const [ focus, setFocus ] = React.useState(false);

  const getClassName = () => [
      'components-input',
      focus && 'focus',
      className
  ].filter(v => v).join(" ")


  return (
    <div className={ getClassName() }>
      <input 
        type={ type }
        id={ id }
        name={ name || id }
        onChange = { onChange }
        onFocus = {  (e) => { setFocus(true);  } 
        }
        onBlur ={  (e) => { setFocus(false); }
        }
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;