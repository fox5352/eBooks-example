import React, { useCallback, useEffect } from 'react'

import { useLocation } from "react-router-dom";

import { getProducts, useTitle } from "../../hooks";
import { Footer,Card } from '../../components/'
import { useFilter } from "../../stateManagement";  
import { ProductsHeader } from './components/ProductsHeader'

export const ProductsList = () => {
  const { list, initialProducts } = useFilter()
  const query = useLocation().search
  useTitle("Products")
  
  //gets search query and does a fetch request then adds the response to the global state
  const getList = async ()=>{
    try {
      const response = await getProducts(`products${query}`)
      initialProducts([].concat(response))
    } catch (error) {
      // make error toast
      console.log(error);
    }
  }

  /* eslint-disable */
  useEffect(()=>{
    getList()
  },[query])
  /* eslint-enable */

  
  const mapper = (props) => {
      return(
        <Card key={props.id} id={props.id} title={props.title} detail={props.detail} rating={props.rating} price={props.price} best_seller={props.best_seller} in_stock={props.in_stock} />
      )
  }

  return (
    <>
        <main>  
            <ProductsHeader listLen={list.length} />
            <div className='flex flex-wrap justify-evenly'>
              {list.length > 0 && list.map(mapper)}
            </div>
        </main>
        <Footer />
    </>
  )
}
