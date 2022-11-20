import React, { useEffect, useState } from 'react'
import { fetchAllPatients } from '../api'

function ClientList() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        async function fetchClients() {
            try {
                await fetchAllPatients()
                    .then((result) => {
                        // console.log(result)
                        setClients(result.patients)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchClients()
    }, [])

    //FIND WAY TO END INFINITE RE-RENDERING.

    const mappedClients = clients.map((x) => {
        return (
            <div draggable className='bg-softgray mb-1 p-2 min-w-full text-center' id='clientDropCard'>
                <h3>{x.name}</h3>
            </div>
        )
    })
    // console.log(clients)



    return (
        <div className='self-end px-5 pt-2 mr-10 mt-2 text-center' id='clientDropDownList'><h2 className='text-xl font-bold underline'>Client List</h2>
            <div className='flex flex-col justify-center items-center'>{mappedClients}</div>

        </div>


    )
}

export default ClientList