import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header} >
            <NavLink to={"/"} exact className={classes.enlace} activeClassName={classes.enlace_activo}>
                Home
            </NavLink>
            <NavLink to={"/about"} exact className={classes.enlace} activeClassName={classes.enlace_activo}>
                About
            </NavLink>
        </div>
    )
}

export default Header;