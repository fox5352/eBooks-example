import React from "react";

export const DashboardCard = ({order, list}) =>{

    const mapper = (props) => {
      return (
        <li key={props.id} className="flex pr-1.5 my-1.5 h-24 rounded-lg shadow-lg dark:shadow-sm dark:shadow-slate-400 ">
          <img className="h-full max-sm:w-1/2 pr-2 rounded-l-lg" src="/heroImage.png" alt="product" />
          <div className="flex flex-col justify-between sm:py-1.5 overflow-y-auto">
            <h2 className="text-xl first-letter:capitalize">{props.title}</h2>
            <p className="mb-2 text-lg">R{props.price}</p>
          </div>
        </li>
      )
    }

    return(
      <div className="flex flex-col p-2 my-3 rounded-lg border-2 shadow-lg dark:border-slate-400">
        <div className="flex justify-between px-4">
          <p>Order id: {order.id}</p>
          <p>Total :{order.bill}</p>
        </div>

        <ul className='flex flex-col my-4 px-8'>
          {list.map(mapper)}
        </ul>
      </div>
      
    )
  }