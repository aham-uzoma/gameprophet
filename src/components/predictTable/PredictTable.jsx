import React from 'react'

const PredictTable = () => {
  return (
    <section>
        <div className='grid justify-center mx-8 my-8 w-screen'>
        <table className='bg-white border-collapse shadow-2xl text-left w-98vw'style={{width:'75vw'}}>
        <thead>
            <tr className='bg-red-600 '>
                <th className='p-7 uppercase text-xl text-white	 tracking-widest'>Game</th> 
                <th className='p-7 uppercase text-xl text-white	 tracking-widest'>Odds</th>
                <th className='p-7 uppercase text-xl text-white	tracking-widest'>Result</th>
                <th className='p-7 uppercase text-xl text-white	 tracking-widest'>Other</th>
                <th className='p-7 uppercase text-xl text-white	tracking-widest'>Scales</th>
            </tr>
        </thead>
        <tbody>
            <tr className="even:bg-red-100">
                <td className='p-4'>RealMadrid Vs Manchester</td>
                <td className='p-4'>over 3.5</td>
                <td className='p-4'>Pass</td>
                <td className='p-4'>NILL</td>
                <td className='p-4'>Stonch NILL</td>            
            </tr>
            <tr className="even:bg-red-100">
                <td className='p-4'>Barcelonia Vs Manchester</td>
                <td className='p-4'>First Half to score</td>
                <td className='p-4'>Fail</td>
                <td className='p-4'>NILL</td>
                <td className='p-4'>Stonch NILL</td>            
            </tr>
            <tr className="even:bg-red-100">
                <td className='p-4'>Chelsea Vs RealMadrid</td>
                <td className='p-4'>over 2.5</td>
                <td className='p-4'>Pass</td>
                <td className='p-4'>NILL</td>
                <td className='p-4'>Stonch NILL</td>            
            </tr>
            <tr className="even:bg-red-100">
                <td className='p-4'>Athlentico Madrid Vs Manchester</td>
                <td className='p-4'>first half to score</td>
                <td className='p-4'>Pass</td>
                <td className='p-4'>NILL</td>
                <td className='p-4'>Stonch NILL</td>            
            </tr>
            <tr className="even:bg-red-100">
                <td className='p-4'>Chelsea Vs Bacelonia</td>
                <td className='p-4'>Draw</td>
                <td className='p-4'>Pass</td>
                <td className='p-4'>NILL</td>
                <td className='p-4'>Stonch NILL</td>            
            </tr>
        </tbody>
        </table>
        </div>
        </section>
  )
}

export default PredictTable