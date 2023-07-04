import React from 'react'
import HeroCarouselItem from './HeroCarouselItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as styles from './HeroCarousel.module.scss';

export default function HeroCarousel(props) {
    const { data } = props;

    return (
        <Swiper
            className={styles['carousel']}
            modules={[Navigation, Pagination, Autoplay, A11y]}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            autoplay={{
                delay: 5000,
            }}
            loop={true}
            speed={500}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={item.id}>
                        <HeroCarouselItem data={item.frontmatter} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}