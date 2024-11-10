import React from 'react'

const UserCard = ({ name, image }) => {
    return (
        <div className='w-[300px] h-[300px] bg-red-500 shadow rounded relative'>
            <div className="w-full h-20 border-b"></div>
            <img
                className='absolute top-6 left-[100px] rounded-full p-1 bg-white border-black'
                width={100}
                src={image}
                alt={name} />

            <div className='w-full h-[220px] flex flex-col justify-evenly items-center'>
                <div className="w-full flex flex-col justify-end text-gray-50 items-center">
                    Hi, My name is
                    <h2 className='text-xl font-bold text-white'>{name}</h2>
                </div>
                <div className="w-full flex justify-center items-center px-10">
                    <div className="w-full bg-[#0003] rounded ">&nbsp;</div>
                </div>

            </div>
        </div>
    )
}

export default UserCard