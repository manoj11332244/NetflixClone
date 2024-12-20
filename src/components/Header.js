import React from 'react'
import  {IoIosArrowDropdown} from 'react-icons/io'

const Header = () => {
    return (
        <div className=' py-4 z-10 absolute bg-gradient-to-b from-black flex w-[100%] items-center justify-between px-6'>
            <img className='w-56' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png' alt='NetflixLogo' />
            <div className='flex items-center'>
                <IoIosArrowDropdown className='text-white' size={'24px'}/>
                <h1 className='text-lg font-medium text-white'>Manoj</h1>
                <div className='ml-4'>
                    <button className='bg-red-800 text-white px-4 py-2 '>Logout</button>
                    <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movies</button>
                </div>
            </div>
        </div>
    )
}

export default Header