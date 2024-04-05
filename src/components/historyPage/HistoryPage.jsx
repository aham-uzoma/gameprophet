import React from 'react'
import PredictTable from '../predictTable/PredictTable'

const HistoryPage = () => {
    const footballPhoto = 'https://cdn.pixabay.com/photo/2021/08/22/20/27/corner-ball-6566084_960_720.jpg'
    return (
        <body className=' bg-amber-50 font-sen'>
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
                            {/* shadow-2xl */}
                            <table className='bg-white border-collapse shadow-2xl text-left w-98vw' style={{ width: '60vw' }}>
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
                    </div>

                    
                </div>

                <div className='flex justify-between align-top ' style={{ width: '87vw', height: '50vh' }}>
                    {/* bg-lime-500 */}
                    <div className='flex justify-between h-20  items-center'>
                        <div className='w-80 h-14 bg-red-600 ml-8 rounded-l-full flex justify-center items-center'>
                            <h1 className='text-xl font-bold text-white'>May 22th 2024</h1>
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
                            {/* shadow-2xl */}
                            <table className='bg-white border-collapse shadow-2xl text-left w-98vw' style={{ width: '60vw' }}>
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
                    </div>

                    
                </div>


                <div className='flex justify-between align-top ' style={{ width: '87vw', height: '50vh' }}>
                    {/* bg-lime-500 */}
                    <div className='flex justify-between h-20  items-center'>
                        <div className='w-80 h-14 bg-red-600 ml-8 rounded-l-full flex justify-center items-center'>
                            <h1 className='text-xl font-bold text-white'>July 12th 2024</h1>
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
                            {/* shadow-2xl */}
                            <table className='bg-white border-collapse shadow-2xl text-left w-98vw' style={{ width: '60vw' }}>
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
                    </div>

                    
                </div>


            </section>
        </body>
    )
}

export default HistoryPage