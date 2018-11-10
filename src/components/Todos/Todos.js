import React, { Component } from 'react';
import classes from './Todos.module.css';
import axios from 'axios';
import Empleado from '../Empleado/Empleado';

class Todos extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            empleados: []
        }
    }

    componentDidMount() {
        this.cargarEmpleados();
    }

    cargarEmpleados = () => {
        axios.get('https://randomuser.me/api/?results=9')
        //en lugar de:
        //.then(function (response) {
        //se usa la arrow function para arreglar this
        .then( (response) => {
            // handle success
            let datos = response.data.results;
            this.setState({ empleados: datos });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }


    render () {
        let empleados = this.state.empleados.length > 0 ?
        this.state.empleados.map((emp, index) => {
            return <Empleado key={index} empl={emp} />;
        }): <p>cargando</p>

        return (
            <div className={classes.todos} >
                {empleados}
            </div>
        );
    }
}

export default Todos;
