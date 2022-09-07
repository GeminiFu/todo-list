import React from "react";
import { Link } from "react-router-dom"

import styles from './index.css'

const NavButton = function (props) {

    function labelToUrl(label) {
        let newLabel = label.toLowerCase()
        newLabel = newLabel.replace(/\s/g, "")

        return newLabel
    }

    const url = labelToUrl(props.label)

    return (
        <Link to={url}>
            <button
                className={
                    `${styles.nav}
                ${props.active ? styles.active : ''}`
                }
                onClick={() => { props.handleClick(props.label) }}
            >{props.label}</button>
        </Link>
    )
}

export default NavButton