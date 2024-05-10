import React from 'react'
import QuestionSVG from '../../icons/QuestionSVG'
import Colors from '../../utils/Colors'
import SuccessSVG from '../../icons/SuccessSVG'
import { Checkbox } from '@material-tailwind/react'

const Modal = ({handleSubmit,closeModal, isSucessFull, handleReloadPage, checkboxState, handleChecked}) => {
  return (
    <div className='fixed z-0 top-0 left-0 size-full flex items-center justify-center ' style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
        <div className='flex flex-col items-center gap-11 font-sen justify-center bg-white w-96 rounded-lg p-8 ' style={{width:'40vw'}}>
            <div className='flex flex-col gap-5 items-center justify-center '>
           {isSucessFull? <><SuccessSVG color={Colors.PRIMARY}/>
            <p className='text-2xl text-center'>Prediction Placed Sucessfully!!!</p></> : 
            <><QuestionSVG color={Colors.PRIMARY}/>
            <p className='text-2xl text-center'>Do you wish to proceed to "Place this Prediction? if yes,
            choose category and proceed</p></>}
            </div>
            <div className='flex gap-14'>
                                <label className='flex items-center'>
                                <Checkbox id='vipCheck' label='VIP' color='red' 
                                checked={checkboxState.vipCheck}
                                ripple={true} onChange={()=>handleChecked('vipCheck')}
                                style={{ width: '35px', height: '35px', fontSize:'25px' }}/>
                                    <Checkbox id='regularCheck' label='Regular' 
                                   checked={checkboxState.regularCheck}
                                    color='red' ripple={true} onChange={()=>handleChecked('regularCheck')}
                                    style={{ width: '35px', height: '35px', fontSize:'25px'}}/>
                                </label>
                            </div>
            <div className='flex gap-5'>
            <button className='mt-10 h-16 w-60 text-xl  bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                        onClick={closeModal} 
                        type='submit'>Cance</button>
            {isSucessFull? <button className='mt-10 h-16 w-60 text-xl bg-green-600 hover:bg-[rgb(117,250,139)] text-white'
                        onClick={handleReloadPage}                             
                       // disabled={!isDataInTable}
                        type='submit'>Continue</button> : <button className='mt-10 h-16 w-60 text-xl bg-green-600 hover:bg-[rgb(117,250,139)] text-white'
                        onClick={handleSubmit}                             
                       // disabled={!isDataInTable}
                        type='submit'>Proceed</button>}
            </div>
        </div>
    </div>
  )
}

export default Modal