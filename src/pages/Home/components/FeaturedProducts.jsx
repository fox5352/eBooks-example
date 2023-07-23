import React from 'react'
import { useFetch } from '../../../hooks'
import { Card } from '../../../components/Card' 

export const FeaturedProducts = () => {
  const response = useFetch('featuredProducts')
  
  const mapper = (props) => {
    return(
      <Card key={props.id} id={props.id} title={props.title} detail={props.detail} rating={props.rating} price={props.price} best_seller={props.best_seller} in_stock={props.in_stock} />
    )
}

  return (
    <div className='space-y-4 text-center pb-6 mb-10 rounded-xl shadow-xl dark:shadow-slate-500'>
        <h2 className='text-xl underline underline-offset-4 py-2'>FeaturedProducts</h2>
        <div className='flex flex-wrap justify-between px-4'>
            {response && response.map(mapper)}
            {/* <Card key={test.id+2} id={test.id} title={test.title} detail={test.detail} rating={5} price={test.price} /> */}
        </div>
    </div>
  )
}
