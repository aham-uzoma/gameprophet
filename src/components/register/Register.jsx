import axios from '../../api/axios'
import React, { useState } from 'react'
import FlashMessages from '../flashMessages/FlashMessages'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [favouriteTeam, setFavouriteTeam] = useState('')
    const [newUser, setNewUser] = useState([])
    const [severity, setSeverity] = useState("")
    const [themessage, setMessage] = useState("")
    const [open, setOpen] = useState(false)
    const [showWarining1, setShowWarning1] = useState(false)
    const navigate = useNavigate()

    const goToLogInPage=()=> navigate('/logIn')



    const handleUserName = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleFavouriteTeam = (e)=>{
        setFavouriteTeam(e.target.value)
    }

      // Validating email using regular expression
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email)
  }

    const handleSubmitUser = async(e)=>{
        e.preventDefault()
        if (username === '') {
            setSeverity("error")
            setMessage("Please Enter a username")
            setOpen(true)
          } else if (password === '') {
            setSeverity("error")
            setMessage("Please Enter a password")
            setOpen(true)
          } else if (email === "") {
            setSeverity("error")
            setMessage("Please Enter an Email")
            setOpen(true)
          } else if (!validateEmail(email)) {
            setSeverity("error")
            setMessage("Enter a valid Email Format")
            setOpen(true)
          } else if (favouriteTeam === '') {
            setSeverity("error")
            setMessage("Please Enter a favouriteTeam")
            setOpen(true)
          }else {

        const userObject = {username, password, email, favouriteTeam}
        setNewUser([...newUser, userObject])

        await axios.post('/createNewUser',{username, email, password, favouriteTeam}).then(res => {
            console.log(res)
            if (res.status === 201) {
                // alert('Registration successful.')
                console.log('Registration successful.')
                setShowWarning1(true)
                navigate('/logIn')
                
               // setIsSuccessfull(true)
            } 
        }).catch(error =>  {
          if (error.response && error.response.status === 409) {
              alert('Error: This email has been used.');
          } else {
              console.log(error);
              alert('Error: Something went wrong. Please try again later.');
          }
      })
          }}

          const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return
            }
            setOpen(false)
        
          }

  return (
    <div className='flex flex-col w-screen  items-center pb-96 bg-amber-50'> 
      <FlashMessages message={themessage} open={open} severity={severity} onClose={handleClose} />
        <form className='flex flex-col items-center p-4 bg-white sm:w-[75%] lg:w-[45%] w-[90%] mt-9 rounded-2xl drop-shadow-lg font-sen'
          >
            {showWarining1 && <div className='text-green-500 font-sans' style={{fontSize:17}}>Registration Successfull !!!</div>}
                <input
                    className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-2'
                    name="name"
                    placeholder="Your username"
                    onChange={handleUserName}
                    style={{
                            fontFamily: 'Sen',
                            fontSize: 17,
                            width: '90%',
                            }}
                />
                <input
                    className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-2'
                    name="email"
                    type='email'
                    placeholder="Email address"
                    onChange={handleEmail}
                    style={{
                            fontFamily: 'Sen',
                            fontSize: 17,
                            width: '90%',
                            }}
                />
                <input
                    className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-2'
                    name="password"
                    type='password'
                    placeholder="Password"
                    onChange={handlePassword}
                    style={{
                            fontFamily: 'Sen',
                            fontSize: 17,
                            width: '90%',
                            }}
                />
                <input
                    className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-2'
                    name="team"
                    placeholder="Your Favourite club or Team: e.g Real Madrid, Chicago Bulls, etc."
                    onChange={handleFavouriteTeam}
                    style={{
                            fontFamily: 'Sen',
                            fontSize: 17,
                            width: '90%',
                            }}
                />
                <button className='mt-10 h-16 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                    type='submit'
                    onClick={handleSubmitUser}
                    style={{
                        fontFamily: 'Sen',
                        fontSize: 17,
                        width: '90%',
                        }}
                    >Register</button>
                <div className='flex mt-4 mb-4 items-center flex-col sm:flex-row gap-2'>
                <p>You already have an account?</p>
                <p className='hover:text-red-500 cursor-pointer'onClick={goToLogInPage}>Proceed to LogIn</p>
                </div>
                
        </form>
        
    </div>
    
  )
}

export default Register