import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Format({children}) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}
