import React from 'react'

const ManagePosts = () => {
    return (
        <div className=' w-full h-screen '>

            <div className='w-full h-[12%] flex justify-between items-center'>
                <p className=' text-xl'>Hello, Admin</p>
                <button className=' text-orange-400 px-4 h-10 border-2 border-orange-400 hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white hover:border-none rounded-2xl'>Create new Post</button>
            </div>
            <div>
                <button className=' bg-[#F4E3D5] text-orange-400 rounded-l-lg px-3 py-1'>View Post</button>
                <button className=' bg-[#ED8326] text-white rounded-r-lg px-3 py-1'>Add new Post</button>
            </div>
            <div className=' w-[full] h-[15%] bg-white my-[2%] rounded-lg shadow-md'></div>
            <div className=' w-[full] h-[15%] bg-white my-[2%] rounded-lg shadow-md'></div>
            <div className=' w-[full] h-[15%] bg-white my-[2%] rounded-lg shadow-md'></div>
            <div className=' w-[full] h-[15%] bg-white my-[2%] rounded-lg shadow-md'></div>
        </div>
    )
}

export default ManagePosts