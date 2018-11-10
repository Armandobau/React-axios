import React from 'react';
import classes from './Empleado.module.css';

const Empleado = (props) => {

 

    return (
        <div className={classes.empleado} >
            <img src={props.empl.picture.large} alt="picture" />
            <p>{props.empl.name.first}</p>
            <p>{props.empl.phone}</p>
        </div>
    )
}

export default Empleado;