import React, { useEffect, useState } from 'react';

import { Calendar,momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-message-es';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { useSelector } from 'react-redux';
import { DeleteEventFab } from '../ui/DeleteEventFab';



moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {


    const dispatch = useDispatch();

    const {events,activeEvent} = useSelector(state => state.calendar);    
    const {uid} = useSelector(state => state.auth);    

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');


    useEffect(() => {
        
        dispatch(eventStartLoading());

    }, [dispatch]);


    const onDoubleClick = (e) => {
        
       
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = (e) => {
       
        dispatch( eventSetActive(e) );
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event,start,end,isSelected) => {

        

        const style = {
            backgroundColor: (uid === event.user._id) ? 'hsl(195, 100%, 27%)' : 'hsl(45, 100%, 27%)',
            borderRadius: '0px',
            opacity: 0.8,
            display:'block',
            fontSize:'14px',
            padding:'.3rem',
            color:'white'
            
        }

        return {style}

    }


    const onSelectSlot = (e) => {
        dispatch(eventClearActiveEvent());

    }

    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            messages={messages}
            eventPropGetter= {eventStyleGetter}
            onDoubleClickEvent = {onDoubleClick}
            onSelectEvent = {onSelectEvent}
            view={lastView}
            onSelectSlot={ onSelectSlot }
            selectable={true}
            onView = {onViewChange}
            components = {{
                event: CalendarEvent
            }}
            />

            <AddNewFab/>


            {
                (activeEvent) && <DeleteEventFab/> 
            }
            

            <CalendarModal/>

        </div>
    )
}
