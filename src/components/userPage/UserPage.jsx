import React, { useState, useRef, useEffect, } from 'react'
import axios from '../../api/axios';
//import axios from 'axios'
import TrashSVG from '../../icons/TrashSVG'
import Modal from '../modals/Modal'
import { Checkbox } from "@material-tailwind/react";
import PassResultSVG from '../../icons/PassResultSVG';
import Colors from '../../utils/Colors'
import FailResultSVG from '../../icons/FailResultSVG';
import { useContext } from 'react';
import AppContext from '../../context/ContextProvider';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useLogOutHook from '../../hooks/useLogOut';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ProfilePicc from '../../assets/ProfilePicc';
import Paid from '../../assets/Paid';





function UserPage() {

    const [numPairs, setNumPairs] = useState(0)
    const [game, setGame] = useState('')
    const [odds, setOdds] = useState('')
    const [showWarining1, setShowWarning1] = useState(false)
    const [showWarining2, setShowWarning2] = useState(false)
    const [newPrediction, setNewPrediction] = useState([])
    const [showTable, setShowTable] = useState(false)
    const [isDataInTable, setIsDataInTable] = useState(false)
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [isSucessFull, setIsSuccessfull] = useState(false)
    const [checkboxVisible, setCheckboxVisible] = useState(false)
    const [regular, setRegular] = useState(false)
    const [vip, setVip] = useState(false)
    const [passVisible, setPassVisible] = useState(false)
    const [failVisible, setFailVisible] = useState(false)
    const [marksVisible, setMarksVisible] = useState({});
    const [recentIsVisible, setRecentIsVisible] = useState(false)

    const [latestUserPrediction, setLatestUserPrediction] = useState([])
    //useContex()
    const { isLoading, userPredictions, userCount } = useContext(AppContext)
    const axiosPrivate = useAxiosPrivate()
    const logOut = useLogOutHook()
    const navigate = useNavigate() 
    const {username} = useAuth()

    const BASE_URL = 'http://localhost:3500';
    const hasData = userPredictions?.length > 0
    const hasData2 = latestUserPrediction?.length > 0

    const gameInputRef = useRef()
    const oddsInputRef = useRef()
    //const updatePredictableRef= useRef()

    // useEffect(() => {
    //     setNumPairs(userPredictions.length)
    // }, [userPredictions.length])
    useEffect(() => {
        if (hasData) {
            console.log('Something:', userPredictions)

            setRecentIsVisible(true)
        } else {
            setRecentIsVisible(false)
        }
    }, [userPredictions])
    useEffect(() => {
        if (hasData2) {
            console.log('Something2:', latestUserPrediction)

            setRecentIsVisible(true)
        } else {
            setRecentIsVisible(false)
        }
    }, [latestUserPrediction])

    useEffect(() => {
        // Filter the objects with "Ongoing" result and equal timestamps
        console.log('userPredictionsFF', userPredictions)
        const  filteredArray = userPredictions.filter(obj => obj.result === "Ongoing");
        console.log('filteredArray', filteredArray)

        //comparing timestamps as strings (not actual date objects)

        // const uniqueTimestamps = new Set(filteredArray.map(obj => obj.timeStamp))
        // const newArray = Array.from(uniqueTimestamps).map(timestamp => {
        //     return filteredArray.find(obj => obj.timeStamp === timestamp)
       // });

        setLatestUserPrediction(filteredArray)

    }, [userPredictions])

    // useEffect(()=>{
    //     for(const item of userPredictions){
    //         if(item.result === "Ongoing"){
    //             setRecentIsVisible(false)
    //         }else{
    //             setRecentIsVisible(true)
    //         }
    //     }
    // }, [userPredictions])


    useEffect(() => {
        setMarksVisible(createInitialMarksVisible(latestUserPrediction))
    }, [latestUserPrediction])

    const createInitialMarksVisible = (latestUserPrediction) => {
        if (!latestUserPrediction) {
            console.log('no UserPresdictions', latestUserPrediction)
        } else {
            const userPredictionsID = latestUserPrediction.map((predictIds) => predictIds._id)
            const initialState = {};
            for (const id of userPredictionsID) {
                initialState[id] = true;
            }
            return initialState;
        }

    };


    useEffect(() => {
        const isAnyKeyTrue = Object.values(marksVisible).some(value => value === true)
        setIsAllChecked(isAnyKeyTrue)
        
        console.log('marksVisible', marksVisible)

    }, [ marksVisible])



    // useEffect(()=>{
    //     const newResultss = {passVisible, failVisible}
    //     setNewResults([...newResults, newResultss])
    // },[passVisible, failVisible])

    const handleGameInput = (e) => {
        setGame(e.target.value)
        setShowWarning1(false)

    }
    const handleOddInput = (e) => {
        setOdds(e.target.value)
        setShowWarning2(false)
    }

    const handleNewPredictions = (e) => {
        e.preventDefault()
        if (odds === '' && game === '') {
            setShowWarning1(true)
            setShowWarning2(true)
        } else
            if (game === '') {
                setShowWarning1(true)
                setShowWarning2(false)
            } else
                if (odds === '') {
                    setShowWarning2(true)
                    setShowWarning1(false)
                } else {
                    setShowTable(true)
                    const newPredictions = { game, odds, }
                    setNewPrediction([...newPrediction, newPredictions])
                    gameInputRef.current.value = ''
                    oddsInputRef.current.value = ''
                    setGame('')
                    setOdds('')
                    setIsDataInTable(true)
                }

    }
    const handleUpdatePredictable = async () => {
        
        const newResults = { passVisible, failVisible }
        for (const key in newResults.passVisible) {
            if (!newResults.passVisible[key]) {
                delete newResults.passVisible[key]
            }
        }
        for (const key in newResults.failVisible) {
            if (!newResults.failVisible[key]) {
                delete newResults.failVisible[key]
            }
        }
        console.log('newResults:', newResults)
        for (const key in newResults.failVisible) {
            newResults.failVisible[key] = false
        }
        const newMergedResults = { ...newResults.passVisible, ...newResults.failVisible }
        console.log('newMergedResult:', newMergedResults)
        const newResultUpdate = Object.entries(newMergedResults).map(([key, value]) => ({
            _id: key,
            result: value,
        }))
        console.log('newResultUpdates:', newResultUpdate)
        await axiosPrivate.put('/updatePredictableResult', newResultUpdate).then(res => {
            console.log(res)
            if (res.status === 201) {
                handleReloadPage()
            } else {
                alert('Error: Something went wrong. Please try again later.');

            }
        }).catch(error => {
            console.log(error)
            alert('Error: Something went wrong. Please try again later.');

        })

    }

    const openModal = (e) => {
        e.preventDefault()
        if (checkboxVisible === false) {
            setModalVisible(false)
            setCheckboxVisible(true)
        }
        if (vip === false && regular === false) {
            return
        }
        else {
            setModalVisible(true)
        }
    }
    const closeModal = (e) => {
        e.preventDefault()
        setModalVisible(false)
    }
    const handleReloadPage = (e) => {
        setModalVisible(false)
        window.location.reload()
        setTimeout(() => window.scrollTo(0, 0), 0)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPredictionArr = [...newPrediction]
        for (const items of newPredictionArr) {
            items.vip = vip;
            items.regular = regular;
        }
        console.log('newPredictions:', newPredictionArr)
        console.log('NewPredictionsObj:', newPrediction)
        await axiosPrivate.post('/createNewPrediction', newPrediction).then(res => {
            console.log(res)
            if (res.status === 201) {
                setIsSuccessfull(true)
            } else {
                alert('Error: Something went wrong. Please try again later.');

            }
        }).catch(error => {
            console.log(error)
            alert('Error: Something went wrong. Please try again later.');

        })

    }
   
    const handleDelete = (itemid) => {
        const predictionsLeft = newPrediction.filter((items) => items !== itemid)
        setNewPrediction(predictionsLeft)
    }

    const handleLogOut = async () =>{
        try{

            const result = await logOut()
            window.location.reload();
            //navigate('/logIn')

        } catch (error){
            console.log('LogOut Failed:', error)
        }
    }
    const handleChecked = () => {
        // setVip((prevCheck1)=>!prevCheck1)
        setVip(!vip)
    }
    const handleChecked1 = () => {
        setRegular(!regular)
    }
    const handlePassMark = (id) => {
        setPassVisible((prev) => ({ ...prev, [id]: true }))
        setMarksVisible((prev) => ({ ...prev, [id]: false }))

    }
    const handleFailMark = (id) => {
        setFailVisible((prev) => ({ ...prev, [id]: true }))
        setMarksVisible((prev) => ({ ...prev, [id]: false }))
    }

    if (isLoading) {
        return <p>Loading predictions...</p>;
      }
    return (
        <section className='pb-96' >
            <section className='flex flex-col drop-shadow-md'>
                <div className='flex flex-col md:flex-row items-start bg-white bg-cover font-sen md:items-center pl-8  pb-4 ' style={{
                    height: '30vh',
                }}>
                    <div className='flex items-center w-[90vw] md:w-[80vw] md:p-5 p-2'>
                        <div className='bg-cyan-300 md:w-36 w-16 h-16 md:h-36 rounded-full'>
                            <img src={require('../../assets/images/user.jpg')} alt="userImage"
                                className='rounded-full object-cover w-full h-full' />
                        </div>
                        <div className='flex flex-col w-60 md:w-[65vw] px-3'>
                            <h1 className='text-red-500 md:text-3xl text-xl mb-4'>Welcome</h1>
                            <div className='flex gap-2 w-96 md:w-[30vw]'>
                                <h1 className='md:text-3xl text-xl w-60 lg:w-80 sm:w-96'>{username}</h1>
                                {/* <h1 className='text-red-500 '>admin</h1> */}
                            </div>
                            <div className='cursor-pointer hover:text-red-500'
                            onClick={handleLogOut}>LogOut</div> 
                            {/* <button className='mt-20 h-16 w-60 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'>Create Prediction</button> */}
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 mt-4'>
                           <div className='flex gap-2 items-center'><ProfilePicc/><p className='text-red-600 text-xl font-bold'>{userCount}</p></div> 
                           <div className='flex gap-2 items-center'><Paid/><p className='text-red-600 text-xl font-bold'>0</p></div>
                        </div>
                </div>
            </section>
            <div className='flex-col bg-amber-50  w-screen justify-center items-center pt-8'>
                <div className='grid justify-center font-sen w-screen'>
                    {showTable && <table className='bg-white border-collapse drop-shadow-lg text-left' style={{ width: '45vw' }} >
                        <thead>
                            <tr className='bg-red-600 '>
                                <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Game</th>
                                <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Odds</th>
                                <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Del.</th>
                            </tr>
                        </thead>
                        
                        {newPrediction.map((predictions, index) => {
                            const { game, odds } = predictions
                            const rowColorClass = index % 2 === 0 ? 'bg-red-100' : '';
                            return <tbody key={index}>
                                <tr className={rowColorClass} >
                                    <td className='p-4'>{game?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                    <td className='p-4'>{odds?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                    <td className='p-4 cursor-pointer' onClick={() => handleDelete(predictions)}><TrashSVG /></td>
                                </tr>
                            </tbody>
                        })}
                    </table>}
                </div>
                <div className='flex flex-col items-center w-screen'>
                    <form className='flex flex-col items-center p-4 bg-white sm:w-[75%] lg:w-[45%] w-[90%] mt-9 rounded-2xl drop-shadow-lg font-sen'
                        style={{ height: '50%' }}>
                        <input
                            className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0
                             focus:border-red-500 focus:border-2 font-sen text-base w-[90%]'
                            name="game"
                            placeholder="Enter the game"
                            onChange={handleGameInput}
                            ref={gameInputRef}
                        />
                        {showWarining1 && <div className='text-red-500 font-sans'>Please Enter the form provided...</div>}
                        <input
                            className='h-14 rounded-2xl mt-6  border-2 p-4 focus:outline-none 
                            focus:ring-0 focus:border-red-500 focus:border-2 font-sen text-base w-[90%]'
                            name="odds"
                            placeholder="Enter the odds"
                            onChange={handleOddInput}
                            ref={oddsInputRef}
                        />
                        {showWarining2 && <div className='text-red-500 font-sans'>Please Enter the form provided...</div>}
                        <div className='flex mt-5 gap-4 bg-slate-400' style={{ width: '90%' }}>
                            {checkboxVisible && <div className='flex gap-10'>
                                <label className='flex items-center'>
                                    <Checkbox id='vipCheck' label='VIP' color='red'
                                        checked={vip}
                                        ripple={true} onChange={handleChecked} />
                                    <Checkbox id='regularCheck' label='Regular'
                                        checked={regular}
                                        color='red' ripple={true} onChange={handleChecked1} />

                                </label>
                            </div>}
                        </div>
                        <div className='flex gap-6'>
                            <button className='mt-10 md:h-16 h-12 md:w-60 w-40 md:text-xl text-base bg-orange-400 hover:bg-[rgba(253,210,153,0.9)] text-white'
                                onClick={handleNewPredictions} type='submit'>+ Add Prediction</button>
                            <button className='mt-10 md:h-16 h-12 md:w-60 w-40 md:text-xl text-base bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                                onClick={openModal}
                                disabled={!isDataInTable}
                                type='submit'>Place Prediction</button>
                        </div>
                    </form>
                </div>

                <div className='flex flex-col justify-center w-screen items-center font-sen'>
                    {recentIsVisible && <>   <h1 className='md:text-3xl text-2xl mb-5 mt-14 font-bold'>RECENT PREDICTIONS</h1>
                        <div className='grid justify-center font-sen w-screen mb-11'>
                            <table className='bg-white border-collapse drop-shadow-lg text-left sm:w-[75vw] lg:w-[45vw]  w-[60vw]'>
                                <thead>
                                    <tr className='bg-red-600 '>
                                        <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Game</th>
                                        <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Odds</th>
                                        <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Result</th>
                                    </tr>
                                </thead>
                                {console.log('SignIn:', userPredictions)}
                                {latestUserPrediction.map((predict_db, index) => {
                                    const { game, odds } = predict_db
                                    const rowColor = index % 2 === 0 ? 'bg-red-100' : '';
                                    return <tbody key={index}>
                                        <tr className={rowColor}>
                                            {/* .replace(/\b\w/g, (c) => c.toUpperCase()) */}
                                            <td className='p-4'>{game?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                            <td className='p-4'>{odds?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                            <td className='flex justify-center items-center gap-6 p-4 cursor-pointer'>
                                                {marksVisible[predict_db._id] && (<>
                                                    <button className='h-8 w-8 text-xl rounded-full bg-orange-400 hover:bg-[rgba(253,210,153,0.9)] text-white'
                                                        onClick={() => handlePassMark(predict_db._id)} type='submit'>
                                                        <PassResultSVG color={'white'} size={30} />
                                                    </button>
                                                    <button className='h-8 w-8 text-xl rounded-full bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                                                        onClick={() => handleFailMark(predict_db._id)} type='submit'>
                                                        <FailResultSVG color={'white'} />
                                                    </button>
                                                </>)}
                                                {passVisible[predict_db._id] && <div className='flex' onClick={() => {
                                                    setMarksVisible((prev) => ({ ...prev, [predict_db._id]: true }))
                                                    setPassVisible((prev) => ({ ...prev, [predict_db._id]: false }))
                                                }}><PassResultSVG color={Colors.PASS} size={50} /></div>}

                                                {failVisible[predict_db._id] && <div className='flex' onClick={() => {
                                                    setMarksVisible((prev) => ({ ...prev, [predict_db._id]: true }))
                                                    setFailVisible((prev) => ({ ...prev, [predict_db._id]: false }))
                                                }}><FailResultSVG color={Colors.PRIMARY} size={50} /></div>}
                                            </td>
                                        </tr>
                                    </tbody>
                                })}
                            </table>
                            <div className='flex justify-center items-center mt-5'>
                            <button className=' h-16 text-xl bg-green-600 hover:bg-[rgb(117,250,139)] text-white sm:w-[75vw] lg:w-[45vw] w-[82vw]'
                                onClick={handleUpdatePredictable}
                                disabled={isAllChecked}
                                type='submit'>Save
                            </button>
                            </div>
                        </div>
                    </>
                    }
                    <div className='flex flex-col justify-center w-screen items-center font-sen'>
                        <h1 className='text-3xl mb-5 mt-14 font-bold'>PREDICT</h1>
                    </div>
                </div>
            </div>
            {modalVisible && <Modal
                handleSubmit={handleSubmit}
                closeModal={closeModal}
                isSucessFull={isSucessFull}
                handleReloadPage={handleReloadPage}
            />}
        </section>
    )
}
export default UserPage