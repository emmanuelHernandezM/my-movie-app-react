import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Menu = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );  
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">

            <div className="container-fluid">

                <Link 
                    className="navbar-brand d-flex align-items-center" 
                    to='/'>
                    <img src="https://cdn-icons-png.flaticon.com/512/2809/2809590.png" 
                        alt="movie-logo" 
                        width="30"
                        height="35" 
                        className="me-3"/>
                    <h3>Movie App</h3>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink 
                            className="nav-item nav-link"
                            to="/now_playing">
                            En Cines
                        </NavLink>
                        <NavLink 
                            className="nav-item nav-link"
                            to="/populars">
                            Populares
                        </NavLink>
                        <Link 
                            className="nav-item nav-link ms-lg-5 disabled"
                            to='/'>
                            <i className="fa-solid fa-user me-2"></i>
                            { name }
                        </Link>
                        <li 
                            className="nav-item nav-link active text-danger ms-lg-2"
                            onClick={ handleLogout }>
                            <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                            Cerrar Sesión 
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};