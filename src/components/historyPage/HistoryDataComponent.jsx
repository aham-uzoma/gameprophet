import React, { useContext } from 'react'
import PassResultSVG from '../../icons/PassResultSVG'
import FailResultSVG from '../../icons/FailResultSVG'
import Colors from '../../utils/Colors'
import dayjs from 'dayjs';
import PredictionDataContext from '../../context/ContextProvider';

const HistoryDataComponent = ({sliceValue}) => {
    const { groupedPredictionData } = useContext(PredictionDataContext)


  return (
                <section className='flex flex-col justify-center'>
                {console.log('groupedPredictionData',groupedPredictionData )}
                {Object.entries(groupedPredictionData).slice(sliceValue).reverse().map(([date, predictions]) => {
                return( <div className='flex justify-between align-top mb-8' style={{ width: '87vw' }}>
                    {/* bg-lime-500 */}
                    <div className='flex justify-between h-20  items-center'>
                        <div className='w-80 h-14 bg-red-600 ml-8 rounded-l-full flex justify-center items-center'>
                            <h1 className='text-xl font-bold text-white'>{dayjs(date).format('dddd DD MMMM YYYY')}</h1>
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
                        {console.log('predictions:', predictions)}
                    {predictions && predictions.length > 0 ? ( 
                        predictions.map((predict_db, index) => {
                            const { game, odds } = predict_db
                            const rowColor = index % 2 === 0 ? 'bg-red-100' : ''
                         return  <tbody key={index}>
                                    <tr className={rowColor}>
                                        <td className='p-4'>{game?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                        <td className='p-4'>{odds?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                        <td className='p-4'>{
                                           predict_db.result === "true"? <PassResultSVG color={Colors.PASS} size={50} /> : predict_db.result === "Ongoing"? <p>Ongoing...</p> :
                                           <FailResultSVG color={Colors.PRIMARY} size={50} />
                                        }</td>
                                    </tr>
                                </tbody>
                                   })):(
                                    <p>No Prediction</p>
                                   )} 
                            </table>
                        </div>
                    </div>
                </div>
                )})} 
            </section>
  )
}

export default HistoryDataComponent