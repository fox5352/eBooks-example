import React from 'react'
import { Card } from '../../../components/Card'

export const FeaturedProducts = () => {
    const test = {
        id: 14525,
        title: 'Python for dummies',
        detail: "this course takes you from zero to hero in python programming language learn the power off python and thinking programmatically",
        rating: 4,
        price: 220
    }
  return (
    <div className='space-y-4 text-center pb-6 mb-10 rounded-xl shadow-xl'>
        <h2 className='text-xl underline underline-offset-4 py-2'>FeaturedProducts</h2>
        <div className='flex justify-between px-4'>
            <Card key={test.id} id={test.id} title={test.title} detail={test.detail} rating={5} price={test.price} />
            <Card key={test.id} id={test.id} title={test.title} detail={test.detail} rating={2} price={test.price} />
            <Card key={test.id} id={test.id} title={test.title} detail={test.detail} rating={4} price={test.price} />
        </div>
    </div>
  )
}
