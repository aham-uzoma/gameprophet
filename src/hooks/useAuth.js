import { useContext, useState } from "react";
import AppContext from "../context/ContextProvider";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
    const {auth,authLocalStorage, setAuth, setAuthLocalStorage} = useContext(AppContext)

    let isAdmin = false
    let status = "user"

    // if(authLocalStorage?.refreshToken){
    //     localStorage.setItem('refreshToken',authLocalStorage?.refreshToken)
    // }

    if(auth?.accessToken){
        const decoded = jwtDecode(auth?.accessToken)
        const {username, roles, email, favouriteTeam, isVerified, subscribed} = decoded.UserInfo
        isAdmin = roles?.includes(5601)
        if(isAdmin) status = "Admin"

        return { auth, 
                 setAuth, 
                 isAdmin, 
                 status, 
                 username, 
                 email, 
                 favouriteTeam, 
                 roles, 
                 isVerified, 
                 subscribed,
                 authLocalStorage,
                 setAuthLocalStorage}

    }

    return { auth, 
             setAuth, 
             isAdmin, 
             status, 
             username:'', 
             email:'', 
             favouriteTeam:'', 
             roles:[], 
             isVerified:'', 
             subscribed:'',
             authLocalStorage,
             setAuthLocalStorage}
}
export default useAuth