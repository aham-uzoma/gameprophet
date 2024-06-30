import React, { useContext } from 'react'
import AppContext from '../../context/ContextProvider'

const PredictTable2 = () => {

    const { userPredictions } = useContext(AppContext)
    

    return (
        <div>
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
    )
}

export default PredictTable2