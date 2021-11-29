import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props: { name: any; value: any; className: any; onClick: any; onKeyPress: any; label: any; }) {
    const { label, value, className, onClick, onKeyPress } = props;

    return (
        <button className={`btn ${className}`} data-value={value} onClick={onClick} onKeyPress={onKeyPress}>
            {label}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onKeyPress: PropTypes.func
}
