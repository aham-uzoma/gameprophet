import React, { useState, useRef, useEffect, } from 'react'
//import axios from '../../api/axios';
import axios from 'axios'
import TrashSVG from '../../icons/TrashSVG'
import Modal from '../modals/Modal'
import { Checkbox } from "@material-tailwind/react";
import PassResultSVG from '../../icons/PassResultSVG';
import Colors from '../../utils/Colors'
import FailResultSVG from '../../icons/FailResultSVG';





function UserPage() {

    const [numPairs, setNumPairs] = useState(0)
    const createInitialMarksVisible = (numPairs) => {
        const initialState = {};
        for (let i = 0; i < numPairs; i++) {
          initialState[i] = true;
        }
        console.log('initialState',initialState)
        return initialState;
      };

    const [game, setGame] = useState('')
    const [odds, setOdds] = useState('')
    const [showWarining1, setShowWarning1] = useState(false)
    const [showWarining2, setShowWarning2] = useState(false)
    const [newPrediction, setNewPrediction] = useState([])
    const [showTable, setShowTable] = useState(false)
    const [isDataInTable, setIsDataInTable] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [isSucessFull, setIsSuccessfull] = useState(false)
    const [checkboxVisible, setCheckboxVisible] = useState(false)
    const [regular, setRegular] = useState(false)
    const [vip, setVip] = useState(false)
    const [passVisible, setPassVisible] = useState(false)
    const [failVisible, setFailVisible] = useState(false)
    // const [marksVisible, setMarksVisible] = useState({0:true})
    const [marksVisible, setMarksVisible] = useState(createInitialMarksVisible(numPairs));
    const [userPredictions, setUserPredictions] = useState([])
    //const [marksVisible, setMarksVisible] = useState(Array(userPredictions.length).fill(true));


    const BASE_URL = 'http://localhost:8080/api/v1/predict';

    const gameInputRef = useRef()
    const oddsInputRef = useRef()

    useEffect(()=>{
        axios.get(BASE_URL).then((res)=>{
            setUserPredictions(res.data)
        }).catch((error)=>console.log(error))
    },[])

    useEffect(()=>{
        setNumPairs(userPredictions.length)
    },[userPredictions.length])

    useEffect(()=>{
        console.log('userPredictions:', userPredictions)
        console.log('newP',userPredictions.length)
     },[userPredictions,userPredictions.length])

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
                    console.log('VIP:', vip)
                    console.log('Regular,', regular)
                    const newPredictions = { game, odds, }
                    setNewPrediction([...newPrediction, newPredictions])
                    gameInputRef.current.value = ''
                    oddsInputRef.current.value = ''
                    setGame('')
                    setOdds('')
                    setIsDataInTable(true)
                }

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
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('VIP2:', vip)
        console.log('Regular2,', regular)
        const newPredictionArr = [...newPrediction]
        for (const items of newPredictionArr) {
            items.vip = vip;
            items.regular = regular;
        }
        console.log('newPredictions:', newPredictionArr)
        await axios.post(BASE_URL, newPrediction).then(res => {
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
    const handleChecked = () => {
        // setVip((prevCheck1)=>!prevCheck1)
        setVip(!vip)
    }
    const handleChecked1 = () => {
        // setRegular((prevCheck)=>!prevCheck)
        setRegular(!regular)
    }
    const handlePassMark = (index) => {
       // setMarksVisible(false )
        setPassVisible((prev) => ({ ...prev, [index]: true }))
        setMarksVisible((prev) => ({ ...prev, [index]: false }))
        console.log('Markk2:', marksVisible[index])

    }
    const handleFailMark = (index) => {
       // setMarksVisible(false)
        setFailVisible((prev) => ({ ...prev, [index]: true }))
        setMarksVisible((prev) => ({ ...prev, [index]: false }))
    }
    useEffect(()=>{
        console.log('marksVisible:', marksVisible)
    },[marksVisible])

    return (
        <section >
            {/* mb-8 */}
            <section className='flex flex-col drop-shadow-md'>
                <div className='flex w-screen bg-white bg-cover font-sen items-center pl-8  pb-4 ' style={{
                    height: '30vh',
                }}>
                    <div className='flex justify-between items-center  p-5' style={{ width: '45vw' }} >
                        <div className='bg-cyan-300 w-44 h-44 rounded-full'>
                            <img src={require('../../assets/images/user.jpg')} alt="userImage"
                                className='rounded-full object-cover w-full h-full' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-red-500 text-4xl mb-4'>Welcome</h1>
                            <div className='flex gap-2' style={{ width: '30vw' }}>
                                <h1 className='text-4xl'>Michael Oguguoa</h1>
                                <h1 className='text-red-500 '>admin</h1>
                            </div>
                            <button className='mt-20 h-16 w-60 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'>Create Prediction</button>
                        </div>
                    </div>
                </div>
            </section>


            <div className='flex-col bg-amber-50  w-screen justify-center items-center pt-8'>
            {/* h-screen */}
                {/* drop-shadow-md */}

                <div className='grid justify-center font-sen w-screen'>
                    {/* w-98vw 
        style={{width:'75vw'}} */}
                    {showTable && <table className='bg-white border-collapse drop-shadow-lg text-left' style={{ width: '40vw' }} >
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
                                    <td className='p-4'>{game.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                    <td className='p-4'>{odds.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                    <td className='p-4 cursor-pointer' onClick={() => handleDelete(predictions)}><TrashSVG /></td>
                                </tr>
                            </tbody>
                        })}
                    </table>}
                </div>
                <div className='flex flex-col items-center w-screen'>
                    <form className='flex flex-col items-center p-4 bg-white w-2/5 mt-9 rounded-2xl drop-shadow-lg font-sen'
                        style={{ height: '50%' }}>
                        <input
                            className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-4'
                            name="game"
                            placeholder="Enter the game"
                            onChange={handleGameInput}
                            ref={gameInputRef}
                            style={{
                                fontFamily: 'Sen',
                                fontSize: 20,
                                width: '90%',
                            }}
                        />
                        {showWarining1 && <div className='text-red-500 font-sans'>Please Enter the form provided...</div>}
                        <input
                            className='h-14 w-96 rounded-2xl mt-6  border-2 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-4'
                            name="odds"
                            placeholder="Enter the odds"
                            onChange={handleOddInput}
                            ref={oddsInputRef}
                            style={{
                                fontFamily: 'Sen',
                                fontSize: 20,
                                width: '90%',
                            }}
                        />
                        {showWarining2 && <div className='text-red-500 font-sans'>Please Enter the form provided...</div>}
                        <div className='flex mt-5 gap-4 bg-slate-400' style={{ width: '90%' }}>
                            {checkboxVisible && <div className='flex gap-10'>
                                <label className='flex items-center'>
                                    <Checkbox id='vipCheck' label='VIP' color='red'
                                        // checked={checkboxState.vipCheck}
                                        checked={vip}
                                        // ripple={true} onChange={()=>handleChecked('vipCheck')} />
                                        ripple={true} onChange={handleChecked} />
                                    <Checkbox id='regularCheck' label='Regular'
                                        //checked={checkboxState.regularCheck}
                                        checked={regular}
                                        //    color='red' ripple={true} onChange={()=>handleChecked('regularCheck')}/>
                                        color='red' ripple={true} onChange={handleChecked1} />

                                </label>
                            </div>}
                        </div>
                        <div className='flex gap-6'>
                            <button className='mt-10 h-16 w-60 text-xl bg-orange-400 hover:bg-[rgba(253,210,153,0.9)] text-white'
                                onClick={handleNewPredictions} type='submit'>+ Add Prediction</button>
                            <button className='mt-10 h-16 w-60 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                                onClick={openModal}
                                disabled={!isDataInTable}
                                type='submit'>Place Prediction</button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col justify-center w-screen items-center font-sen'>
                    <h1 className='text-3xl mb-5 mt-14 font-bold'>RECENT PREDICTIONS</h1>
                    <div className='grid justify-center font-sen w-screen mb-11'>
                        {/* w-98vw 
        style={{width:'75vw'}} */}
                        <table className='bg-white border-collapse drop-shadow-lg text-left' style={{ width: '40vw' }} >
                            <thead>
                                <tr className='bg-red-600 '>
                                    <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Game</th>
                                    <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Odds</th>
                                    <th className='p-5 uppercase text-xl text-white	 tracking-widest'>Result</th>
                                </tr>
                            </thead>
                            {userPredictions.map((predict_db, index)=>{
                               const {game, odds} = predict_db
                               const rowColor = index % 2 === 0? 'bg-red-100': ''
                            return(
                                <tbody key={index}>
                                <tr className={rowColor}>
                                    <td className='p-4'>{game}</td>
                                    <td className='p-4'>{odds}</td>
                                    <td className='flex justify-center items-center gap-6 p-4 cursor-pointer' >
                                     {marksVisible[index] && (<>  <button className='h-8 w-8 text-xl rounded-full bg-orange-400 hover:bg-[rgba(253,210,153,0.9)] text-white'
                                            onClick={()=>{handlePassMark(index);console.log('marKK:',marksVisible)}} type='submit'><PassResultSVG color={'white'} size={30} /></button>
                                        <button className='h-8 w-8 text-xl rounded-full bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                                            onClick={()=>handleFailMark(index)} type='submit'><FailResultSVG color={'white'} /></button>
                                            </>)}
                                           {passVisible[index] && <div className='flex'  onClick={() => {
                                        setMarksVisible((prev) => ({ ...prev, [index]: true }))
                                        setPassVisible((prev) => ({ ...prev, [index]: false }))
                                        console.log('marksVisibleIndex:,', marksVisible)
                                        console.log('passVisible:,', passVisible)
                                    }}><PassResultSVG color={Colors.PASS} size={50} /></div>}

                                        {failVisible[index] && <div className='flex' onClick={() => {
                                            setMarksVisible((prev) => ({ ...prev, [index]: true }))
                                            setFailVisible((prev) => ({ ...prev, [index]: false }))
                                            console.log('marksVisibleIndex:,', marksVisible)
                                             console.log('failVisible:,', failVisible)
                                       
                                            }}><FailResultSVG color={Colors.PRIMARY} size={50} /></div>}
                                    </td>
                                 
                                </tr>
                            </tbody>
                               )})}
                        </table>
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