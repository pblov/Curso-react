import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { eventLogout } from '../../actions/events';

export const Navbar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth);
    

    const handleLogout = () => {

        dispatch( startLogout() );
        dispatch ( eventLogout() );

    }

    return (
        <div className="navbar navbar-style bg-dark mg-4">
            <span className="navbar-brand">
                {name}
            </span>
            <button className="btn btn-outline-danger ">
                <i className="fas fa-sign-out-alt fn14"></i>
                <span className="fn14" onClick={handleLogout}> Salir</span>
            </button>
        </div>
    )
}
