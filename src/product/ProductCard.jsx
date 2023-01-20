import React,{useEffect,useState} from 'react'
import style from './product.module.css'

export default function ProductCard() {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://retoolapi.dev/fe9Tmx/imagedata')
        .then(respons=>respons.json())
        .then(clots=>setProduct(clots))

    },[])
  return (
    <div className={style.prodimagebox}>
        {product.length && product.map((itam)=>(
            <div key={itam.id}>
                <img src={itam.img} alt='img'/>
            </div>
        ))}

    </div>
  )
}
