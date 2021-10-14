import React from 'react';
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";

export const JournalEntry = ({id,date,title,body,url,note}) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();


    const handleEntryClick = () => {

        dispatch(activeNote(id,{
            date,title,body,url
        }));
    } 

    return (

        
        <motion.div  
            className="journal__entry pointer" 
            onClick = {handleEntryClick} 
            animate={{ rotate: 360 }}
  transition={{ from: 90, duration: 1 }}
        >

            {
                url &&

                <div className="journal__entry-picture " style={{backgroundSize:'cover',backgroundImage:`url(${url})`}}></div>
            }
            

            <div className="journal__entry-body">
                <p className="journal__entry-title"> {title} </p>
                <p className="journal__entry-content"> {body} </p>
            </div>
            
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd') } </span>
                <h4>{noteDate.format('Do')}</h4>
            </div>

        </motion.div>
    )
}
