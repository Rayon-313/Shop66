import React, { Children } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function FrontEndLayout({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default FrontEndLayout
