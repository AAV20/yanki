import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import NotFound from '../NotFound'
import style from './catalog.module.css'

export default function Wears() {
  const {name} = useParams()
  const  [trench,setTrench] = useState([])
  const [error,setError] = useState('')
  useEffect(()=>{
   fetch(`http://localhost:3003/${name}`)
   .then(response=>{
    if(response.ok){
      return response.json()
    }else{
      return Promise.reject('sxal')
    }
  })
   .then(clots => setTrench(clots))
   .catch(err=>setError(err))
  },[name])
   return (
     <div className={style.wearsheader}>
       {error ? <div><NotFound/></div>:
       trench.length && trench.map((item)=>(
         <div key={item.id}>
           <Link to={`${item.id}`}><img src={item.image} alt=""/></Link>
           <h2>{item.title}</h2>
           </div>
       ))}
     </div>
   )
}
