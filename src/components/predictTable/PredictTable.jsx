import React, { useContext } from 'react'
import PredictionDataContext from '../../context/ContextProvider'

const PredictTable = () => {
    const { userPredictions } = useContext(PredictionDataContext)


    {userPredictions.map((predict_db, index) => {
        const { game, odds } = predict_db
        const rowColor = index % 2 === 0 ? 'bg-red-100' : ''
        return predict_db.vip === "true" ? (<tbody key={index}>
            <tr className={rowColor}>
                <td className='p-4'>{game?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                <td className='p-4'>{odds?.replace(/\b\w/g, (c) => c.toUpperCase())}</td>
                <td className='p-4'>Ongoing..</td>
            </tr>
        </tbody>
        ): null
    })}

  return (
    <div>
        <div className='grid justify-center mx-8 my-8 w-screen font-sen'>
        <table className='bg-white border-collapse shadow-2xl text-left w-98vw'style={{width:'75vw'}}>
        <thead>
            <tr className='bg-red-600 '>
                <th className='p-7 uppercase text-xl text-white	 tracking-widest'>MATCHES</th> 
                <th className='p-7 uppercase text-xl text-white	 tracking-widest'>OPTIONS</th>
                <th className='p-7 uppercase text-xl text-white	tracking-widest'>RESULT</th>
                {/* <th className='p-7 uppercase text-xl text-white	 tracking-widest'>Other</th>
                <th className='p-7 uppercase text-xl text-white	tracking-widest'>Scales</th> */}
            </tr>
        </thead>
        {userPredictions.map((predict_db, index) => {
                    const { game, odds } = predict_db
                    const rowColor = index % 2 === 0 ? 'bg-red-100' : ''
                    return predict_db.regular === "true" && predict_db.result === "Ongoing" ? (<tbody key={index}>
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
        </div>
  )
}

export default PredictTable