import React, { useEffect, useState } from 'react'
// import './ImageSlider.css'

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const images = [
        './assets/images/soccer1.jpg',
        './assets/images/soccer2.jpg',
        './assets/images/soccer3.jpg',
        './assets/images/soccer4.jpg'  
    ]

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentSlide((prevSlide)=>(prevSlide+1)%images.length)
        }, 3000)
        return () => clearInterval(interval);
    },[images.length])

  return (
    <section className='slide-container'>
      
        {/* <div className="slider"> */}
        {/* Add your images here */}
        {/* <div className=" bg-[url('./assets/images/soccer4.jpg')] bg-cover h-screen "></div> */}
        {/* <div className="slide" style={{ backgroundImage: 'url(image2.jpg)' }}></div> */}
        {/* <div className="slide" style={{ backgroundImage: 'url(image3.jpg)' }}></div> */}
      {/* </div> */}

      

      <div className='slider'style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
         {/* sliding images */}
         {images.map((image, index)=>{
            // console.log(`image:${image}`)
            return(
                <div key={index} className={`bg-[url("${image}")] bg-cover h-screen`}></div>
                )})}
        </div>

    </section>
  )
}

export default ImageSlider