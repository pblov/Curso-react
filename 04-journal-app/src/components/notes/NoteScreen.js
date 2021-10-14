import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';


export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body,title } = formValues;

    

    //Almacena variable mutable que no redibuja el componente si cambia. (useRef).
    const activeId = useRef(note.id);


    useEffect(() => {
        
        if( note.id !== activeId.current ){
            reset(note);
            activeId.current = note.id;
        }
        
    }, [note,reset]);


    useEffect(() => {
        
        dispatch(activeNote(formValues.id, {...formValues}));

    }, [formValues,dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" name="title" value={title} onChange={handleInputChange} className="notes__title-input" autoComplete="off"/>
                <textarea placeholder="What happened today" value={body} name="body" onChange={handleInputChange} cols="30" rows="10" className="notes__textarea"></textarea>
                {
                    (note.url) &&
                                <div className="note__image">
                                    <img src={note.url} alt="imagen"/>
                                </div>
                }
                
            </div>
           
        </div>
    )
}
