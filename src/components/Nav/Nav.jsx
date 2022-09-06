import React from "react";

import useButtons from '../../hooks/useButtons.jsx'

import styles from './index.css'
import NavButton from "./NavButton.jsx";



const Nav = function () {
    const labels = ['My Task', 'In Proccess', 'Completed']
    const [whoActive, setWhoActive] = new useButtons(labels, 'My Task')


    return (
        <div className={styles.wrapper}>
            {labels.map((label, index) =>
                <NavButton
                    label={label}
                    active={whoActive[index]}
                    handleClick={setWhoActive}
                />
            )}
        </div>
    )
}

export default Nav