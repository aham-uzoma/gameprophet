import { useContext, useState } from "react";
import AppContext from "../context/ContextProvider";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
    const {auth, setAuth} = useContext(AppContext)
    let isAdmin = false
    let status = "user"

    //let allowedRoles2 = [5601]


    // if(auth?.accessToken){
    //     const decoded = jwtDecode(auth?.accessToken)
    //     const {} = decoded.userInfo
    //     console.log('AUTH:', auth)
    //     console.log('DECo:', decoded)
    //     isAdmin = auth?.roles?.includes(5601)
    //     console.log('ISADMIN STATUS:', isAdmin)
    //     if(isAdmin) status = "Admin"
    // }else{
    //     console.log('NO AUTH YET')
    // }

    if(auth?.accessToken){
        const decoded = jwtDecode(auth?.accessToken)
        const {username, roles, email, favouriteTeam} = decoded.UserInfo
        console.log('AUTH:', auth)
        console.log('DECo:', decoded)
        console.log('DECoUserInfo:', decoded.UserInfo)
        console.log('DECoRole:', roles)
        isAdmin = roles?.includes(5601)
        console.log('ISADMIN STATUS:', isAdmin)
        if(isAdmin) status = "Admin"

        return { auth, setAuth, isAdmin, status, username, email, favouriteTeam, roles }

    }

    return { auth, setAuth, isAdmin, status, username:'', email:'', favouriteTeam:'', roles:[] }//, username, email, favouriteTeam, roles
   // return useContext(AppContext)
}
export default useAuth