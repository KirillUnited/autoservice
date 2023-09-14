import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import HeroCarousel from './HeroCarousel';

const query = graphql`
query HeroQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/hero)/"}}) {
        nodes {
          frontmatter {
            ...SectionFrontmatterFragment
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