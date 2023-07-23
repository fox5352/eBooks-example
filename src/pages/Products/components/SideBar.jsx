import React from 'react'

import { useFilter } from "../../../stateManagement";


export const SideBar = ({setBtnState, state}) => {
    const { setRating,  toggleSort, toggleInStock, toggleBestSeller, clearFilter,
            onlyInStock, onlyBestSeller, sortBy, rating } = useFilter()

    const sideBar = document.getElementById('sideBar')
    if (sideBar) {
        if (state && sideBar) {
            sideBar.classList.remove('scale-0','-translate-x-[200px]')
            sideBar.classList.add('scale-100','-translate-x-[0px]')
        }else{
            sideBar.classList.remove('scale-100','-translate-x-[0px]')
            sideBar.classList.add('scale-0','-translate-x-[200px]')
        }
    }

    const buttonHandler = () => {
        clearFilter()
    }

    return (
        <aside id='sideBar'  class="fixed top-16 left-0 scale-0 -translate-x-[200px] z-40 w-64 rounded-r-lg border-l-0 border-2 bg-white border-rose-500 dark:bg-zinc-700 dark:text-white transition-all duration-500" >
            <div class="overflow-y-auto py-5 px-3 h-full rounded-r-lg dark:bg-zinc-700 dark:text-white">
                <div className='flex justify-between mb-4 text-lg font-semibold dark:text-white'>
                    <h2 className=''>FILTERS </h2>
                    <i className='cursor-pointer bi bi-x' onClick={()=>setBtnState(false)}></i>
                </div>

                <div className='dark:text-white'>
                    <h2>Sort - By</h2>
                    <ul class="mb-2">
                        <CheckListItem state={sortBy} func={toggleSort} label='Low - High' type='radio' name='sort' value="low" />
                        <CheckListItem state={sortBy} func={toggleSort} label='High - Low' type='radio' name='sort' value="high" />
                    </ul>
                </div>

                {/*  */}
                <h2>Rating</h2>
                <ul class="mb-1">
                    <CheckListItem state={rating} func={setRating} label='5 Stars & above' type='radio' name='rating' value='5' />
                    <CheckListItem state={rating} func={setRating} label='4 Stars & above' type='radio' name='rating' value='4' />
                    <CheckListItem state={rating} func={setRating} label='3 Stars & above' type='radio' name='rating' value='3' />
                    <CheckListItem state={rating} func={setRating} label='2 Stars & above' type='radio' name='rating' value='2' />
                    <CheckListItem state={rating} func={setRating} label='1 Stars & above' type='radio' name='rating' value='1' />
                </ul>


                {/*  */}
                <h2>Other - filter</h2>
                <ul class="mb-1">
                    <CheckListItem state={onlyBestSeller} func={toggleBestSeller} label='Best Seller' type='checkbox' name='bestSeller' value='true' />
                    <CheckListItem state={onlyInStock} func={toggleInStock} label='In Stock' type='checkbox' name='inStock' value='true' />
                </ul>

                <div className='flex justify-center'>
                    <button className='py-1 px-1.5 my-4 rounded-md border-[1px] border-neutral-400 hover:bg-neutral-50' onClick={buttonHandler}>Clear Filter</button>
                </div>
            </div>
        </aside>
    )
}


const CheckListItem  = ({type, name, label, value, func, state}) => {

    return(
        <li className='class="flex px-2 w-full mr-2 text-base font-normal text-gray-900 rounded-lg dark:text-white'>
            <input className='p-0 mr-1' type={type} name={name} value={value} checked={String(value) === String(state)} onChange={()=>func(value)}/>
            <label className='p-0 m-0'>{label}</label>
        </li>
    )
}