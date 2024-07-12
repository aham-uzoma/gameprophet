import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

/**
 * check if the user is logged in or not
 * this is a function that will help us protect our routes (protected Routes)
 */

const RequireAuth = ({allowedRoles}) => {
   const { auth, roles } = useAuth()
   const location = useLocation()

   // if(auth?.roles?.find(role=>allowedRoles?.includes(role))){
   //    console.log('TRUE auth?.roles:', auth?.roles)
   // }else{
   //    console.log('FALSE auth?.roles:', auth?.roles)
   // }
   console.log('ROLES:', roles)

   return (
      roles.find(role=>allowedRoles?.includes(role))? <Outlet /> : <Navigate to='/logIn' state={{ from: location }} replace />

      //auth?.roles?.find(role=>allowedRoles?.includes(role)) && auth?.accessToken ? <Outlet /> : <Navigate to='/logIn' state={{ from: location }} replace />
      //  auth?.accessToken ? <Outlet /> : <Navigate to='/logIn' state={{ from: location }} replace />
   )
}
export default RequireAuth