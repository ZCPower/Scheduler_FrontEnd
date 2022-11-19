import React, { useState, useEffect } from 'react'
import { fetchAllTechs } from '../api'

function TechList() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        async function fetchTechs() {
            try {
                await fetchAllTechs()
                    .then((result) => {
                        // console.log(result)
                        setTechs(result.techs)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchTechs()
    }, [])

    console.log('techs', techs)

    // convert this to a table
    const mappedTechs = techs.map((x) => {
        return (
            <div className='bg-softgray mb-1 p-2 min-w-full text-center' id='clientDropCard'>
                <h3>{x.name}</h3>
            </div>
        )
    })

    return (
        <div><h2 className='text-2xl font-bold underline'>Techs</h2>
            {mappedTechs}
        </div>
    )
}

export default TechList