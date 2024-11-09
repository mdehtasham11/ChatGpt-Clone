import React from 'react'
import { X, SquarePen } from "lucide-react";
import SearchBar from '../Chatoutput/SearchBar';

function SideBar( {closeSidebar, isSidebarOpen} ) {
    return (

        <div className={`h-screen w-1/6 bg-gray-800 text-white p-4 shadow-lg flex flex-col `}>
            <div className='flex flex-wrap justify-between'>
                <button onClick={closeSidebar}><X /></button>
                <button><SquarePen /> </button>
            </div>
            <div className=' w-full mt-3'> 
                <button className='hover:bg-gray-700 p-2 rounded-lg  w-full flex justify-start'> ChatGpt</button>
            </div>
            <div className='w-full mt-1'>
                <button className='hover:bg-gray-700 p-2  rounded-lg w-full flex justify-start'>Explore Gpts</button>
            </div>
            <div className='w-full mt-5 flex-1'>
                <h6 className='flex justify-start'>Today</h6>
                <button className='bg-gray-700 p-2  rounded-lg w-full flex justify-start'>Click to view chats</button>
            </div>
            <div className='w-full mt-auto '>
                <button className='hover:bg-gray-700 p-2  rounded-lg w-full flex justify-start'>Upgrade Plan</button>    
            </div>
            
        </div>

    )
}

export default SideBar