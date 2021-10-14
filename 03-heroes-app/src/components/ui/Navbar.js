import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

    
    const {user:{name}, dispatch} = useContext(AuthContext);
    const history = useHistory();
    
    const handleLogout = () => {


        history.replace('/login');

        const action = {
            type: types.logout,
            payload: {name:''}
        }

        dispatch(action);

        
    }

    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
            
            <Link 
                className="navbar-brand " 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="d-flex">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info navbar-collapse" style={{margin:0}}>
                        {name}
                    </span>

                    
                    <button className="btn btn-danger" id="btnLog" onClick={handleLogout}>
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}