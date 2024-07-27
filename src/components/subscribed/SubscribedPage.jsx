import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/ContextProvider'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from '../../api/axios'
import Colors from '../../utils/Colors'
import SuccessSVG from '../../icons/SuccessSVG'
import QuestionSVG from '../../icons/QuestionSVG'

const SubscribedPage = () => {

  const {subscribed, setSubscribed} = useContext(AppContext)

//   const nextSubDate = ''

  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const {email} = useAuth()

  const reference = searchParams.get('reference')

      const handleSubscribed = async()=>{
          console.log('EMAIL:', email)
        //   await axios.post('/getSubscriptions/subscriptions',{email})
        await axios.get(`/getSubscriptions/${email}`)
       //  await axios.get(`/updateUserSubscriptionStatus/${email}`)
           .then(res=>{
              if(res.data[0].id){
                  setSubscribed(true)
                  userSubscriptionStatusUpdate(true)
                  console.log(res)
                  console.log(res.data[0])
              }else{
                  console.log('ERRORRRR')
                  setSubscribed(false)
                  userSubscriptionStatusUpdate(false)
              }
           }).catch(error => {
              console.log('ERROR:', error )
              alert('ERROR: Something went wrong. Please try again later')
           })
      }

      useEffect(()=>{
        if(reference){
            handleSubscribed()
            setTimeout(() => {
                // return navigate('/vip')
                window.location.href = '/vip';
            }, 3000)
          }else{
            console.log('No subscription occured')
          }
      },[])


  const userSubscriptionStatusUpdate =async(subscribedStatus)=>{
      await axios.post('/verifyUserSub/verifySubs', {email, subscribed:subscribedStatus}).then(res=>{
          console.log('updated', res)
      }).catch(error =>{
          console.log('ERRORRR:', error)
          alert('ERROR: Something went wrong. Please try again later')
      })
  }

  return (
            <div>

            <div className='flex flex-col w-screen items-center h-screen bg-amber-50'>
                <div className='flex flex-col p-4 items-center justify-center gap-7 h-64  bg-white sm:w-[75%] lg:w-[45%] w-[90%] mt-9 rounded-2xl shadow font-sen'>
                    {subscribed === true ? <><SuccessSVG color={Colors.PRIMARY} />
                        <p className='text-2xl text-center'>You have been subscribed to the Basic plan, redirecting...</p></> :
                        <><QuestionSVG color={Colors.PRIMARY} />
                            <p className='text-2xl text-center'>Processing Subscription please wait.... </p></>}
                </div>
            </div>


        </div>
  )
}

export default SubscribedPage