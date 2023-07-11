import React from 'react'

export default function HeaderCarouselItem({ data }) {
    const { logo = "", link = "" } = data;
console.log(logo)
    return (
        <a href={link} className='relative block h-full'>
            <div className='bg-contain bg-no-repeat bg-center h-full hover:scale-125 transition-all' style={{ backgroundImage: `url(${logo})` }} />
        </a>
    )
}
