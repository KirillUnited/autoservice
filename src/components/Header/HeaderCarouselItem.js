import { Link } from 'gatsby';
import React from 'react'

export default function HeaderCarouselItem({ data }) {
    const { logo = "", link = "" } = data;

    return (
        <Link to={link} className='relative block h-full'>
            <div className='bg-contain bg-no-repeat bg-center h-full hover:scale-125 transition-all' style={{ backgroundImage: `url(${logo})` }} />
        </Link>
    )
}
