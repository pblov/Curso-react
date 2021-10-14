import React from 'react'
import { useDispatch } from 'react-redux';
import { eventStartDelete } from '../../actions/events';
import Swal from 'sweetalert2';
export const DeleteEventFab = () => {


    const dispatch = useDispatch();
    



    const handleDelete = () => {

        Swal.fire({
            title: '¿Deseas eliminar la actividad?',
            text: "Si confirmas, no podrás volver a obtener tu registro.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'hsl(195, 100%, 27%)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                ' ',
                'success'
              )
              dispatch(eventStartDelete());

            }
          })

        
    }

    return (
        <button className="btn btn-danger fab-danger" onClick={handleDelete} >
                <i className="fas fa-trash"></i>
        </button>
    )
}
