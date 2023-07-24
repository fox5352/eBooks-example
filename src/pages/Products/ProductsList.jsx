import React, { useCallback, useEffect } from 'react'

import { useLocation } from "react-router-dom";

import { getProducts, useTitle } from "../../hooks";
import { Footer,Card } from '../../components/'
import { useFilter } from "../../stateManagement";  
import { ProductsHeader } from './components/ProductsHeader'

export const ProductsList = () => {
  const { list, initialProducts } = useFilter()
  useTitle("Products")
  
  //gets search query and does a fetch request then adds the response to the global state
  const query = useLocation().search
  const getList = useCallback(()=>{
    getProducts(`products${query}`)
    .then(res=>initialProducts([].concat(res)))
  },[initialProducts, query])

  /* eslint-disable */
  useEffect(()=>{
    getList()
  },[])
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
