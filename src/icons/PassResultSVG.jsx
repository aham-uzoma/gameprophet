import React from 'react'

function PassResultSVG({ color, size }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
                stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

export default PassResultSVG