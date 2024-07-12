import React from 'react'
import useAuth from '../../hooks/useAuth'

const MyProfile = () => {
  const {username,email, favouriteTeam,} = useAuth()
  return (
    <div className='flex flex-col w-screen items-center h-screen bg-amber-50'>
    {/* <FlashMessages message={themessage} open={open} severity={severity} onClose={handleClose} /> */}
    <div className='flex flex-col p-4 bg-white sm:w-[75%] lg:w-[45%] w-[90%] mt-9 rounded-2xl shadow font-sen'
      >
        <div className='flex gap-3 m-4'>
          <h1 className='text-gray-400 font-bold'>Username:</h1> 
          <h1>{username}</h1> 
        </div>
        <div className='flex gap-3 m-4'>
          <h1 className='text-gray-400 font-bold'>Email:</h1> 
          <h1>{email}</h1> 
        </div>
        <div className='flex gap-3 m-4'>
          <h1 className='text-gray-400 font-bold'>Fan Club:</h1> 
          <h1>{favouriteTeam}</h1> 
        </div>
        <div className='flex gap-3 m-4'>
          <h1 className='text-gray-400 font-bold'>Account Type:</h1> 
          <h1 className='text-orange-900 font-bold'>VIP</h1> 
        </div>
        <div className='flex gap-3 m-4'>
          <h1 className='text-gray-400 font-bold'>Payment Status:</h1> 
          <h1 className='text-green-500 font-bold'>SubScribed_ Expires in 10 days</h1> 
        </div>

        <div className='flex gap-3 m-4'><h1 className='text-gray-400 font-bold hover:text-red-600 cursor-pointer'>LogOut_</h1></div>

            {/* <div className='flex mt-4 mb-4 items-center flex-col sm:flex-row gap-2'>
            <p>You Don't have an account?</p><p className='hover:text-red-500 cursor-pointer'>Register here</p>
            </div> */}
    </div>
</div>
  )
}

export default MyProfile