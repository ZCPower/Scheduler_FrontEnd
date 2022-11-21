import React from 'react'
import { deletePatient } from '../api';

function EditPatientCard({ id, name, needsRbt, tricare, trainOn, groupable }) {

    function handleDelete() {
        console.log('Deleting', name)
        deletePatient(id)
    }

    return (
        <div className='bg-softgray '>
            <h3>{name}</h3>
            <h5>Needs RBT: {needsRbt ? 'True' : 'False'}</h5>
            <h5>Tricare: {tricare ? 'True' : 'False'}</h5>
            <h5>Train On: {trainOn ? 'True' : 'False'}</h5>
            <h5>Groupable: {groupable ? 'True' : 'False'}</h5>
            <button onClick={handleDelete}>Delete Patient</button>
            <button>Edit Patient</button>
        </div>
    )
}

export default EditPatientCard