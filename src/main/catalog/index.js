import  style  from './catalog.module.css'
import React from 'react'
import CatalogCategori from './CatalogCategori'
import CatalogImage from './CatalogImage'
import Catalogpage from './Catalogpage'


export default function Catalogindex() {
  return (
    <div>
        <section  className={style.flexbox}>
        <Catalogpage/>
        <div className={style.imagebox}>
          <CatalogCategori/>
          <CatalogImage/>
        </div>
          
          
       
        </section>
    </div>
  )
}
