import PropTypes from 'prop-types'

const Button = (props) => {
    console.log(props)
  return (
    <div>
        <button style={{backgroundColor :`${props.bgColor}`}}>{props.textInsideButton }</button>

        </div>
  )
}

Button.propTypes = {
  textInsideButton : PropTypes.string.isRequired
}

Button.defaultProps = {
  bgColor:'Green',
  textInsideButton: "Blank"
  } 
  
export default Button