import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    
    const dispatch = useDispatch();

    //
    const {loading} = useSelector(state => state.ui);



    const [ formValues,handleInputChange ] = useForm({
        email: 'nana@gmail.com',
        password: '12345',
    })

    const { email,password } = formValues;

    //Manejar submit de formulario.
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    } 
    
    return (
        <>
            <p className="auth__title fontNarrow">Login</p>

            <form onSubmit={handleLogin}>

                <input value={email} onChange={handleInputChange} className="auth__input" type="text" autoComplete="off" placeholder="Email" name="email" />
                <input value={password} onChange={handleInputChange} className="auth__input" type="password" placeholder="Password" name="password" />
                
                <button className="btn btn-primary" disabled={loading} type="submit" style={{fontWeight:500}}>
                    Login
                </button>


                <div className="auth__social-networks">
                    <p className="plogin">Login with social networks</p>
                    <div className="google-btn" onClick = {handleGoogleLogin} >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text" >
                            <b style={{fontWeight:500}} >Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register">

                    Create new account
                </Link>

            </form>
        </>
    )
}
