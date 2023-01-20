import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './catalog.module.css'


export default function Catalogpage() {
  return (
    <div className={style.catalogheader}>
      <div className={style.cataloglink}>
        <h4>
          <NavLink className={style.cataloghead} to='/'>
              Главная
          </NavLink>
        </h4>
        <span className={style.sp}>{'>'}</span>
        <h4>
          <NavLink className={style.cattwohead} to='/catalog'>
              Каталог
          </NavLink>
        </h4>
      </div>
      <div className={style.cataloglist}>
        <div>
          <h3 className={style.anothercat}>Каталог</h3>
        </div>
       <div className={style.selectblock}>
        <select className={style.selectoption} name="" id="">
            <option value="">Размер</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
          </select>
          <select className={style.selectoption} name="" id="">
            <option value="">Цвет</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <select className={style.selectoption} name="" id="">
            <option value="">Цена</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <select className={style.selectoption} name="" id="">
            <option value="">Сортировать по</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
       </div>
      </div>
      
    </div>
  )
}
