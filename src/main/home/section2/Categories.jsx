import React from 'react'
import image1 from './Rectangle 7.png'
import image2 from './Rectangle 8.png'
import image3 from './Rectangle 9.png'
import image4 from './Rectangle 10.png'
import style from './categ.module.css'



export default function Categories() {
  return (
    <div  className={style.flexBlock}>
        <h2 className={style.textCategori}>Категории</h2>
        <div className={style.imageGalery}>
            <div>
              <img className={style.girl} src={image1} alt='girls'/>
              <p className={style.coat}>Куртки</p>
            </div>
            <div>
              <img className={style.girl} src={image2} alt='girls'/>
              <p className={style.coat}>Пальто</p>
            </div>
            <div>
              <img className={style.girl} src={image3} alt='girls'/>
              <p className={style.coat}>Шубы</p>
            </div>

            <div>
              <img className={style.girl} src={image4} alt='girls'/>
              <p className={style.coat}>Парки</p>
            </div>

        </div>
    </div>
  )
}
