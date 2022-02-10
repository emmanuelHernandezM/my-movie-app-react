import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
// Firebase
import { firebase } from "../firebase/firebase-config";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
// Components
import { MoviesScreen } from "../components/movies/MoviesScreen";
import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect( () => {

        firebase.auth().onAuthStateChanged( async (user) => {
            if(user?.uid){
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn( true )
            }
            else{
                setIsLoggedIn( false );
            }
        });

    }, [dispatch, setIsLoggedIn]);
    
    return (
        <Router>
            <div className="main">
                <Switch>
                    <Route
                        path='/auth'
                        render={ () => (
                            <PublicRoute isLogin={ isLoggedIn }>
                                <AuthRouter/>
                            </PublicRoute>
                        ) }/>
                    <Route
                        path='/'
                        render={ () => (
                            <PrivateRoute isLogin={ isLoggedIn }>
                                <MoviesScreen/>
                            </PrivateRoute>
                        ) }/>

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};
