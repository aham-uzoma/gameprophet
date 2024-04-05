import React, { useEffect, useState } from 'react'

// import './ImageSlider.css'

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [opacity, setOpacity] = useState(1)

    const playPhotos = [
        "https://cdn.pixabay.com/photo/2016/04/15/20/28/football-1331838_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/07/23/05/50/football-1536335_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/11/07/20/24/cristiano-ronaldo-8373364_1280.jpg" 
    ]

    const handleNextSlide = () =>{
        setOpacity(0.6)

        setTimeout(()=>{
            setCurrentSlide((prevSlide)=>(prevSlide+1) % playPhotos.length)
            setOpacity(1)
        }, 500)

    }


    useEffect(()=>{
        const interval = setInterval(handleNextSlide, 5000)
        return () => clearInterval(interval);
    },[])

  return (
    <>
    <section className= "flex items-center justify-center w-screen bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)), 
        url(${playPhotos[currentSlide]})`, 
        opacity: opacity, 
        transition: 'opacity 1s ease',  
        height: '65vh'  
        }}>
      <h5 className='text-white text-9xl font-bold font-sen' >Project x.</h5>
    </section>
    </>

  )
}

export default ImageSlider