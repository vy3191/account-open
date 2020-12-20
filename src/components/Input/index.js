

const Input = ({ type, className, id, name, onChange }) => {
  const [ focus, setFocus ] = React.useState(false);

  return (
    <div className={`components-input${focus && ' focus' || ''}${className && ` ${className}` ||''} `}>
      <input 
        type={ type }
        className ={ className }
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