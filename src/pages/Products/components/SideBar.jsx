import React from 'react'


const CheckListItem  = ({type, name, label, ...props}) => {

    // const handleInput = () => {

    // }

    return(
        <li className='class="flex px-2 w-full mr-2 text-base font-normal text-gray-900 rounded-lg dark:text-white'>
            <input className='p-0 mr-1' type={type} name={name} value={name} />
            <label className='p-0 m-0'>{label}</label>
        </li>
    )
}

const SortBy = () => {


    return(
        <div className='dark:text-white'>
            <h2>Sort - By</h2>
            <ul class="mb-2">
                <CheckListItem label='Low - High' type='radio' name='sort' value="low" />
                <CheckListItem label='High - Low' type='radio' name='sort' value="high" />
            </ul>
        </div>
    )
}

const Rating = () => {
    return(
        <>
            <h2>Rating</h2>
            <ul class="mb-1">
                <CheckListItem label='5 Stars & above' type='radio' name='rating' value='5' />
                <CheckListItem label='4 Stars & above' type='radio' name='rating' value='4' />
                <CheckListItem label='3 Stars & above' type='radio' name='rating' value='3' />
                <CheckListItem label='2 Stars & above' type='radio' name='rating' value='2' />
                <CheckListItem label='1 Stars & above' type='radio' name='rating' value='1' />
            </ul>
        </>
    )
}

const Others = () => {
    return(
        <>
          <h2>Other - filter</h2>
            <ul class="mb-1">
                <CheckListItem label='Best Seller' type='checkbox' name='bestSeller' value='true' />
                <CheckListItem label='In Stock' type='checkbox' name='inStock' value='true' />
            </ul>  
        </>
    )
}

export const SideBar = ({setBtnState, state}) => {
    state &&  console.log(document.querySelector('#sideBar').classList);

    if (state) {
        document.getElementById('sideBar').classList.remove('scale-0','-translate-x-[200px]')
        document.getElementById('sideBar').classList.add('scale-100','-translate-x-[0px]')
    }else{
        document.getElementById('sideBar').classList.remove('scale-100','-translate-x-[0px]')
        document.getElementById('sideBar').classList.add('scale-0','-translate-x-[200px]')
    }


    return (
        <aside id='sideBar'  class="fixed top-16 left-0 scale-0 z-40 w-64 rounded-r-lg border-l-0 border-2 bg-white border-rose-500 dark:bg-zinc-700 dark:text-white transition-all duration-500" >
            <div class="overflow-y-auto py-5 px-3 h-full rounded-r-lg dark:bg-zinc-700 dark:text-white">
                <div className='flex justify-between mb-4 text-lg font-semibold dark:text-white'>
                    <h2 className=''>FILTERS </h2>
                    <i className='cursor-pointer bi bi-x' onClick={()=>setBtnState(false)}></i>
                </div>

                <SortBy />
                <Rating />
                <Others />

                <div className='flex justify-center'>
                    <button className='py-1 px-1.5 my-4 rounded-md border-[1px] border-neutral-400 hover:bg-neutral-50'>Clear Filter</button>
                </div>
            </div>
        </aside>
    )
}
