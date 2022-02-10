import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className='auth animate__animated animate__fadeIn'>

            <header>
                <img src="https://cdn-icons-png.flaticon.com/512/2809/2809590.png" 
                    alt="movie-logo"
                    className='me-4'/>
                <h1>Movies App</h1>
            </header>

            <Switch>
                <Route 
                exact
                path="/auth/login"
                component={ LoginScreen }/>

                <Route 
                exact
                path="/auth/register"
                component={ RegisterScreen }/>

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    );
};
