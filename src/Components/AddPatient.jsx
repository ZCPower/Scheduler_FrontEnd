import React, { useState } from 'react'
import { addPatient } from '../api';

function AddPatient() {
    const [name, setName] = useState('');
    const [needRbt, setNeedRbt] = useState(false);
    const [tricare, setTricare] = useState(false);
    const [trainOn, setTrainOn] = useState(false);
    const [groupable, setGroupable] = useState(false);

    function handleNameChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleNeedRbt = () => {
        setNeedRbt(!needRbt)
    }

    const handleTricare = () => {
        setTricare(!tricare)
    }

    const handleTrainOn = () => {
        setTrainOn(!trainOn)
    }

    const handleGroupable = () => {
        setGroupable(!groupable)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name, needRbt, tricare, trainOn, groupable)
        addPatient(name, needRbt, tricare, trainOn, groupable)
    }

    return (
        <form onSubmit={handleSubmit} className='border-solid border-2 border-sky-500 w-1/2 h-96 flex flex-col items-center justify-center gap-y-4 justify-self-center self-center mt-10'><h2 className='text-2xl font-bold'>Add Patient</h2>
            <input onChange={handleNameChange} className='bg-smoke p-2 text-xl my-1' placeholder='Patient Name'></input>
            < div className='flex gap-x-2 pb-2 mb-2' >

                <div className='flex flex-col'>
                    <label>Needs RBT</label><input type='checkbox' onChange={handleNeedRbt}></input>
                </div>
                <div className='flex flex-col'>
                    <label>Tricare</label><input type='checkbox' onChange={handleTricare}></input>
                </div>
                <div className='flex flex-col'>
                    <label>Train On</label><input type='checkbox' onChange={handleTrainOn}></input>
                </div>
                <div className='flex flex-col'>
                    <label>Groupable</label><input type='checkbox' onChange={handleGroupable}></input>
                </div>
            </div >
            <button className='bg-softpurple'>Submit</button>
        </form >
    )
}

export default AddPatient