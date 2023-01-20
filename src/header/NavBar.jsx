import React from 'react'
import style from './header.module.css'
import {NavLink, useLocation } from 'react-router-dom';
import burger2 from './burger2.png'
import burger1 from './burger1.png'



export default function NavBar() {
  const {pathname}= useLocation()
  return (
    <div>
    {pathname === "/" ? <img src={burger1} alt="" className={style.burger}/> : <img src={burger2} alt="" className={style.burger}/>}
  
    <ul  className= {`${pathname === '/' && `${style.navlinks}`} ${pathname!== '/' && `${style.listcolor}  ${style.dnone} ${style.navlinks1}`}`}>    

        <li>
          <NavLink className={style.navlinks} to='/'>
            NEW
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navlinks} to='/catalog'>
            КАТАЛОГ
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navlinks} to='/about'>
            О НАС
          </NavLink>
        </li>
    </ul>

    </div>
  )
}
