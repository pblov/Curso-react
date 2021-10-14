import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEPN } from '../../actions/auth';

export const RegisterScreen = () => {
    
    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleInputChange ] = useForm({
        name: 'Pablo',
        email: 'pablo@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name,email,password,password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if ( isFormValid() ) {
            dispatch(startRegisterWithEPN(email,password,name));
        }
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ){
            dispatch(setError('Name is required'));
            return false;
        }

        if ( !validator.isEmail(email) ){
            dispatch(setError('Email is not valid'));
            return false;
        }

        if( password !== password2 || password.length < 5){

            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }

        dispatch(removeError());

        return true;
    }

    return (
        <>
            <p className="auth__title fontNarrow">Create account</p>

            <form onSubmit={handleRegister} >

                {
                    msgError && (
                        
                        <div className="auth__alert-error"> 
                           {msgError} 
                        </div>
                    )
                }
                

                <input value={name} onChange={handleInputChange} className="auth__input" type="text" autoComplete="off" placeholder="Name" name="name" />
                <input value={email} onChange={handleInputChange} className="auth__input" type="text" autoComplete="off" placeholder="Email" name="email" />
                <input value={password} onChange={handleInputChange} className="auth__input" type="password" placeholder="Password" name="password" />
                <input value={password2} onChange={handleInputChange} className="auth__input" type="password" placeholder="Confirm password" name="password2" style = {{marginBottom:40}} />
                
                <button className="btn btn-primary mb-1" type="submit" style={{fontWeight:500}}>
                    Register
                </button>

                <Link className="link font14 " to="/auth/login">
                    Already registered?
                </Link>

               

            </form>
        </>
    )
}
