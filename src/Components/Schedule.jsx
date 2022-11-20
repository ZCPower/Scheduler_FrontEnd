import React from 'react'
import TechList from './TechList'
import ClientList from './ClientList'

function Schedule() {
    return (
        <div id='schedulerContainer' className='flex justify-between'>
            <TechList />
            <ClientList />
        </div>
    )
}

export default Schedule