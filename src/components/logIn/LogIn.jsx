import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios, { axiosWithCredentials } from '../../api/axios'
import useAuth from '../../hooks/useAuth'
import FlashMessages from '../flashMessages/FlashMessages'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [severity, setSeverity] = useState("")
    const [themessage, setMessage] = useState("")
    const [open, setOpen] = useState(false)

    const navigate = useNavigate()

    const goToRegisterPage=()=> navigate('/register')


    const {setAuth} = useAuth()

    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleEmailForm = (e) =>{
       setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleSubmitLogin = (e) =>{
        e.preventDefault()
         axiosWithCredentials.post('/auth', {email, password}).then(res =>{
            const accessToken = res?.data?.accessToken
            setAuth({email, accessToken})
            alert('LogIn successful !!!')
            navigate('/vip')
            // navigate(from, {replace: true})
         }
         ).catch(
            error => {
                console.log(error)
                setSeverity('error')
                setMessage('Invalid email or password')
                setOpen(true)
            }
         )
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return
        }
        setOpen(false)
    
      }


    return (
        <div className='flex flex-col w-screen h-screen items-center bg-amber-50'>
            <FlashMessages message={themessage} open={open} severity={severity} onClose={handleClose} />
            <form className='flex flex-col items-center p-4 bg-white sm:w-[75%] lg:w-[45%] w-[90%] mt-9 rounded-2xl drop-shadow-lg font-sen'
              >
                    <input
                        className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-2'
                        name="name"
                        type='email'
                        placeholder="Email address"
                        onChange={handleEmailForm}
                        style={{
                                fontFamily: 'Sen',
                                fontSize: 17,
                                width: '90%',
                                }}
                    />
                    <input
                        className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-2'
                        name="name"
                        type='password'
                        placeholder="Password"
                        onChange={handlePassword}
                        style={{
                                fontFamily: 'Sen',
                                fontSize: 17,
                                width: '90%',
                                }}
                    />
                    <button className='mt-10 h-16 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                        type='submit'
                        onClick={handleSubmitLogin}
                        style={{
                            fontFamily: 'Sen',
                            fontSize: 17,
                            width: '90%',
                            }}
                        >{isLoading === true?<p>Loading...</p>: <p>LogIn</p>}</button>
                    <div className='flex mt-4 mb-4 items-center flex-col sm:flex-row gap-2'>
                    <p>You Don't have an account?</p><p className='hover:text-red-500 cursor-pointer'
                    onClick={goToRegisterPage}>Register here</p>
                    </div>
            </form>
        </div>
      )
}

export default LogIn