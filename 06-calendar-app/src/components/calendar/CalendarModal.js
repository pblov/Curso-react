import React, { useEffect, useState } from 'react';


import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector,useDispatch } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdate } from '../../actions/events';

const now = moment().minutes(0).seconds(0).add(1,'hours');
const end1 = now.clone().add(1,'hours');

const initEvent = {
        title:'',
        notes:'',
        start: now.toDate(),
        end: end1.toDate()
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');


export const CalendarModal = () => {


    const {modalOpen} = useSelector(state => state.ui);
    const {activeEvent} = useSelector(state => state.calendar);

    const dispatch = useDispatch();

    
 
    
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd  , setDateEnd  ] = useState(end1.toDate());
    const [titleValid, setTitleValid] = useState(true);

    const [formValues, setFormValues] = useState(initEvent);

    const {notes,title,start,end } = formValues;


    useEffect(() => {
        
        if( activeEvent ){
            setFormValues( activeEvent );
        }else{
            setFormValues( initEvent );
        }

    }, [activeEvent, setFormValues])


    const handleInputChange = ({target}) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleStartDateChange = (e) => {
       setDateStart(e);
       setFormValues({
           ...formValues,
           start:e
       })
    }

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end:e
        })
     }
 


    const closeModal = () => {

        dispatch(uiCloseModal());
        dispatch(eventClearActiveEvent());
        setFormValues(initEvent);

    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
                                              
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if( momentStart.isSameOrAfter(momentEnd) ){
           return Swal.fire({
               icon:'error',
               title:'Error',
               text:'Fecha fín debe ser mayor a la fecha de inicio',
               confirmButtonColor: 'hsl(195, 100%, 27%)'
           });
        }  
        


        //Realizar grabación.
        if ( title.trim().length < 2){

            return setTitleValid(false);

        }


        if(activeEvent) {
            dispatch(eventStartUpdate(formValues));
        }else{

            dispatch( eventStartAddNew(formValues));

        }

        


        setTitleValid(true);
        closeModal();


    }


    return (
        <div>
            <Modal
                isOpen={modalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                overlayClassName="modal-fondo"
               
            >
                <div className="title-modal">
                    <h3> {(activeEvent) ? 'Editar evento' : 'Agregar evento' }  </h3>
                    <i className="fas fa-times" onClick={closeModal}></i>
                </div>
                
                <hr />
                <form onSubmit={handleSubmitForm} className="container">

                    <div className="form-group ">
                        <label>Fecha y hora inicio</label>
                        <DateTimePicker
                            onChange={handleStartDateChange}
                             value={dateStart}
                             className="form-control form-hour"
                        />
                    </div>

                    <div className="form-group ">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker
                             onChange={handleEndDateChange}
                             value={dateEnd}
                             className="form-control form-hour"
                             minDate={ dateStart }
                        />
                    </div>

                    <hr />
                    <div className="form-group">
                        <label>Título</label>
                        <input 
                            type="text" 
                            className={`form-control ${!titleValid && 'is-invalid'}`}
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={title}
                            onChange={handleInputChange}
                        />
                        
                        { (titleValid) ? <small id="emailHelp" className="form-text text-muted">Una descripción corta</small> 
                                       : <small id="emailHelp" className="form-text text-muted notvalid">Título debe ser de largo mayor a 2</small> }
                    </div>

                    <div className="form-group">
                        <label>Notas</label>
                        <textarea 
                            type="text" 
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={notes}
                            onChange={handleInputChange}
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block btnModalSave"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>

            </Modal>

            
        </div>
    )
}
