import React from 'react'

const LogIn = () => {
    return (
        <div className='flex flex-col w-screen h-screen items-center bg-amber-50'>
            <form className='flex flex-col items-center p-4 bg-white w-2/5 mt-9 rounded-2xl drop-shadow-lg font-sen'
              >
                    <input
                        className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-2'
                        name="name"
                        placeholder="Email address"
                        style={{
                                fontFamily: 'Sen',
                                fontSize: 17,
                                width: '90%',
                                }}
                    />
                    <input
                        className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-2'
                        name="name"
                        placeholder="Password"
                        style={{
                                fontFamily: 'Sen',
                                fontSize: 17,
                                width: '90%',
                                }}
                    />
                    <button className='mt-10 h-16 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                        type='submit'
                        style={{
                            fontFamily: 'Sen',
                            fontSize: 17,
                            width: '90%',
                            }}
                        >LogIn</button>
                    <div className='flex mt-4 mb-4 flex-row gap-2'>
                    <p>You Don't have an account?</p><p className='hover:text-red-500 cursor-pointer'>Register here</p>
                    </div>
            </form>
        </div>
      )
}

export default LogIn