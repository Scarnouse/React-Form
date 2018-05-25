import React, { Component } from 'react';
import FormRow from "./FormRow";
import "./Form.css";

class Form extends Component {
    constructor() {
        super();
        
        this.state = {
            labelLegend: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        let name = this.refs.name.getValue();
        let surname = this.refs.surname.getValue();
        let email = this.refs.email.getValue();
        let password = this.refs.password.getValue();
        let confirm_password = this.refs.confirm_password.getValue();

        if(password === confirm_password) {
            this.setState({labelLegend : "Password correcto"});
        } else {
            this.setState({labelLegend: "Password incorrecto"});
        }
    }

    render() {
        return (
            <div className="Form">
                
                <form onSubmit={this.onSubmit} className="Form-form">
                    <h2 className="Form-title">Registro</h2>
                    <FormRow 
                        inputType="text"
                        labelText="Nombre"
                        ref="name"
                        isRequired={true}
                    />

                    <FormRow 
                        inputType="text"
                        labelText="Apellidos"
                        ref="surname"
                        isRequired={true}
                    />

                    <FormRow 
                        inputType="email"
                        labelText="Email"
                        ref="email"
                        isRequired={true}
                    />

                    <FormRow 
                        inputType="password"
                        labelText="Password"
                        ref="password"
                        isRequired={true}
                    />

                    <FormRow 
                        inputType="password"
                        labelText="Confirmar password"
                        ref="confirm_password"
                        isRequired={true}
                    />

                    <button onClick={this.onSubmit} className="Form-button">Registro</button> 
                    <label className="Form-labelLegend">{ this.state.labelLegend }</label>
                </form>
            </div>
        )
    }
}

export default Form;