import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return <div className={styles.navBar}>
        <ul className={styles.navBarInner + ' container'}>
            <li><NavLink to={'/news'}>News</NavLink></li>
            <li><NavLink to={'/matches'}>Matches</NavLink></li>
            <li><NavLink to={'/results'}>Results</NavLink></li>
            <li><NavLink to={'/events'}>Events</NavLink></li>
        </ul>
    </div>
}

export default NavBar;