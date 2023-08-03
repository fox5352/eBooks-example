import React from 'react';

import svg from '../assets/gear-wide.svg';

export const Loading = () => {
    return (
        <div className={`w-[170px] h-[170px] animate-slow-spin`}>
            <img className='h-full w-full' src={svg} alt='loading wheel' />
        </div>
    );
};
