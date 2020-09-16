import React from 'react'
import PropTypes from 'prop-types'

export default function Option(props){
    return (
        <options key={props.key}value={props.value}>{props.value}</options> 
    )
}

Option.propTypes = {
    value: PropTypes.string,
    key: PropTypes.number
}