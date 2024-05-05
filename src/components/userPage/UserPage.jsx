import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'



function UserPage() {

    const [showError, setShowError]=useState('false')
    const onSubmitPredict=(value)=>{
       
       console.log(value)
    }


    return (
        <section >
            <section className='flex flex-col mb-8'>
                <div className='flex w-screen bg-white bg-cover font-sen items-center pl-8' style={{
                    height: '30vh',
                }}>
                    <div className='flex justify-between items-center  p-5' style={{ width: '45vw' }} >
                        <div className='bg-cyan-300 w-44 h-44 rounded-full'>
                            <img src={require('../../assets/images/user.jpg')} alt="userImage"
                                className='rounded-full object-cover w-full h-full' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-red-500 text-4xl mb-4'>Welcome</h1>
                            <div className='flex gap-2' style={{ width: '30vw' }}>
                                <h1 className='text-4xl'>Michael Oguguoa</h1>
                                <h1 className='text-red-500 '>admin</h1>
                            </div>
                            <button className='mt-20 h-16 w-60 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'>Create Prediction</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex bg-amber-50 h-screen justify-center'>
                <Formik
                    initialValues={{ game: '', odds: '' }}
                    validateOnChange={true}
                    validateOnBlur={true}
                    validate={(values) =>{ 
                            const errors= {}
                            if(!values.game){
                                errors.game= 'game is required'
                                setShowError(true)
                                console.log(errors.game)
                            }
                            if(!values.odds){
                               errors.odds = 'odds is required'
                               setShowError(true)
                               console.log(errors.odds)
    
                            }
                                    // If there are errors, prevent form submission
    
                            if(Object.keys(errors).length>0){
                                console.log("errors choke")
                                setShowError(true)
                                return;
                            }
                        }
                    }
                    onSubmit={(values)=>onSubmitPredict(values)
                    }
                >
                    {({handleChange,handleSubmit,handleBlur,values, errors})=>(
                    <Form className='flex flex-col items-center p-4 bg-white w-2/5 h-96 mt-9 rounded-2xl drop-shadow-md'>
                        <Field
                            className='h-14 rounded-2xl border-2 mt-6 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-4'
                            name="game"
                            placeholder="Enter the game" 
                            style={{
                                fontFamily: 'Sen', 
                                fontSize: 20,
                                width:'90%',
                              }}
                        />
                        {console.log(errors)}
                        {showError && <div className='text-red-500 '>{errors.game}</div>}
                        <Field
                            className='h-14 w-96 rounded-2xl mt-6  border-2 p-4 focus:outline-none focus:ring-0 focus:border-red-500 focus:border-4'
                            name="odds"
                            placeholder="Enter the odds"
                            style={{
                                fontFamily: 'Sen', 
                                fontSize: 20,
                                width:'90%',
                              }}
                        />
                      {/* <div className='text-red-500'>this test</div> */}
                        {showError && <div className='text-red-500'>{errors.odds}</div>}
                        {/* <ErrorMessage name="email" component="div" /> */}
                        <button className='mt-20 h-16 w-60 text-xl bg-red-600 hover:bg-[rgba(252,124,124,0.9)] text-white'
                        onClick={handleSubmit} type='submit'>Place Prediction</button>
                    </Form>
                    )}
                </Formik>
            </section>
        </section>
    )
}

export default UserPage