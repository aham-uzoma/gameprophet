import React, { useContext } from 'react'
import PassResultSVG from '../../icons/PassResultSVG'
import FailResultSVG from '../../icons/FailResultSVG'
import Colors from '../../utils/Colors'
import dayjs from 'dayjs';
import AppContext from '../../context/ContextProvider';

const HistoryDataComponent = ({sliceValue}) => {
    const {isLoading, groupedPredictionData } = useContext(AppContext)
    
    console.log("groupedPredictionData44", groupedPredictionData)
    if (isLoading) {
        return <p>Loading predictions...</p>;
      }

  return (
                <section>
                 <div className='hidden md:flex flex-col justify-center pt-6'>
                {console.log('groupedPredictionData11',groupedPredictionData )}
                {Object.entries(groupedPredictionData).slice(sliceValue).reverse().map(([date, predictions]) => {
                return( <div className='flex justify-between align-top mb-8' style={{ width: '87vw' }}>
                    {/* bg-lime-500 */}
                    {/* bg-lime-500 */}
                    <div className='flex justify-between h-20  items-center'>
                        <div className='md:w-40 xl:w-80 h-14 bg-red-600 ml-8 rounded-l-full flex justify-center items-center'>
                            <h1 className='text-sm xl:text-lg font-bold text-white'>{dayjs(date).format('dddd DD MMMM YYYY')}</h1>
                        </div>
                        <div>
                            <hr className='w-6 h-1  bg-red-600 ' />
                        </div>
                        <div className='rounded-full w-14 h-14 bg-orange-400'>
                        </div>
                        <div>
                            <hr className='w-6 h-1  bg-orange-400' />
                        </div>
                    </div>
                    <div>
                        {/* className='grid justify-center mx-8 my-8 w-screen' */}
                        <div >
                            <table className='bg-white border-collapse shadow-2xl text-left w-98vw' style={{ width: '60vw' }}>
                                <thead>
                                    <tr className='bg-red-600 '>
                                        <th className='p-7 uppercase text-lg text-white	 tracking-widest'>MATCHES</th>
                                        <th className='p-7 uppercase text-lg text-white	 tracking-widest'>OPTIONS</th>
                                        <th className='p-7 uppercase text-lg text-white	tracking-widest'>RESULT</th>
                                    </tr>
                                </thead>
                        {console.log('predictions:', predictions)}
                    {predictions && predictions.length > 0 ? ( 
                        predictions.map((predict_db, index) => {
                            const { game, odds } = predict_db
                            const rowColor = index % 2 === 0 ? 'bg-red-100' : ''
                         return  predict_db.result === "Ongoing" ? (<tbody key={index}>
                            <tr className={rowColor}>
                                <td className='p-4'>xxxx-VIP Only</td>
                                <td className='p-4'>xxxx-VIP Only</td>
                                <td className='p-4'>Sign-Up as VIP to View</td>
                            </tr>
                        </tbody>
                        ) : (
                        <tbody key={index}>
                                    <tr className={rowColor}>
                                        <td className='p-4'>{game?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                        <td className='p-4'>{odds?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                                        <td className='p-4'>{
                                           predict_db.result === "true"? <PassResultSVG color={Colors.PASS} size={50} /> : predict_db.result === "Ongoing"? <p>Ongoing...</p> :
                                           <FailResultSVG color={Colors.PRIMARY} size={50} />
                                        }</td>
                                    </tr>
                                </tbody>)
                                   })):(
                                    <p>No Prediction</p>
                                   )} 
                            </table>
                        </div>
                    </div>
                </div>
                )})} 
                </div>
                
                {/* className='flex flex-col bg-white p-4 m-3 mb-0 rounded-lg shadow gap-3' */}
                {Object.entries(groupedPredictionData).slice(sliceValue).reverse().map(([date, predictions]) => {
                return(<div className='md:hidden flex flex-col py-5 bg-amber-50' >
                <div className='flex justify-between h-20  items-center'>
                        <div className='w-64 h-10 bg-red-600 ml-8 rounded-l-full flex justify-center items-center'>
                            <h1 className='text-base font-bold text-white'>{dayjs(date).format('dddd DD MMMM YYYY')}</h1>
                        </div>
                        <div>
                            <hr className='w-10 h-1  bg-red-600 ' />
                        </div>
                        <div className='rounded-full w-10 h-10 bg-orange-400'>
                        </div>
                        <div>
                            <hr className='w-10 h-1  bg-orange-400' />
                        </div>
                    </div>
                    {predictions && predictions.length > 0 ? ( 
                        predictions.map((predict_db, index) => {
                            const { game, odds } = predict_db
                 return  predict_db.result === "Ongoing" ? (  <div key={index} className='flex flex-col bg-white p-4 m-3 mb-0 rounded-lg shadow gap-3'>
                    <div className='flex gap-5'>
                        <h1 className='text-gray-400 font-bold'>Match:</h1>
                        <h1 className='font-semibold'>xxxx-VIP Only</h1>
                     </div>
                     <div className='flex gap-4'>
                        <h1 className='text-gray-400 font-bold'>Option:</h1>
                        <h1 className='text-green-500'>xxxx-VIP Only</h1>
                    </div>
                    <div className='flex gap-6'>
                        <h1 className='text-gray-400 font-bold'>Result:</h1>
                        <div>Sign-Up as VIP to View</div>
                    </div>
                    </div >
                    ):(
                        <div key={index} className='flex flex-col bg-white p-4 m-3 mb-0 rounded-lg shadow gap-3'>
                        <div className='flex gap-5'>
                            <h1 className='text-gray-400 font-bold'>Match:</h1>
                            <h1 className='font-semibold'>{game?.replace(/\b\w/g, (c) => c.toUpperCase())}</h1>
                         </div>
                         <div className='flex gap-4'>
                            <h1 className='text-gray-400 font-bold'>Option:</h1>
                            <h1 className='text-green-500'>{odds?.replace(/\b\w/g, (c) => c.toUpperCase())}</h1>
                        </div>
                        <div className='flex gap-6'>
                            <h1 className='text-gray-400 font-bold'>Result:</h1>
                            <div>{
                                predict_db.result === "true"? <PassResultSVG color={Colors.PASS} size={30} /> : predict_db.result === "Ongoing"? <p>Ongoing...</p> :
                                <FailResultSVG color={Colors.PRIMARY} size={30} />
                            }</div>
                        </div>
                        </div >  
                    )})):(
                    <p>No Prediction</p>
                    )}
                </div>
                )})} 
            </section>
  )
}

export default HistoryDataComponent