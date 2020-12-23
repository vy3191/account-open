import React from 'react'

function AOButton(props) {
  const { buttonType, buttonText, className, onClick, styleType} = props;

  const getButtonClassNames = [
    'components-ao-button', 
    styleType, 
    className
  ].filter( v => v).join(" ");

  return (
    <button
      className={getButtonClassNames}
      type={buttonType}
      onClick={ onClick }
    >
      {buttonText}      
    </button>
  )
}

AOButton.defaultProps = {
  styleType: 'primary',
  buttonType: 'text'
}

AOButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  styleType: PropTypes.string

}

export default AOButton;
