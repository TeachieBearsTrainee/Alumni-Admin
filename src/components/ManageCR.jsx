import React from 'react'

const ManageCR = () => {
    return (
        <div className=' w-full h-screen  '>

            <div className=' w-full h-[12%] flex justify-between items-center'>
                <p className=' text-xl'>Hello, Admin</p>
                <button className=' text-orange-400 px-4 h-10 border-2 border-orange-400 hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white hover:border-none rounded-2xl'>Create new CR</button>
            </div>
            <div className=' flex h-[60%] w-full justify-between '>
                <div className='shadow-md bg-white w-[58%]  rounded-2xl'></div>
                <div className='shadow-md bg-white w-[40%]  rounded-2xl'></div>
            </div>
        </div>
    )
}

export default ManageCR