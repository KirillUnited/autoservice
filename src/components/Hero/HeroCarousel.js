import React from 'react'
import HeroCarouselItem from './HeroCarouselItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import * as styles from './HeroCarousel.module.scss';
import PropTypes from "prop-types";

HeroCarousel.propTypes = {
    data: PropTypes.array
}

export default function HeroCarousel({ data }) {
    return (
        <Swiper
            className={styles['carousel']}
            modules={[Pagination, Autoplay, A11y, EffectFade]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
            }}
            loop={true}
            speed={500}
            effect='fade'
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