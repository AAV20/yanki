import React from 'react'
import style from './newStyle.module.css'

export default function New() {
  return (
    <div className={style.newblock}>
        <h2 className={style.logo3}>Узнайте  первым о новинках</h2>
            <input className={style.inp} type="email" placeholder='Ваш e-mail'/>
        
            <button className={style.subscribe}>ПОДПИСАТЬСЯ</button>
      
        <span className={style.subtext}>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.
</span>
    </div>
  )
}
