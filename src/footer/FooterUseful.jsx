import React,{useState,useEffect} from "react";
import { FooterDiv, Footerh2 } from '../MainTags';
import { Link } from 'react-router-dom';
import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown';
import style from './footer.module.css';



export default function FooterUseful() {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    const [display,setDisplay] = useState(false)
    useEffect(() => {
        function getParameters() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize',getParameters)
        return () => window.removeEventListener('resize',getParameters)
    },[])
    return(
        <FooterDiv>
            <Footerh2>
            ПОЛЕЗНОЕ
            {windowWidth <= 750 && (
                <span onClick={() => setDisplay(!display)} className={style.spaniolo}><KeyboardArrowDownIcon /></span>
            )}
            </Footerh2>
           {(display || windowWidth >= 750) && ( <ul>
                <li><Link to="/NotFound">Оплата и доставка</Link></li>
                <li><Link to="/NotFound">Условия возврата</Link></li>
                <li><Link to="/NotFound">Бонусная система</Link></li>
            </ul>)

           }
        </FooterDiv>
    )
}