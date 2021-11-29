import React from 'react'
import PropTypes from 'prop-types'

export default function Display(props: { problem: any; answer: any }) {
    const { problem, answer } = props
    return (
        <div className="row">
            <div className="display">
                <div className="small">
                    { problem }
                </div>
                <div className="main">
                    { answer }
                </div>
            </div>
        </div>
    )
}

Display.propTypes = { 
    problem: PropTypes.string,
    answer:  PropTypes.string
}
