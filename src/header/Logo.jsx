import React from 'react'
import { useLocation } from 'react-router-dom'
import style from './header.module.css'
import logo from './YANKI.png'
import logo2 from './yanki2.png'

export default function Logo() {
  const {pathname}= useLocation()
  return (
    <>
        {pathname === '/'? <img src={logo2} className={style.logo} alt='img'/>: <img src={logo} className={style.logo} alt='img'/>}
    
    </>
    
  )
}
