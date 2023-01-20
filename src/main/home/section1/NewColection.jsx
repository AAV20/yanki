import React from 'react'
import style from './main.module.css'


export default function NewColection() {
  return (
    <div className={style.newCol}>
        <h2 className={style.logo2}>Новая коллекция</h2>
        <a className={style.see} href="*">Смотреть Новинки</a>
    </div>
  )
}
