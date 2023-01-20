import React from 'react';
import  {Section}  from '../MainTags';
import style from './footer.module.css';
import FooterCompany from './FooterCompany';
import FooterBuyer from './FooterBuyer';
import FooterUseful from './FooterUseful';
import FooterContacts from './FooterContacts';


export default function Footer() {
  return (
    <div>
      <Section className={style.footer}>
        <FooterCompany/>
        <FooterBuyer/>
        <FooterUseful/>
        <FooterContacts/>
      </Section> 
    </div>
  )
}

