import React, { useContext } from 'react'
import PredictTable2 from '../predictTable2/PredictTable2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import PredictionDataContext from '../../context/ContextProvider'

const VipPage = () => {

    return (
        <section className=' bg-amber-50 font-sen'>
            <section className='flex flex-col mb-8 '>
                <div className='flex w-screen bg-orange-400 bg-cover items-center pl-8' style={{ height: '30vh' }}>
                    <h1 className='text-3xl font-bold text-white'>VIP.</h1>
                </div>
            </section>
            {/* bg-slate-500 */}
            <section className='flex flex-col justify-center w-screen  items-center '>
                <h1 className='text-3xl mb-5 mt-5 font-bold'>TODAY'S PREDICTION</h1>
                {/* <div > */}
                <PredictTable2 />
                {/* </div> */}
                {/* bg-orange-400 */}
                <div className='flex flex-col mt-32 ' style={{ width: '60vw' }}>
                    <h1 className='text-xl'>Comments</h1>
                    {/* bg-emerald-300 */}
                    <div className='flex justify-between p-4 bg-white drop-shadow-md mt-2 mb-4' >
                        <div className='h-10 w-10 rounded-full bg-slate-400'></div>
                        <div className='flex justify-between' style={{ width: '55vw' }}>
                            <div className='flex flex-col '>
                                <h1 className='font-bold text-xl'>John Uche</h1>
                                <h2>5 pm</h2>
                                <div className='flex ' style={{ width: '49vw' }}>
                                <h1 className='mt-2 text-xl'>This is the all in comment section of the web and the game</h1>
                                </div>
                            </div>
                            {/* bg-stone-400  */}
                            <div className='flex justify-between w-40 h-6'>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsUp} />84</div>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsDown} />110</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between p-4 bg-white drop-shadow-md mt-2 mb-4 ' >
                        <div className='h-10 w-10 rounded-full bg-slate-400'></div>
                        <div className='flex justify-between '  style={{ width: '55vw' }}>
                            <div className='flex flex-col '>
                                <h1 className='font-bold text-xl'>Vent Bassey</h1>
                                <h2>2 days ago</h2>
                                <div className='flex ' style={{ width: '49vw' }}>
                                <h1 className='mt-2 text-xl'>Just Play the game over two point five and e go enter
                                    tho this prediction is sharp I dont see it going true, check out mine and
                                    compare
                                    </h1>
                                    </div>
                            </div>
                            {/* bg-stone-400  */}
                            <div className='flex justify-between w-40 h-6'>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsUp} />321</div>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsDown} />83</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between p-4 bg-white drop-shadow-md mt-2 mb-4' >
                        <div className='h-10 w-10 rounded-full bg-slate-400'></div>
                        <div className='flex justify-between' style={{ width: '55vw' }}>
                            <div className='flex flex-col '>
                                <h1 className='font-bold text-xl'>Cassy Praise</h1>
                                <h2>3 days ago</h2>
                                <div className='flex' style={{ width: '49vw' }}>
                                <h1 className='mt-2 text-xl'>This is smart prediction quite close to what I think
                                    would be the case, I will definitly add more games to the mix to boost my billion
                                    naira win, my case is different, But lets see how it goes, this seasson deh tight, my people.
                                    </h1></div>
                            </div>
                            <div className='flex justify-between w-40 h-6'>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsUp} />132</div>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsDown} />20</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between p-4 bg-white drop-shadow-md mt-2 mb-4' >
                        <div className='h-10 w-10 rounded-full bg-slate-400'></div>
                        <div className='flex justify-between ' style={{ width: '55vw' }}>
                            <div className='flex flex-col '>
                                <h1 className='font-bold text-xl'>Cassy Praise</h1>
                                <div className='flex mt-4' style={{ width: '49vw' }}>
                                <form className=''>
                                    <textarea className=' p-4 text-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 bg-slate-200 ' style={{ width: '45vw' }} id="myTextarea" name="comments" rows="8" cols="50"></textarea>
                                    <br />
                                    {/* <input type="submit" value="Submit" /> */}
                                </form>
                                </div>
                                <div  className='grid justify-items-end'style={{ width: '45vw' }}>
                                <button className='h-8 w-28 bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'>SUBMIT</button>
                                </div>
                            </div>
                            <div className='flex justify-between  h-6 'style={{ width: '110px' }}>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsUp} />500</div>
                            <div className='cursor-pointer'><FontAwesomeIcon icon={faThumbsDown} />200</div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


        </section>
    )
}

export default VipPage