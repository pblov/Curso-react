import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleting, startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);


    const handleSave = () => {

      dispatch(startSaveNote(active));
    }

    const handlePictureClick = () => {

        document.querySelector('#fileSelector').click();

    }
 
    const handleFileChange = (e) =>{
        const files = e.target.files[0];
        if(files) {
           dispatch(startUploading(files));
        }
    }

    const handleDelete = () => {

        dispatch(startDeleting(active.id));
        
        
    }

    return (
        <div className="notes__appbar">
            <span>15 de julio de 2021</span>
            <input id="fileSelector" type="file" name="file" style={{display:'none'}} onChange = {handleFileChange}/>
            <div>
                <button className="btn-delete" onClick={handleDelete}>
                    Delete
                </button>
                <button className="btn1 notes__hover" onClick={handlePictureClick}>
                    Picture
                </button>
                <button className="btn1 notes__hover" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
