import React, { useState } from 'react'
import { addTech } from '../api';



function AddTech() {
    const [name, setName] = useState('');
    const [rbt, setRbt] = useState(false);
    const [training, setTraining] = useState(false);
    const [trainer, setTrainer] = useState(false);
    const [tricare, setTricare] = useState(false);

    function handleNameChange(e) {
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }

    function handleRbt() {
        setRbt(!rbt)
    }

    function handleTraining() {
        setTraining(!training)
    }

    function handleTrainer() {
        setTrainer(!trainer)
    }

    function handleTricare() {
        setTricare(!tricare)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTech(name, rbt, training, trainer, tricare)
    }

    // console.log(rbt, 'RBT')
    // console.log(training, 'training')
    // console.log(trainer, 'trainer')
    // console.log(tricare, 'tricare')

    console.log(name)


    return (
        <form onSubmit={handleSubmit} className='border-solid border-2 border-sky-500 w-1/2 h-96 flex flex-col items-center justify-center gap-y-2 justify-self-center self-center mt-10'>
            <h2 className='text-2xl font-bold'>Add Tech</h2>
            <input className='bg-smoke p-2 text-xl my-1' onChange={handleNameChange} required placeholder='Tech Name'></input>
            <div className='flex gap-x-4 my-2'>
                <div className='flex flex-col'><label>RBT </label><input onChange={handleRbt} type='checkbox'></input></div>
                <div className='flex flex-col'><label>Training </label><input onChange={handleTraining} type='checkbox'></input></div>
                <div className='flex flex-col'><label>Trainer </label><input onChange={handleTrainer} type='checkbox'></input></div>
                <div className='flex flex-col'> <label>Tricare </label><input onChange={handleTricare} type='checkbox'></input></div >
            </div>
            <button className='bg-softpurple text-slate-200'>Submit</button>
        </form>
    )
}

export default AddTech