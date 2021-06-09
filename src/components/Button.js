import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button style={{backgroundColor:color} }
        onClick = {onClick}
        className="btn">{text}</button>
    )
}

Button.defaultProps = {
    color: "slateBlue",
    text : "Hello",
}

Button.propTypes = {
    text : PropTypes.string,
}
export default Button
