import React, { useState } from 'react'
// import TechDropdown from './TechDropdown'
import { Link, Navigate } from 'react-router-dom';
import '../Styles/Nav.css'

function Nav() {
    const [techOpen, setTechOpen] = useState(false);
    const [clientOpen, setClientOpen] = useState(false);

    const handleTechDropdown = () => {
        setTechOpen(prevState => !prevState)
    }

    const handleClientDropdown = () => {
        setClientOpen(prevState => !prevState)
    }

    const handleTechDropLeave = () => {
        setTechOpen(false)
    }

    const handleClientDropLeave = () => {
        setClientOpen(false)
    }


    return (
        <nav className='p-1 pl-5 bg-softpurple flex w-full mb-5 justify-between items-center' id='navContainer'>
            <Link to='/schedule'><div id='logo' className='flex items-center'><h1 className='text-4xl mx-2 '>RBT Scheduler</h1> <img className='w-12 h-12 rotate-45' src='https://img.icons8.com/stickers/512/autism.png'></img></div></Link>
            <div className='flex list-none  z-10' id='navLinks'>

                <li onMouseLeave={handleTechDropLeave} className='text-xl z-10'>
                    <button className=
                        'mx-6 bg-midpurple hover:bg-darkpurple' onMouseEnter={handleTechDropdown}

                    >Mangage Techs</button>
                    {techOpen ? (
                        <ul id='techMenu' className='absolute z-10'>
                            <li> <Link to='/addTech'><button className='w-full bg-midpurple hover:bg-darkpurple'>Add Techs</button></Link></li>
                            <li><Link to='/editTechs'><button className='bg-midpurple hover:bg-darkpurple'>Edit/Remove Techs</button></Link></li>
                        </ul>
                    ) : null}
                </li>


                <li onMouseLeave={handleClientDropLeave} className='mr-5'><button className='bg-midpurple bg hover:bg-darkpurple' onMouseEnter={handleClientDropdown}>Manage Clients</button>
                    {clientOpen ? (
                        <ul className='absolute z-10'>
                            <li><Link to='addPatient'><button className='w-full bg-midpurple hover:bg-darkpurple'>Add Client</button></Link></li>
                            <li><button className='bg-midpurple hover:bg-darkpurple'>Edit/Remove Client</button></li>
                        </ul>
                    ) : null}

                </li>

            </div>
        </nav>
    )
}

export default Nav





//     < button id = "dropdownDividerButton" data - dropdown - toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type = "button" > Dropdown divider < svg class="ml-2 w-4 h-4" aria - hidden="true" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" xmlns = "http://www.w3.org/2000/svg" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg ></button >

// < !--Dropdown menu-- >
//     <div id="dropdownDivider" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
//         <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
//             <li>
//                 <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//             </li>
//             <li>
//                 <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//             </li>
//             <li>
//                 <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//             </li>
//         </ul>
//         <div class="py-1">
//             <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
//         </div>
//     </div>