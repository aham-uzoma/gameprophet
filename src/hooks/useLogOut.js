import { axiosWithCredentials } from "../api/axios"



const useLogOut = () => {

    const logOut = async () => {
       try {
 
          const response = await axiosWithCredentials.get('/logOut')
          return response.data
       } catch (error) {
          console.error('Error during LogOut', error)
          throw error
       }
    }
    return logOut
 
 }
 
 export default useLogOut