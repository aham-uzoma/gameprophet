import React, { useContext } from 'react'
import PredictionDataContext from '../../context/ContextProvider'
import PassResultSVG from '../../icons/PassResultSVG'
import FailResultSVG from '../../icons/FailResultSVG'
import Colors from '../../utils/Colors'


const HistoryPage = () => {
    const { userPredictions } = useContext(PredictionDataContext)

    const footballPhoto = 'https://cdn.pixabay.com/photo/2021/08/22/20/27/corner-ball-6566084_960_720.jpg'
    return (
        <section className=' bg-amber-50 font-sen'>
            <section className='flex flex-col mb-8 '>
                <div className='flex w-screen bg-black bg-cover items-center pl-8' style={{
                    height: '30vh', backgroundImage:
                        `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${footballPhoto})`
                }}>
                    <h1 className='text-3xl font-bold text-red-600'>History.</h1>
                </div>
            </section>
            <section className='flex flex-col justify-center'>
                {/* bg-slate-500 */}
                <div className='flex justify-between align-top ' style={{ width: '87vw', height: '50vh' }}>
                    {/* bg-lime-500 */}
                    <div className='flex justify-between h-20  items-center'>
                        <div className='w-80 h-14 bg-red-600 ml-8 rounded-l-full flex justify-center items-center'>
                            <h1 className='text-xl font-bold text-white'>April 4th 2024</h1>
                        </div>
                        <div>
                            <hr className='w-10 h-1  bg-red-600 ' />
                        </div>
                        <div className='rounded-full w-14 h-14 bg-orange-400'>
                        </div>
                        <div>
                            <hr className='w-10 h-1  bg-orange-400' />
                        </div>
                    </div>
                    <div>
                        {/* className='grid justify-center mx-8 my-8 w-screen' */}
                        <div >
                            <table className='bg-white border-collapse shadow-2xl text-left w-98vw' style={{ width: '60vw' }}>
                                <thead>
                                    <tr className='bg-red-600 '>
                                        <th className='p-7 uppercase text-xl text-white	 tracking-widest'>MATCHES</th>
                                        <th className='p-7 uppercase text-xl text-white	 tracking-widest'>OPTIONS</th>
                                        <th className='p-7 uppercase text-xl text-white	tracking-widest'>RESULT</th>
                                    </tr>
                                </thead>

                        {userPredictions.map((predict_db, index) => {
                            const { game, odds } = predict_db
                            const rowColor = index % 2 === 0 ? 'bg-red-100' : ''
                         return predict_db.result === "Ongoing"? (<h1>No History Data Yet</h1>):( <tbody key={index}>
                                    <tr className={rowColor}>
                                        <td className='p-4'>{game?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                        <td className='p-4'>{odds?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                        <td className='p-4'>{
                                           predict_db.result === "true"? <PassResultSVG color={Colors.PASS} size={50} /> : 
                                           <FailResultSVG color={Colors.PRIMARY} size={50} />
                                        }</td>
                                    </tr>
                                </tbody>
                                 )})}
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HistoryPage