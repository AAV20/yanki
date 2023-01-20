import React from 'react'
import img1 from './Yanki1.png'
import img2 from './Yanki2.png'
import img3 from './Yanki3.png'
import style from './main.module.css'



export default function HomeImg() {
  return (
    <div className={style.imgBlock}>
        <img src={img1} alt='img1'/>
        <img src={img2} alt='img2'/>
        <img src={img3} alt='img2'/>
    </div>
  )
}
