import React from "react";

import styles from './index.css'

const NavButton = function (props) {
    return (
        <button
            className={
                `${styles.nav}
                ${props.active ? styles.active : ''}`
            }
            onClick={() => { props.handleClick(props.label) }}
        >{props.label}</button>
    )
}

export default NavButton