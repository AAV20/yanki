import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './contacts.module.css'

export default function Contexp() {
  return (
    <div className={style.contactlink}>
            <h4>
                <NavLink className={style.headlink} to='/'>
                    Главная
                </NavLink>
            </h4>
            <span className={style.spn}>{'>'}</span>
            <h4>
                <NavLink className={style.catlink} to='/catalog'>
                    Каталог
                </NavLink>
            </h4>
        </div>
  )
}
