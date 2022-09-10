import React from "react";
import { Link } from "react-router-dom";

import useButtons from '../../hooks/useButtons.jsx'
import useWatchState from "../../hooks/useWatchState.jsx";

import styles from './index.css'
import NavButton from "./NavButton.jsx";



const Nav = function () {
    const labels = ['My Task', 'In Proccess', 'Completed']
    // TODO: 等首頁元件做好，把 url 交給函式自動生成
    const url = ['/', 'inproccess', 'completed']
    const [whoActive, setWhoActive] = new useButtons(labels, 'My Task')

    // useWatchState('whoActive', whoActive)

    return (
        <div className={styles.wrapper}>
            {labels.map((label, index) =>
                <Link to={url[index]}>
                    <button
                        className={
                            `${styles.nav}
                    ${whoActive[index] ? styles.active : ''}`
                        }
                        onClick={() => { setWhoActive(label) }}
                    >{label}</button>
                </Link>
            )}
        </div>
    )
}

export default Nav