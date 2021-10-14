import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

  
    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'pablo@gmail.com',
        lPassword: '123456'
    });

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'Nando',
        rEmail: 'nando@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456'
    });

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const {lEmail, lPassword} = formLoginValues;


    const handleLogin = (e) => {

        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));

    }

    const handleRegister = (e) => {

        e.preventDefault();
       
        if ( rPassword1 !== rPassword2 ){
            return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
        }


        dispatch(startRegister(rEmail,rPassword1,rName));

    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3 className="fw800">Ingreso</h3>
                    <form onSubmit = { handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control fn14"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                                autoComplete="off"

                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control fn14"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                                autoComplete="off"

                            />
                        </div>
                        <div className="form-group ">
                            
                            <input 
                                type="submit"
                                className="btnSubmit  btn-block"
                                value="Login"
                                
                                
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3 className="fw700">Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="rName"
                                value={ rName }
                                onChange={handleRegisterInputChange}
                                placeholder="Nombre"

                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="rEmail"
                                value={rEmail }
                                onChange={handleRegisterInputChange}
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="rPassword1"
                                value={ rPassword1}
                                onChange={handleRegisterInputChange}
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="rPassword2"
                                value={rPassword2 }
                                onChange={handleRegisterInputChange}
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit btnCrear btn-block" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}