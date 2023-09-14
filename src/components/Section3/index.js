import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const query = graphql`
query Section3Query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/section3)/"}}) {
      nodes {
        id
        html
        frontmatter {
          ...SectionFrontmatterFragment
          certificates
        }
      }
    }
  }
`;

export default function Section3({ img }) {
  const data = useStaticQuery(query);
  const { frontmatter } = data?.allMarkdownRemark?.nodes[0] || {};

  return (
    <section className="py-10 bg-[#F6F6F6]">
      <div className='container'>
        <h2 className="text-3xl text-center heading mb-5">{frontmatter.title}</h2>
        <div className='grid grid-cols-2 gap-4 mt-10'>
          <div>
            <Swiper
              modules={[Navigation, Autoplay, A11y]}
              navigation={{
                clickable: true
              }}
              autoplay={{
                delay: 5000,
              }}
              loop={true}
              speed={500}
              spaceBetween={20}
              slidesPerView={2}
            >
              {frontmatter.certificates.map((certificate, index) => {
                return (
                  <SwiperSlide
                    key={index}
                  >
                    <a href={certificate}>
                      <img
                        className='object-cover'
                        src={certificate}
                        alt='certificate'
                        decoding="async"
                        loading="lazy"
                      />
                    </a>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className=''>
            <iframe className="max-w-full aspect-video" frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Промо СТО" width="640" height="360" src="https://www.youtube.com/embed/DhrFNrmKVuQ?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Friamotors.by&amp;widgetid=1" id="widget2"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}