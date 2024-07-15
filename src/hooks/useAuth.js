import { useContext, useState } from "react";
import AppContext from "../context/ContextProvider";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
    const {auth, setAuth} = useContext(AppContext)
    let isAdmin = false
    let status = "user"

    if(auth?.accessToken){
        const decoded = jwtDecode(auth?.accessToken)
        const {username, roles, email, favouriteTeam, isVerified} = decoded.UserInfo
        isAdmin = roles?.includes(5601)
        console.log('ISADMIN STATUS:', isAdmin)
        console.log('ISVERIF', isVerified)
        if(isAdmin) status = "Admin"

        return { auth, setAuth, isAdmin, status, username, email, favouriteTeam, roles, isVerified}

    }

    return { auth, setAuth, isAdmin, status, username:'', email:'', favouriteTeam:'', roles:[], isVerified:''}
}
export default useAuth