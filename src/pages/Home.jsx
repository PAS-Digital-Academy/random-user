import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import { API_URL, getFullName } from '../consts'

const Home = () => {
    const [user, setUsers] = useState([])
    const [resNum, setResNum] = useState(10)
    const [resGender, setResGender] = useState("")
    const [resCountry, setResCountry] = useState("");



    const searchData = () => {
        fetch(`${API_URL}?results=${resNum}&gender=${resGender}&nat=${resCountry}`)
            .then(res => res.json())
            .then(res => setUsers(res.results))
    }




    useEffect(() => {
        const makeApiCall = setTimeout(searchData, 2000);


        return () => clearTimeout(makeApiCall)

    }, [resNum, resGender, resCountry])

    return (
        <div className='w-full h-screen overflow-x-hidden overflow-y-auto bg-purple-700 p-5 grid grid-cols-6 justify-start items-start gap-y-2'>


            <div className="w-full h-16 bg-teal-500 col-span-6 rounded-md sticky top-0 z-10 p-3 flex justify-start items-center gap-x-4">
                <input
                    onChange={(e) => setResNum(e.target.value)}
                    type="number" name="user_number"
                    className='px-3 py-2 rounded bg-gray-100 text-sm outline-none'
                    placeholder='eg. 30'
                />

                <select name="user_gender"
                    onChange={(e) => setResGender(e.target.value)}
                    className='px-3 py-2 rounded bg-gray-100 text-sm outline-none'
                    id="user_gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="">All</option>
                </select>



                <select name="user_nat"
                    onChange={(e) => setResCountry(e.target.value)}
                    className='px-3 py-2 rounded bg-gray-100 text-sm outline-none'
                    id="user_nat">
                    <option value="in">India</option>
                    <option value="au">Australia</option>
                    <option value="us">USA</option>
                    <option value="gb">England</option>
                </select>





                {/* <button onClick={searchData} className='bg-blue-500 text-white px-3 py-1 shadow-md rounded'>Show</button> */}
            </div>



            {
                user.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))

            }
        </div>
    )
}

export default Home