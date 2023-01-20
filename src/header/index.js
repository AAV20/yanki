import React,{useEffect,useRef} from 'react'
import './head.css'
import NavBar from './NavBar';
import Logo from './Logo';
import Icon from './Icons';
import style from'./header.module.css'
import { useLocation } from 'react-router-dom';
import { Section } from '../MainTags';


export default function Header() {
  const location = useLocation()
  const elem = useRef();
  function getScroll() {
    if (window.scrollY > 70) {
      elem.current.classList.add('close-menu')
  
    } else {
      elem.current.classList.remove('close-menu')
    }
  
  }
    useEffect(() => {
      window.addEventListener("scroll", getScroll)
      return () => {
        window.removeEventListener('scroll',getScroll)
      }
    },[]);
  return (
    <header className= {location.pathname === '/'? style['headerCont']: style.headerCont1}>
        <div className={style.headBlock}>
          <Section className={style.headers} ref={elem}>
            <NavBar/>
            <Logo/>
            <Icon/>
          </Section>
          
        </div>
    </header>
  )
}
