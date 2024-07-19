import React, { useContext } from 'react'
import AppContext from '../../context/ContextProvider'
import loading from '../../assets/images/loading.gif'


const PredictTable2 = () => {

    const {isLoading, userPredictions } = useContext(AppContext)
    
    if (isLoading) {
      return <div className='bg-white w-screen flex mt-10 h-[60vh] items-center justify-center'>
      <img className='h-36 w-44' src={loading} alt='loading Predictions...'/>
      </div>
      }

    return (
        <div>
             <div className='hidden md:grid justify-center mx-8 my-8 w-screen font-sen'>
            <table className='bg-white border-collapse shadow-2xl text-left w-98vw' style={{ width: '60vw' }}>
                <thead>
                    <tr className='bg-red-600 '>
                        <th className='p-7 uppercase text-xl text-white	 tracking-widest'>Matches</th>
                        <th className='p-7 uppercase text-xl text-white	 tracking-widest'>Options</th>
                        <th className='p-7 uppercase text-xl text-white	tracking-widest'>Result</th>
                    </tr>
                </thead>
                {userPredictions.map((predict_db, index) => {
                    const { game, odds } = predict_db
                    const rowColor = index % 2 === 0 ? 'bg-red-100' : ''
                    // predict_db.vip === "true"?
                    return predict_db.vip === "true" && predict_db.result === "Ongoing" ? (<tbody key={index}>
                        <tr className={rowColor}>
                            <td className='p-4'>{game?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                            <td className='p-4'>{odds?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                            <td className='p-4'>Ongoing..</td>
                        </tr>
                    </tbody>
                    ): null
                })}
            </table>
            </div>
            {userPredictions.map((predict_db, index) => {
                    const { game, odds } = predict_db
                    return predict_db.vip === "true" && predict_db.result === "Ongoing" ?(
        <div key={index} className='grid grid-cols-1 gap-4 md:hidden'>
            <div className='flex flex-col bg-white p-4 m-3 mb-0 rounded-lg shadow gap-3'>
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
            <h1 className='text-orange-600'>Ongoing...</h1>
          </div>
          </div>
        </div>
        ): null
        })}
        </div>
    )
}

export default PredictTable2