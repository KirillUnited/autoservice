import { Button, Card } from '@mui/material'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function HeroCarouselItem({ data }) {
    const { img = {}, title = "", subtitle = "", description = "", link = "" } = data;

    return (
        <Card elevation={2} className='relative grid place-items-center min-h-[500px]' sx={{ borderRadius: 0 }}>
            <GatsbyImage
                className='absolute w-full h-full top-0 left-0 after:absolute after:inset-0 after:bg-transparent after:bg-gradient-to-tr after:from-black'
                image={getImage(img.file)}
                alt={img.alt}
            />
            <div className='relative w-[75%] max-w-screen-lg flex flex-col gap-3 text-white p-3 overflow-hidden'>
                <h2 className='text-4xl uppercase font-semibold truncate'>{title}</h2>
                {subtitle && <p className='text-[42px] truncate'>{subtitle}</p>}
                {description && <p className='mb-7 line-clamp-3'>{description}</p>}
                {link && <Button href={link} className='btn-primary mt-7 self-start hover:text-white' size='large'>Узнать больше</Button>}
            </div>
        </Card>
    )
}
