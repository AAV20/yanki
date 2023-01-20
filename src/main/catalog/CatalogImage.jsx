import React,{useEffect,useState} from 'react'
import style from './catalog.module.css'
import image2 from './Vector.png'



export default function CatalogImage() {
    const [catalog,setCatalog]=useState([])
    useEffect(()=>{
        fetch('https://retoolapi.dev/jPAA08/catalogPictures')
        .then(respons=>respons.json())
        .then(clots=>setCatalog(clots))

    },[])
  return (
    <div className={style.gridbox}>
        {catalog.length && catalog.map((itam)=>(
            <div className={style.imaggirls} key={itam.id}>
                
                <img className={style.imggrid} src={itam.img} alt='img'/>
                <div className={style.information}>
                    <div className={style.paramerter}>
                        <h2>{itam.title}</h2>
                        <p>{itam.price}</p>
                        <p>{itam.size}</p>
                    </div>
                    <div className={style.color_parent}>
                    <div className={style.color_white}></div>
                    <div className={style.color_blue}></div>
                    <div className={style.color_yellow}></div>
                    
                </div>
                <div className={style.heartblock}>
                    <img className={style.heart} src={image2} alt='img'/>
                </div>
                </div>
                
                
            </div>
        ))}
        
    </div>
    
  )
}
