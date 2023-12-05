import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { getProducts } from '../../../hooks';
import { Card } from '../../../components/Card';
import { Loading } from '../../../components/Loading';

export const FeaturedProducts = () => {
  const [response, setResponse] = useState([]);

  const getList = useCallback(() => {
    getProducts('featuredProducts')
      .then(res => setResponse(res));
  }, []);

  /* eslint-disable */
  useEffect(() => {
    getList();
  }, []);
  /* eslint-enable */

  const mapper = (props) => {
    return (
      <Card key={props.id} id={props.id} title={props.title} detail={props.detail} rating={props.rating} price={props.price} best_seller={props.best_seller} in_stock={props.in_stock} />
    );
  };

  return (
    <div className='space-y-4 text-center pb-6 mb-10 rounded-xl shadow-xl dark:shadow-slate-500'>
      <h2 className='text-xl underline underline-offset-4 py-2'>FeaturedProducts</h2>
      <div className='flex flex-wrap justify-evenly px-4'>
        <Suspense fallback={<Loading />}>
          {response.length > 0 && response.map(mapper)}
        </Suspense>
      </div>
    </div>
  );
};
