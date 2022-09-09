import React from "react";
import { Link } from "react-router-dom"

import styles from './index.css'

const NavButton = function (props) {
    return (
        <Link to={props.url}>
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