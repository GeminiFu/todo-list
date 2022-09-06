import React from "react";

import styles from './index.css'

const NavButton = function(props) {
    function handleClick(e) {
        e.preventDefault()

        console.log(e)
    }

    return (
        <button className={styles.nav} onClick={handleClick}>{props.label}</button>
    )
}

export default NavButton