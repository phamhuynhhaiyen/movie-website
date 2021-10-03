import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const col = props.col ? `grid-col-${props.col}` : ''
    const style = {
        gap: props.gap ? `${props.gap}rem` : '0'
    }
    const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : ''
    const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : ''
    const xsCol = props.smCol ? `grid-col-xs-${props.xsCol}` : ''

    return (
        <div className={`grid ${col} ${mdCol} ${smCol} ${xsCol}`} style={style}>
            {props.children}
        </div>
    )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    xsCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid

