import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import NotFound from '../NotFound';


export default function WearsItem() {
  const {name,id} = useParams()
  console.log(name,id);
  const  [trench,setTrench] = useState({})
  const [error,setError] = useState('')
  useEffect(()=>{
   fetch(`http://localhost:3003/${name}/${id}`)
   .then(response=>{ 
       if(response.ok){
    return response.json()
  }else{
    return Promise.reject('sxal')
  }
})
   .then(clots => setTrench(clots))
   .catch(err=>setError(err))
  },[name,id])
   return (
     <div>
      {error ? <div><NotFound/></div>:
       (
         <div key={trench.id}>
          <img src={trench.image} alt=""/>
           <h2>{trench.title}</h2>
           </div>
       )}
     </div>
   )
}