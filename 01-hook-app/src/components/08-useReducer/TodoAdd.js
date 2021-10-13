import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {


    const [{description}, handleInputChange,reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        if( description.trim().length <= 1){
            return;
        } 


        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();

    }

    return (
        <form action="" onSubmit={ handleSubmit }>
            <h3>Agregar TODO's</h3>
            <hr />
            <input className="form-control" 
                    type="text" 
                    name="description" 
                    placeholder="Aprender ..." 
                    autoComplete ="off" 
                    onChange = {handleInputChange}
                    value = {description}
            />
            <button type="submit"className="btn btn-outline-primary mt-3 w-100"> Agregar  TO-DO's</button>

        </form>
    )
}
