import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './header.module.css'
import { useLocation } from 'react-router-dom';


export default function Icon() {
  const {pathname}= useLocation()
  return (
   
    <div className={style.iconsblock}>
      <SearchIcon className={` ${pathname === '/' && `${style.icons} ${style.none}`} ${pathname!== '/' && `${style.iconsTwo} ${style.none}`}`}/>
      <PersonIcon className={` ${pathname === '/' && `${style.icons} ${style.none}`} ${pathname!== '/' && `${style.iconsTwo} ${style.none}`}`}/>
      <FavoriteIcon className={`${pathname === '/' && `${style.icons}`} ${pathname!== '/' && `${style.iconsTwo}`}`}/>
      <ShoppingCartIcon className={`${pathname === '/' && `${style.icons}`} ${pathname!== '/' && `${style.iconsTwo}`}`}/>
    </div>
  )
}