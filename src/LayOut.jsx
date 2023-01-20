import React from 'react'
import Header from './header'
import {Outlet} from 'react-router-dom'
import Footer from './footer'
export default function LayOut() {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}
