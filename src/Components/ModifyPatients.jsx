import React, { useState, useEffect } from 'react'
import { fetchAllPatients } from '../api/'
import EditPatientCard from './EditPatientCard';

function ModifyPatients() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function fetchPatients() {
            await fetchAllPatients()
                .then((result) => {
                    console.log(result);
                    setPatients(result.patients)
                })
        }
        fetchPatients()
    }, [])

    const patientCards = patients.map((x) => {
        return (
            <EditPatientCard id={x.id} name={x.name} needsRbt={x.needsRbt} tricare={x.tricare} trainOn={x.trainOn} groupable={x.groupable} />
        )
    })

    return (
        <div><h2 className='text-2xl font-bold text-center mb-5'>Modify Patients</h2>
            <div className='flex flex gap-x-2 justify-center items-center text-center'>
                {patients.length > 0 ? patientCards : 'No patients in database!'}
            </div>
        </div>
    )
}

export default ModifyPatients