import React from 'react'


const ListBlock = () => {


    return(
        <ul class="space-y-2">
            <li className='class="flex items-center p-2 pl-11 w-full mr-2 text-base font-normal text-gray-900 rounded-lg'>
                <input type='checkbox'/>
                <label>low - high</label>
            </li>
        </ul>
    )
}

export const SideBar = () => {
  return (
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
        <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:text-white dark:bg-stone-500">
            <ListBlock />
        </div>
    </aside>
  )
}
