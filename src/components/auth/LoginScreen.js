import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    
    // Dispatch
    const dispatch = useDispatch(); 

    // Form hook
    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = formValues;

    // HandleLogin
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password) );
    }

    // LoginGoogle
    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <form
                onSubmit={ handleLogin }
                className="container-form mt-5 animate__animated animate__fadeIn">

                <h2 className="text-center">Login</h2>

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
                        <i className="fa-solid fa-key me-2"></i>
                        Password:
                    </label>
                    <input 
                        type="password" 
                        className="form-control"
                        autoComplete="off"
                        required
                        name="password"
                        value={ password }
                        onChange={ handleInputChange }/>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary form-control mt-3 mb-2">
                        <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
                        Iniciar Sesión
                </button>

                <hr/>

                <div className="mt-2 text-center">
                    <Link 
                        to="/auth/register"
                        className="text-white">
                        Crear una cuenta
                    </Link>
                </div>

            </form>

            <div className='container-form mt-5 animate__animated animate__fadeIn'>
                <button 
                    className="btn btn-danger form-control mt-2 mb-2"
                    onClick={ handleGoogleLogin }>
                        <i className="fa-brands fa-google me-2"></i>
                        Iniciar con Google
                </button>
            </div>
        </>
    );
};