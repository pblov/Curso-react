import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    //useEffect; cambios especificos en alguna parte del state o app. (se aplica a funciones u objetos).

    const [formState, setFormState] = useState({
        name:'',
        email:''

    });

    const handleInputChange = ({target}) => {
       // console.log(target.name); 
       // console.log(e.target.value);
       setFormState({
        ...formState,
        [target.name]: target.value
            
       });
    }

    const {name,email} = formState;

    useEffect( () => {
        //console.log('hey');
    }, []);


    useEffect( () => {
        //console.log('Formstate cambio');
    }, [formState]);

    useEffect( () => {
       // console.log('email cambio');
    }, [email]);


    return (
        <>
            <h1> useEffect </h1>
            <hr/>

            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange}/>
                <input type="text" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" value={email} onChange={handleInputChange}/>

            </div>
            
            { (name === '123') && <Message/> }


        </>
    )
}
