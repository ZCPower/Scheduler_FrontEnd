import React, { useState, useEffect } from 'react'
import { fetchAllTechs } from '../api/index'
import EditTechCard from './EditTechCard';

function ModifyTechs() {
    //REARRANGE THIS LATER TO MOVE THIS TO TOP LEVEL AND PASS IT AS PROPS TO THIS COMPONENT AND TECH LISTS.jsx
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        async function fetchTechs() {
            try {
                await fetchAllTechs()
                    .then((result) => {
                        console.log(result)
                        setTechs(result.techs)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchTechs()
    }, [])
    //FIGURE OUT HOW TO MAKE THIS NOT LOOP INFINITELY WITH techs in there.



    const techCards = techs.map((x) => {
        return (
            <EditTechCard id={x.id} name={x.name} rbt={x.rbt} trainer={x.trainer} training={x.training} tricare={x.tricare} />
        )
    })


    return (
        <div><h2 className='text-2xl font-bold text-center mb-5'>Modify Techs</h2>
            <div className='flex gap-x-2 justify-center'>
                {techs.length > 0 ? { techCards } : 'No techs in the database!'}
            </div>
        </div>
    )
}

export default ModifyTechs