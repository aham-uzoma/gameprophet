import axios, { axiosInstance, axiosWithCredentials } from '../api/axios';
import useAuth from './useAuth';

/**
 * communicates with the database to get a 
 * new accessToken from the refreshToken
 * 
 */

const useRefreshToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = await axiosInstance.get('/refresh')//axiosWithCredentials
        console.log('response55',response)
        setAuth(prev => {
            return { ...prev, 
                accessToken: response.data.accessToken, 
                // roles: response.data.roles,
                // username: response.data.username,
                // email: response.data.email,
                // favouriteTeam: response.data.favouriteTeam
            }
        })
        console.log('ACCESSTOKEN:',response.data.accessToken)
        return response.data.accessToken;
    }
    return refresh
}

export default useRefreshToken