import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import * as styles from './HeaderCarousel.module.scss';
import HeaderCarouselItem from './HeaderCarouselItem';

export default function HeaderCarousel(props) {
    const { data = [] } = props;

    return (
        <Swiper
            className={styles['carousel']}
            modules={[Pagination, A11y, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
            }}
            spaceBetween={10}
            speed={500}
            wrapperClass={styles['wrapper']}
            breakpoints={{
                320: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                768: {
                    slidesPerView: 7
                },
                1024: {
                    slidesPerView: 10
                }
            }}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <HeaderCarouselItem data={item} index={index}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}