import React, { useContext, useEffect, useState } from 'react'
import PredictTable2 from '../predictTable2/PredictTable2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import PredictionDataContext from '../../context/ContextProvider'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../context/ContextProvider'

const VipPage = () => {
    const [comment, setComment] = useState('')
    const [commentList, setCommentList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate()
    const {isVerified} = useContext(AppContext)


    useEffect(()=>{
        if (isVerified == true) {
            console.log('isVerified', isVerified)
                return navigate('/verifyEmail')
            }
    },[])

    useEffect(()=>{
        const fetchComments =async()=>{
            setIsLoading(true)
            await axiosPrivate.get('/getAllComments').then(res=>{
                setIsLoading(false)
                console.log(res.data)
                console.log('RESPOSES:', res)
                setCommentList(res.data)
            }).catch(err=>{
                setIsLoading(false)
                console.log('an error occored:', err)
            })
        } 

        fetchComments()

    },[])


    const handleCommentInput =(e)=>{
        setComment(e.target.value)
    }
    const handleSubmitComment = async(e)=>{
        console.log('comment', comment)
        await axiosPrivate.post('/comment/comments', {comment}).then(res=>{
            console.log(res.data)
        }).catch(error => {
            console.log('Error: Something went wrong. Please try again later.')
            console.log(error)

        })
    }

    return (
        <section className=' bg-amber-50 font-sen'>
            <section className='flex flex-col mb-8 '>
                <div className='flex w-screen bg-orange-400 bg-cover items-center pl-8' style={{ height: '30vh' }}>
                    <h1 className='text-3xl font-bold text-white'>VIP.</h1>
                </div>
            </section>
            {/* bg-slate-500 */}
            <section className='flex flex-col justify-center w-screen  items-center '>
                <h1 className='md:text-3xl text-2xl mb-5 mt-5 font-bold'>TODAY'S PREDICTION</h1>
                {/* <div > */}
                <PredictTable2 />
                {/* </div> */}
                {/* bg-orange-400 */}
                <div className='flex flex-col mt-32 w-[85vw] md:w-[60vw]'>
                    <h1 className='text-xl'>Comments</h1>
                    {/* bg-emerald-300 */}
                    {console.log('COMM:', commentList)}
                    {isLoading ? (
                        <div className="loading-container">
                            <p>Loading comments...</p>
                            </div>
                        ) : (
                   commentList.slice().reverse().map((userComment, index)=>{
                     const {username, content} = userComment

                    return <div key={index} className='flex justify-between p-4 bg-white shadow mt-2 mb-4' >
                        {/* <div className='h-10 w-10 rounded-full bg-slate-400'></div> */}
                        <div className='flex justify-between' style={{ width: '55vw' }}>
                            <div className='flex flex-col '>
                                <h1 className='font-bold text-base'>{username}</h1>
                                <h2>5 pm</h2>
                                <div className='flex w-[75vw] md:w-[49vw]'>
                                <h1 className='mt-2 text-base'>{content}</h1>
                                </div>
                            </div>
                            {/* bg-stone-400  */}
                            {/* <div className='flex justify-between w-40 h-6'>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsUp} />84</div>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsDown} />110</div>
                            </div> */}
                        </div>
                    </div>
                        }))}

                    <div className='flex justify-between p-4 bg-white shadow mt-2 mb-4' >
                        <div className='h-10 w-10 rounded-full bg-slate-400'></div>
                        <div className='flex justify-between md:w-[55vw]'>
                            <div className='flex flex-col w-[90vw]'>
                                <h1 className='text-xl'>Write Your Comment:</h1>
                                <div className='flex mt-4' style={{ width: '49vw' }}>
                                <form className=''>
                                    <textarea className=' p-4 text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 bg-slate-200 w-[75vw] md:w-[45vw] ' id="myTextarea" name="comments" rows="8" cols="50"
                                    onChange={handleCommentInput}
                                    ></textarea>
                                    <br />
                                    {/* <input type="submit" value="Submit" /> */}
                                </form>
                                </div>
                                <div  className='grid justify-items-end md:w-[45vw] w-[75vw]'>
                                <button className='h-8 w-28 bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                                onClick={handleSubmitComment}
                                >SUBMIT</button>
                                </div>
                            </div>
                            {/* <div className='flex justify-between  h-6 'style={{ width: '110px' }}>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsUp} />500</div>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsDown} />200</div>
                            </div> */}
                        </div>
                    </div>

                </div>

            </section>


        </section>
    )
}

export default VipPage