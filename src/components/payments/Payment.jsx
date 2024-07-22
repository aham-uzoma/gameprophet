import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const [plan_code, setPlan_code] = useState('')
    const [amount, setAmount] = useState(0)
    const [planName, setPlanName] = useState('') 

    //const plan_code = 'PLN_mfwpvqkkq4y38as'

    const {email} = useAuth()

    useEffect(()=>{
        const fetchASubscribtionPlans = async()=>{
            await axios.get(
                '/getAllPlans'
            ).then(res=>{
                console.log('ALL SUBSCRIPTION PLANS:', res)
                setPlan_code(res.data[0].plan_code)
                setAmount(res.data[0].amount)
                 setPlanName(res.data[0].name)
            }

            ).catch(error =>{
                console.log(error)
                alert('Error something went wrong, try again next time')
            })
        }
        fetchASubscribtionPlans() 
    },[])

    const handleSubscribeToPlan = async()=>{
        console.log('email:', email)
        
        await axios.post('/initializeSubscription',{email, amount:amount/100, plan:plan_code }).then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log('payment Initialization successful.')
                const authorization_url  = res.data.authorization_url
                 if(authorization_url){
                    window.location.href = authorization_url
                    handleSubscribed()//i guess what should be here is the function that imidately populates
                    //the user profile with data from eubscribed user; probably

                 }else{
                    console.error('Authorization URL not found in response data')
                 }


            } 
        }).catch(error =>  {
              console.log('ERROR:', error)
              alert('Error: Something went wrong. Please try again later.');
      })
    }

    const handleSubscribed = async()=>{
        console.log('EMAIL:', email)
         await axios.post('/getSubscriptions/subscriptions',{email}).then(res=>{
            console.log('Subscribed', res)
            //send sth to the user database to update the user subscribed status
            //to true or false based on paystach "active" or "non-renewing status"
            //so we might create a field in the usermodel that tracks active or non-renewing to 
            //give or restrict user access to the vip page based on subscription status.
         }).catch(error => {
            console.log('ERROR:', error )
            alert('ERROR: Something went wrong. Please try again later')
         })
    }
  

  return (
    <div className='flex flex-col w-screen pb-96 font-sen bg-amber-50'>
        {/* bg-slate-400 */}
        <div className='flex flex-col w-screen h-28  justify-center items-center'>
        <h1 className='md:text-8xl text-6xl font-bold text-orange-400'>VIP Pass</h1>
        </div>
        <div className='flex flex-col  w-screen justify-center items-center'>
            <h1 className='text-4xl text-gray-600 font-bold mb-8 mt-12'>Subscription</h1>
            <div className='flex bg-orange-400 w-[85vw] md:w-[50vw] h-[2vh] lg:w-[50vw] '></div>

            <div className='flex flex-col justify-center items-center  bg-gray-100 shadow-2xl mb-12 w-[85vw] h-[60vh] md:w-[50vw] lg:w-[50vw] lg:h-[65vh] md:h-[50vh] md:gap-5'>
            
            <h2 className='md:text-2xl text-xl font-bold text-gray-600 mb-5'>{planName}</h2>
            <h1 className='md:text-6xl text-4xl font-bold text-gray-600'>N1,500</h1>
            <p className='md:text-2xl text-xl text-gray-600'>per month</p>
            <button className='mt-20 h-16 w-60 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white' onClick={handleSubscribeToPlan}>Subscribe</button>

            </div>
            
            </div>

       
    </div>
  )
}

export default Payment