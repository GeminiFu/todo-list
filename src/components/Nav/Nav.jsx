import React from "react";

import styles from './index.css'
import NavButton from "./NavButton.jsx";

const Nav = function() {
    const labels = ['My Task', 'In Proccess', 'Completed']
    return (
        <div className={styles.wrapper}>
            {labels.map(label => <NavButton label={label} />)}
        </div>
    )
}

export default Nav