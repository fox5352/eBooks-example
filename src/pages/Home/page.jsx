import React from 'react'
import { Footer } from '../../components/Footer'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts' // 
import { FQA } from './components/FQA'
import { useTitle } from "../../hooks";

export const HomePage = () => {
  useTitle("Home")

  return (
    <>
      <main>
        <Hero />
        <FeaturedProducts />
        <FQA />
      </main>
      <Footer />
    </>
  )
}
