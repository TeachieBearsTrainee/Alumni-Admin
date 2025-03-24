import React from 'react'

function ManageAlumini() {
    return (
        <div className=' w-full h-screen py-[3%]'>

            <div className='w-full h-[10%] flex justify-between items-center'>
                <p className=' text-xl'>Hello, Admin</p>
                <button className=' text-orange-400 px-4 h-10 border-2 border-orange-400 hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white hover:border-none rounded-2xl'>Create new Student</button>
            </div>
            <div className='w-full h-[25%] flex  justify-between items-center'>
                <div className=' shadow-md hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] hover:text-white rounded-xl bg-white h-[74%] w-[23%] flex flex-col items-center justify-center gap-4'>
                    <p className=' '>Total</p>
                    <h1 className=' text-5xl'>60</h1>
                </div>
                <div className='shadow-md hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E]  hover:text-white rounded-xl bg-white h-[74%] w-[23%] flex flex-col items-center justify-center text-green-800 gap-4'>
                    <p className='  '>Response Verified</p>
                    <h1 className='  text-5xl'>42</h1>
                </div>
                <div className='shadow-md hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] text-yellow-500 hover:text-white rounded-xl bg-white h-[74%] w-[23%] flex flex-col items-center justify-center gap-4'>
                    <p className=' '>Response Pending</p>
                    <h1 className='  text-5xl'>12</h1>
                </div>
                <div className='shadow-md hover:bg-gradient-to-r from-[#E65E2B] to-[#F88C2E] text-red-700 hover:text-white rounded-xl bg-white h-[74%] w-[23%] flex flex-col items-center justify-center gap-4'>
                    <p className=''>Response Rejected</p>
                    <h1 className='  text-5xl'>06</h1>
                </div>
            </div>
            <div className='w-full flex gap-5'>
            <div className='shadow-md rounded-2xl bg-white w-[64%] p-6 h-auto mt-3.5'>
                <div className=' flex justify-between '>
                    <h1>Response Pending</h1>
                    <button className=' text-orange-400 h-fit'>View all</button>
                </div>
                <div className=' flex justify-between border border-gray-400 mt-5 p-4 items-center rounded-2xl '>
                    <div className='h-auto flex gap-4 '> 
                        <img src="/images/userlogo.png" alt="" />
                        <div>
                            <h3>Rajnish Manda</h3>
                            <p>Design all the screen</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <button>Accept</button>
                        <button>Reject</button>
                    </div>
                </div>
            </div>
            <div className='shadow-md rounded-2xl bg-white w-[36%] p-6 h-auto mt-3.5'>
                <img src="/images/gaugesample.png" alt="" />
            </div>
            </div>
        </div>
    )
}

export default ManageAlumini