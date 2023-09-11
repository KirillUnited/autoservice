import React from 'react';

export default function HeaderCarouselItem({ data, index }) {
    const { link = "" } = data;

    return (
        <a href={`https://riamotors.by${link}`} className='relative block h-full'>
            <div className='bg-contain bg-no-repeat bg-center h-full hover:scale-125 transition-all' style={{ backgroundImage: `url(https://riamotors.by/wp-content/uploads/2021/04/${index + 1}-150x150.png)` }} />
        </a>
    )
}
