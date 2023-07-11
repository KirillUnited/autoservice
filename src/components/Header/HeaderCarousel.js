import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import * as styles from './HeaderCarousel.module.scss';
import HeaderCarouselItem from './HeaderCarouselItem';

export default function HeaderCarousel(props) {
    const { data = [] } = props;

    return (
        <Swiper
            className={styles['carousel']}
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <HeaderCarouselItem data={item} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}