import { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import { useFetch } from "../../hooks";
import { Footer,Card } from '../../components/'
import { useFilter } from "../../stateManagement";  
import { ProductsHeader } from './components/ProductsHeader'

export const ProductsList = () => {
  const query = useLocation().search
  const response = useFetch(`products${query}`)
  const { list, initialProducts } = useFilter()
  
  /* eslint-disable */
  useEffect(()=>{
    initialProducts(response)
  },[response])
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
              {list && list.map(mapper)}
            </div>
        </main>
        <Footer />
    </>
  )
}
