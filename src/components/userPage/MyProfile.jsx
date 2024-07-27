import React, { useContext, useEffect, useState } from 'react'
import useLogOutHook from '../../hooks/useLogOut';
import useAuth from '../../hooks/useAuth'
import { useNavigate, useSearchParams } from 'react-router-dom'
import AppContext from '../../context/ContextProvider';
import dayjs from 'dayjs';
import axios from '../../api/axios';
import FlashMessages from '../flashMessages/FlashMessages'


const MyProfile = () => {
  const {username,email, favouriteTeam,subscribed, setSubscribed } = useAuth()
  
  const [nextSubscriptionDate, setNextSubscriptionDate] =  useState(null)
  const [subscription_code, setSubscription_code] = useState(null)
  const [emailToken, setEmailToken] = useState(null)
  const [severity, setSeverity] = useState("")
  const [themessage, setMessage] = useState("")
  const [open, setOpen] = useState(false)

  const logOut = useLogOutHook()
  const navigate = useNavigate() 

  const handleLogOut = async () =>{
    try{

        const result = await logOut()
        window.location.reload();
        //navigate('/logIn')

    } catch (error){
        console.log('LogOut Failed:', error)
    }
}

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return
  }
  setOpen(false)

}


useEffect(()=>{
  if(email){
    const handleSubscribed = async()=>{
      console.log('subscription_code:', subscription_code)
    //   await axios.post('/getSubscriptions/subscriptions',{email})
    await axios.get(`/getSubscriptions/${email}`)
       .then(res=>{
        if (res.data.length === 0) {
          console.log('Data is empty');
          // Handle the case when data is empty (e.g., show a message to the user)
        } else if(res.data[0].status === 'active'){
              setNextSubscriptionDate(res.data[0].next_payment_date)
              setSubscription_code(res.data[0].subscription_code)
              setEmailToken(res.data[0].email_token)
              console.log('nextPaymentDate',res.data[0].next_payment_date)
          }else{
              console.log('ERROR GETTING NEXT BILLING DATE')
          }
    
       }).catch(error => {
          console.log('ERROR:', error )
          alert('ERROR: Something went wrong. Please try again later')
       })
    }
    handleSubscribed()
  }

},[])

const handleCancelSubscription =async()=>{
   await axios.post('/cancelSubscription/cancelSubscription',{emailToken, subscription_code, email}).then(res=>{
  //   if(res.data[0].status === 'non-renewing'){
  //     //setNextSubscriptionDate(res.data[0].next_payment_date)
  //     console.log('nextPaymentDate',res.data[0])
  // }else{
  //     console.log('SUBSCRIPTION CANCELATION ERROR')
  // }
      console.log('respoND', res)
      if(res.status == 200){
        setSeverity('success')
        setMessage('Your Basic subscription have been successfully cancelled !!!')
        setOpen(true)
        window.location.reload();
        
      }
     // console.log('SUBSCRIPTION DISABLED')

    }
   ).catch(error => {
    console.log('ERROR:', error )
    alert('ERROR: Something went wrong updating payment method')
 })
}

  return (
    <div className='flex flex-col w-screen items-center pb-96 h-screen bg-amber-50'>
    <FlashMessages message={themessage} open={open} severity={severity} onClose={handleClose} />
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
          <h1 className='text-orange-900 font-bold'>{subscribed?<p>VIP</p>:<p>Regular</p>}</h1> 
        </div>
        <div className='flex gap-3 m-4'>
          <h1 className='text-gray-400 font-bold'>Next Subscription Date:</h1> 
          {console.log('noDate', nextSubscriptionDate)}
          {/* nextSubscriptionDate.length > 0? */}
          {nextSubscriptionDate !== null?
          <h1 className='text-green-500 font-bold'>{dayjs(nextSubscriptionDate).format('dddd DD MMMM YYYY')}</h1>:
          <h1 className='text-green-500 font-bold'>You are not Subscribed</h1>
         }
          {/* SubScribed_ Expires in 10 days */}
        </div>
        {subscribed && <div className='flex gap-3 m-4'><h1 className='text-gray-400 font-bold hover:text-red-600 cursor-pointer' onClick={handleCancelSubscription}>Cancel Subscription</h1></div>}

        <div className='flex gap-3 m-4'><h1 className='text-gray-400 font-bold hover:text-red-600 cursor-pointer' onClick={handleLogOut}>LogOut_</h1></div>

            {/* <div className='flex mt-4 mb-4 items-center flex-col sm:flex-row gap-2'>
            <p>You Don't have an account?</p><p className='hover:text-red-500 cursor-pointer'>Register here</p>
            </div> */}
    </div>
</div>
  )
}

export default MyProfile