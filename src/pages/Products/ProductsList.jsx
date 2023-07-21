import React from 'react'

import { useFetch } from "../../hooks";
import { Footer,Card } from '../../components/'
import { ProductsHeader } from './components/ProductsHeader'

export const ProductsList = () => {
  const { response } = useFetch('products')


  
  const mapper = ({id, title, detail, price, rating, best_seller}) => {
      return(
        <Card key={id} id={id} title={title} detail={detail} rating={rating} price={price} bestSeller={best_seller} />
      )
    }

  return (
    <>
        <main>
            <ProductsHeader listLen={response? response.length: 0} />
            <div className='flex flex-wrap justify-evenly'>
              {response && response.map(mapper)}
            </div>
        </main>
        <Footer />
    </>
  )
}
