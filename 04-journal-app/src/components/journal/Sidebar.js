import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {


    const dispatch = useDispatch();

    const {name} = useSelector(state => state.auth);


    const handleLogout = () => {

        dispatch( startLogout());
    }

    const handleAddNew = () => {
        
        dispatch(startNewNote());

    }
 
    
    return (
        <aside className="journal__sidebar">

            

            <div className="journal__sidebar-navbar mt-1">
                <h3 >
                    <i className="far fa-moon" style={{paddingRight:5, fontSize:16}}></i>
                    <span style={{fontSize:16,fontWeight:'bold'}}> {name} </span>
                </h3>

                <button className="journal__btn" onClick = {handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry" onClick={handleAddNew}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries/>

        </aside>
    )
}
