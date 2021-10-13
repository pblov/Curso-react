import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {


    const {dispatch} = useContext( AuthContext );
    
    const handleLogin = () => {       
        
        const lastPath = localStorage.getItem('lastPath') || '/'; //Si no existe redirecciona a esa ruta.

        const action = {
            type: types.login,
            payload:{
                name:'Pablo'
            }
        } 

        dispatch(action);
        
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-success" onClick = {handleLogin}> Ingresar </button>
        </div>
    )
}
