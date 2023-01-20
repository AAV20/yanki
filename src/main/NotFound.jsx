import { ErrSect } from '../MainTags'
import React from 'react'
import image from './images.png'


export default function NotFound() {
    
  return (
    <ErrSect>
        <img src={image} alt="404" />
    </ErrSect>
  
    
  )
}
