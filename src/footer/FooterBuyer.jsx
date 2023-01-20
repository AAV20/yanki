import React, { useState, useEffect } from "react";
import { FooterDiv, Footerh2 } from '../MainTags';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import style from './footer.module.css';


export default function FooterBuyer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);

  return (
    <FooterDiv>
      <Footerh2>
        ПОКУПАТЕЛЮ
        {windowWidth <= 750 && (
          <span onClick={() => setDisplay(!display)}  className={style.spaniolo}>
            <KeyboardArrowDownIcon />
          </span>
        )}
      </Footerh2>
      {(display || windowWidth >= 750) && (
        <ul>
          <li>
            <Link to='/NotFound'>Избранное</Link>
          </li>
          <li>
            <Link to='/NotFound'>Публичная оферта</Link>
          </li>
          <li>
            <Link to='/NotFound'>Политика конфиденциальности</Link>
          </li>
        </ul>
      )}
    </FooterDiv>
  );
}
