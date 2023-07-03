import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { getCustomCSSProp } from "../../utils/getCustomCSSProp";
import HeroCarouselItem from './HeroCarouselItem';

export default function HeroCarousel(props) {
    const { data } = props;

    return (
        <Carousel
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
                style: {
                    backgroundColor: getCustomCSSProp('--color-primary'),
                    opacity: 0.8
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    color: getCustomCSSProp('--color-primary')
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: getCustomCSSProp('--color-secondary')
                }
            }}
            sx={{
                overflow: 'visible'
            }}>


            {data.map((item, index) => {
                return (
                    <HeroCarouselItem key={item.id} data={item.frontmatter} />
                )
            })}
        </Carousel>
    )
}