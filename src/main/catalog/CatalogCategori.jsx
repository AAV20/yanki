import  style  from './catalog.module.css'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom' 

export default function CatalogCategori() {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('https://retoolapi.dev/5wtipM/categories')
        .then(response=>response.json())
        .then(categories=>setCategories(categories))
    },[])
  return (
    <div className={style.linkblock}>
        {categories.length && categories.map((itam)=>(
            <div key={itam.id}>
                <Link className={style.links} to={`${itam.name}`}>{itam.categories}</Link>
            </div>
        ))}
    </div>
  )
}
