import React from 'react'

function FailResultSVG({color, size}) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
<path d="M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
</svg>
  )
}

export default FailResultSVG