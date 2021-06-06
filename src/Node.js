import React from 'react'
import './node.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
function Node(props) {
    return (
        <div className="Noder">
            <div className="nodes">
                {props.value}
            </div>
            <div className="arrow">
                <ArrowForwardIcon />
            </div>
        </div>
    )
}

export default Node
