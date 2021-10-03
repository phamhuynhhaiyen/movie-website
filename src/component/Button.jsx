import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const animate = props.animate ? 'btn-animate' : ''
    return (
        <button
            className={`btn ${animate}`} onClick={props.onClick ? () => props.onClick() : null}>
            <span className="btn__txt">{props.children}</span>
            {
                props.icon ? (
                    <span className="btn__icon">
                        <i className={`${props.icon}`}></i>
                    </span>
                ) : null
            }
        </button>
    )
}

Button.propTypes = {
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onclick: PropTypes.func
}

export default Button

