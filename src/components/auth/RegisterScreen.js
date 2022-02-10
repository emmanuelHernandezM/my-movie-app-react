import React from 'react';
import { Link } from "react-router-dom";
// Redux
import { useDispatch } from 'react-redux';
// Form Hook
import { useForm } from "../../hooks/useForm";
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    // Form Hook
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    //Destructuring 
    const { name, email, password } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('Register');
        dispatch( startRegisterWithEmailPasswordName(email, password, name) );
    }

    return (
        <form 
            className="container-form mt-5 animate__animated animate__fadeIn"
            onSubmit={ handleRegister }>
            <h2 className="text-center">Registro</h2>

            <div className="mb-3">
                <label className="form-label">
                    <i className="fa-solid fa-user me-2"></i>
                    Nombre:
                </label>
                <input 
                    type="text" 
                    className="form-control"
                    autoComplete="off"
                    required
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }/>
            </div>

            <div className="mb-3">
                <label className="form-label">
                    <i className="fa-solid fa-at me-2"></i>
                    Email:
                </label>
                <input 
                    type="email" 
                    className="form-control"
                    autoComplete="off"
                    required
                    name="email"
                    value={ email }
                    onChange={ handleInputChange }/>
            </div>

            <div className="mb-3">
                <label className="form-label">
                    <i class="fa-solid fa-key me-2"></i>
                    Password:
                </label>
                <input 
                    type="password" 
                    className="form-control"
                    autoComplete="off"
                    name="password"
                    required
                    value={ password }
                    onChange={ handleInputChange }/>
            </div>

            <button 
                type="submit" 
                className="btn btn-primary form-control mt-4 mb-3">
                    <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
                    Registrarse
            </button>

            <hr/>

            <div className="mt-3 text-center">
                <Link 
                    to="/auth/login"
                    className="text-white">
                    Ya tengo una cuenta
                </Link>
            </div>

        </form>
    );
};
