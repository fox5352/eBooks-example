import React, { useRef } from 'react'
import { Footer,Card } from '../../components/'
import { ProductsHeader } from './components/ProductsHeader'

export const ProductsList = () => {
  const  list = [
    {
      id: 145251,
      title: 'Python for dummies',
      detail: "this course takes you from zero to hero in python programming language learn the power off python and thinking programmatically",
      rating: 4,
      price: 220
    },{
      id: 14525,
      title: 'Python for dummies',
      detail: "this course takes you from zero to hero in python programming language learn the power off python and thinking programmatically",
      rating: 4,
      price: 220
    },
    {
      id: 1452511,
      title: 'Python for dummies',
      detail: "this course takes you from zero to hero in python programming language learn the power off python and thinking programmatically",
      rating: 4,
      price: 220
    },
    {
      id: 1452521,
      title: 'Python for dummies',
      detail: "this course takes you from zero to hero in python programming language learn the power off python and thinking programmatically",
      rating: 4,
      price: 220
    },
    {
      id: 14525121,
      title: 'Python for dummies',
      detail: "this course takes you from zero to hero in python programming language learn the power off python and thinking programmatically",
      rating: 4,
      price: 220
    },
  ]
  
  const mapper = ({id, title, detail, price}) => {
      return(
        <Card key={id} id={id} title={title} detail={detail} price={price} bestSeller={true} />
      )
    }

  return (
    <>
        <main>
            <ProductsHeader />
            <div className='flex flex-wrap justify-evenly'>
              {list.map(mapper)}
            </div>
        </main>
        <Footer />
    </>
  )
}
