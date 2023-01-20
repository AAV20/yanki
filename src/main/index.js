import React from 'react'
import Index from './home/section1'
import Colection from './home/section2'
import Newindex from './home/section2/section3'




export default function Parent() {
  return (
    <div>
        <Index/>
        <Colection/>
        <Newindex/>
    </div>
  )
}