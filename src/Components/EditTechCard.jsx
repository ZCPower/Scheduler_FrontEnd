import React from 'react'
import { deleteTech } from '../api/'
function EditTechCard({ id, name, rbt, trainer, training, tricare }) {

    function handleDelete() {
        deleteTech(id)
    }

    return (
        <div className='flex flex-col w-52 bg-softpurple gap-y-2'>
            <h3>{name}</h3>
            <h5>Rbt: {rbt ? 'True' : 'False'}</h5>
            <h5>Trainer: {trainer ? 'True' : 'False'}</h5>
            <h5>Training: {training ? 'True' : 'False'}</h5>
            <h5>Tricare: {tricare ? 'True' : 'False'}</h5>
            <button onClick={handleDelete}>Delete Tech</button>
            <button>Edit Tech</button>
        </div>
    )
}

export default EditTechCard