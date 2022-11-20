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

    //FIGURE OUT A WAY TO MAKE IT CHECK FOR UPDATES BUT NOT CONTINUOUSLY RE-RENDER

    // console.log('techs', techs)

    // convert this to a table
    const mappedTechs = techs.map((x, key) => {
        return (
            <div className='bg-softgray mb-1 p-2 min-w-full text-center' id='clientDropCard' draggable>
                <h3>{x.name}</h3>
            </div>
        )
    })

    const techRow = techs.map((x, key) => {
        return (
            <tr>
                <td>{x.name}</td>
                <td>Empty</td>
                <td>Empty</td>
            </tr>
        )
    })

    return (
        <table
            className='ml-10 table-auto'
        >

            <tr>
                <th>Tech</th>
                <th>Morning Patient</th>
                <th>Afternoon Patient</th>
            </tr>
            {techRow}
        </table >
        // <div className='flex flex-col w-1/4 text-center'><h2 className='text-2xl font-bold underline'>Techs</h2>
        //     {mappedTechs}
        // </div>
    )
}

export default TechList