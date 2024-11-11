import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { LuContact } from 'react-icons/lu';
import { MdEmail, MdPassword } from 'react-icons/md';
import { getFullName } from '../consts';

const UserCard = ({ user }) => {
    const [fieldName, setFieldName] = useState("");

    return (
        <div className='w-[300px] h-[330px] bg-red-500 shadow rounded relative'>
            <div className="w-full h-20 border-b"></div>
            <img
                className='absolute top-6 left-[100px] rounded-full p-1 bg-white border-black'
                width={100}
                src={user?.picture?.large}
                alt={getFullName(...Object.values(user.name))} />

            <div className='w-full min-h-[200px] max-h-[250px] flex flex-col justify-evenly items-center mt-10'>
                <div className="w-full flex flex-col justify-end text-gray-50 items-center">
                    Hi, My name is
                    <h2 className='text-xl font-bold text-white'>{getFullName(...Object.values(user.name))}</h2>
                    {
                        fieldName == "loc" && <p>{user?.location?.coordinates?.latitude}, {user?.location?.coordinates?.longitude}</p>
                    }

                    {
                        fieldName == "email" && <p>{user.email}</p>
                    }

                    {
                        fieldName == "contact" && <p>{user.phone}</p>
                    }

                    {
                        fieldName == "pass" && <p>{user.login.password}</p>
                    }
                </div>
                <div className="w-full flex justify-center items-center px-10">
                    <div className="w-full rounded p-3 flex justify-between items-center ">
                        <button
                            onMouseOver={() => setFieldName('loc')}
                            className={`p-3 bg-[#0f03] rounded-full ${fieldName == "loc" && "bg-[#0f0]"}`}
                        >
                            <FaLocationDot
                                size={20}
                                color='white'
                            />
                        </button>


                        <button
                            onMouseOver={() => setFieldName('email')}
                            className={`p-3 bg-[#0f03] rounded-full ${fieldName == "email" && "bg-[#0f0]"}`}
                        >
                            <MdEmail
                                size={20}
                                color='white'
                            />
                        </button>


                        <button
                            onMouseOver={() => setFieldName('contact')}
                            className={`p-3 bg-[#0f03] rounded-full ${fieldName == "contact" && "bg-[#0f0]"}`}
                        >
                            <LuContact
                                size={20}
                                color='white'
                            />
                        </button>

                        <button
                            onMouseOver={() => setFieldName('pass')}
                            className={`p-3 bg-[#0f03] rounded-full ${fieldName == "pass" && "bg-[#0f0]"}`}
                        >
                            <MdPassword
                                size={20}
                                color='white'
                            />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserCard