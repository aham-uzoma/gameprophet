import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
// import React, { memo } from 'react';


/**
 * check if the user is logged in or not
 * this is a function that will help us protect our routes (protected Routes)
 */

const RequireAuth = ({ allowedRoles, requireSubscription = false }) => {
   const { auth, roles, subscribed, isAdmin } = useAuth()
   const location = useLocation()

   // Check for allowed roles as before
   const hasAllowedRole = roles.find(role => allowedRoles?.includes(role))

   // Additional check for vip page
   const isVipPage = location.pathname === '/vip'

   const paymentPage = location.pathname === '/payment'


   // if(auth?.roles?.find(role=>allowedRoles?.includes(role))){
   //    console.log('TRUE auth?.roles:', auth?.roles)
   // }else{
   //    console.log('FALSE auth?.roles:', auth?.roles)
   // }
   console.log('ROLES:', roles)  
   console.log('SubscribeToNavigate', subscribed)

   if (!hasAllowedRole) {
      return <Navigate to='/logIn' state={{ from: location }} replace />;
    }
  
    if (requireSubscription && !subscribed && !isAdmin) {
      return <Navigate to='/payment' state={{ from: location, message: 'Please subscribe to access this page.' }} replace />;
    }
  
    return <Outlet />;
  

   // return (

   //    hasAllowedRole && (!isVipPage || subscribed) ? <Outlet /> : <Navigate to='/logIn' state={{ from: location }} replace />

   //    //auth?.roles?.find(role=>allowedRoles?.includes(role)) && auth?.accessToken ? <Outlet /> : <Navigate to='/logIn' state={{ from: location }} replace />
   //    //  auth?.accessToken ? <Outlet /> : <Navigate to='/logIn' state={{ from: location }} replace />
   // )
}
export default RequireAuth