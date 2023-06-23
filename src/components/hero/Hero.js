import { Button, Card } from '@mui/material'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { getCustomCSSProp } from "../../utils/getCustomCSSProp";
import { graphql, useStaticQuery } from 'gatsby';

export default function Hero() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
            nodes {
              frontmatter {
                description
                subtitle
                title
                img {
                  alt
                  file {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            layout: FULL_WIDTH
                          )
                    }
                  }
                }
              }
              html
            }
          }
      }
    `);
    const { nodes = [] } = data?.allMarkdownRemark || {};

    return (
        <section className='py-4'>
            <div className='container'>
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


                    {nodes.map((item, index) => {
                        const { img = {}, title = "", subtitle = "", description = "" } = item.frontmatter;

                        return (
                            <Card key={index} elevation={2} className='relative grid place-items-center min-h-[450px]'>
                                <GatsbyImage
                                    className='absolute w-full h-full top-0 left-0 after:absolute after:inset-0 after:bg-transparent after:bg-gradient-to-tr after:from-black'
                                    image={getImage(img.file)}
                                    alt={img.alt}
                                />
                                <div className='relative w-full max-w-[75%] flex flex-col gap-3 text-white py-4 overflow-hidden'>
                                    <h2 className='text-4xl uppercase font-semibold truncate'>{title}</h2>
                                    {subtitle && <p className='text-[42px] truncate'>{subtitle}</p>}
                                    {description && <p className='mb-7 line-clamp-3'>{description}</p>}
                                    <Button href='#' className='btn-primary mt-7 self-start hover:text-white' size='large'>Узнать больше</Button>
                                </div>
                            </Card>
                        )
                    })}
                </Carousel>
            </div>
        </section>
    )
}