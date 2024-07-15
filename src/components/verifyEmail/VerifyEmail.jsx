import { useEffect, useState } from "react"
import axios from '../../api/axios';
import useAuth from "../../hooks/useAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import QuestionSVG from '../../icons/QuestionSVG'
import Colors from '../../utils/Colors'
import SuccessSVG from '../../icons/SuccessSVG'


const VerifyEmail = ({verified,setVerified}) => {
    const { auth, isVerified } = useAuth()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const emailToken = searchParams.get('emailToken')
    console.log('emailToken', emailToken)

    useEffect(() => {
        const VerifyMail = async () => {
            if (isVerified) {
                setTimeout(() => {
                    return navigate('/vip')
                }, 3000)
            } else {
                if (emailToken) {
                    await axios.post("/emailVerify/verifyMail", { emailToken }).then(
                        response => {
                            console.log('RESPOND:', response)
                            if (response.data.isVerified == true) {
                                setVerified(true)
                                setTimeout(() => {
                                    return navigate('/vip')
                                }, 3000)
                            }
                        }
                    ).catch(error => {
                        console.log('ERROREmail', error)
                    })
                }
            }
        }
        VerifyMail()
    }, [emailToken, isVerified])

    return (
        <div>

            <div className='flex flex-col w-screen items-center h-screen bg-amber-50'>
                <div className='flex flex-col p-4 items-center justify-center gap-7 h-64  bg-white sm:w-[75%] lg:w-[45%] w-[90%] mt-9 rounded-2xl shadow font-sen'>
                    {verified == true ? <><SuccessSVG color={Colors.PRIMARY} />
                        <p className='text-2xl text-center'>Email Successfully verified, redirecting...</p></> :
                        <><QuestionSVG color={Colors.PRIMARY} />
                            <p className='text-2xl text-center'>Email not Verified, please verify your email </p></>}
                </div>
            </div>


        </div>
    )
}
export default VerifyEmail