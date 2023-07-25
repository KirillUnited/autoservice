import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import HeroCarousel from './HeroCarousel';

const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/hero)/"}}) {
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
            link
          }
          html
          id
        }
      }
  }
`;

export default function HeroSection({ childern }) {
  const data = useStaticQuery(query);
  const { nodes = [] } = data?.allMarkdownRemark || {};

  return (
    <section>
      <div className='container max-w-full px-0'>
        <HeroCarousel data={nodes} />
      </div>
    </section>
  )
}