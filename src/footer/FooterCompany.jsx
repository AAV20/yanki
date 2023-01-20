import React,{useEffect,useState} from "react";
import { FooterDiv, Footerh2 } from '../MainTags';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import style from './footer.module.css';



export default function FooterCompany() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
    return(
        <FooterDiv>
            <Footerh2>
            КОМПАНИЯ
            {windowWidth <= 750 && ( 
            <span onClick={() => setDisplay(!display)} className={style.spaniolo}><KeyboardArrowDownIcon /></span>)}
           
            </Footerh2>
            {(display || windowWidth >= 750) && (
                <ul>
                <li><Link to="/">О нас</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
            )}
        </FooterDiv>
    )
}