import React from 'react'
import style from './contacts.module.css'
import image from './Vector1.png'
import image2 from './Vector2.png'




export default function Contact() {
  return (
    <div className={style.contactblock}>
        <div className={style.icn}>
            <h3 className={style.social}>В социальных сетях</h3>
            <img src={image} alt=''/>
            <img src={image2} alt=''/>
        </div>
         <div>
            <ul>
                <h3 className={style.social}>По телефону</h3>
                <li className={style.contlinks}>+38(067) 158 82 66</li>
                <li className={style.contlinks}>+38(073) 226 39 81</li>
            </ul>

         </div>
         <div>
            <ul>
                <h3 className={style.social}>По почте</h3>
                <li className={style.contlinks}>example@gmail.com</li>
            </ul>
         </div>
         <div>
            <ul>
                <h3 className={style.social}>Наш офис</h3>
                <li className={style.contlinks}>г. Киев, улица Батумская, 18</li>
            </ul>
         </div>
    </div>
    
  )
}
