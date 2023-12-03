import React from 'react'
import './HomePage.css'
import { Nav, Banner, Carrusel, FeaturedProjects, Footer } from '../../components'

export function HomePage () {
  const slides = [
    './src/images/JhohanNBG.jpg',
    './src/images/KarolNBG.jpg',
    './portafolio-web/src/images/AlexNBG.jpg'
  ]

  return (
    <>
      <section>
        <Nav />
        <Banner className='h-screen' />
        <div className='h-[10px] w-full bg-amber-500' />
        <div className='w-[100%] m-0'>
          <Carrusel slides={slides} />
        </div>
        <div className='h-[10px] w-full bg-amber-500' />
        <FeaturedProjects />
      </section>
      <Footer />
    </>
  )
}
