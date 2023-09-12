import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const query = graphql`
query Section2Query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/section2)/"}}) {
      nodes {
        id
        html
        frontmatter {
          desc
          title
        }
      }
    }
  }
`;

export default function Section2({ img }) {
  const data = useStaticQuery(query);
  const { frontmatter, html } = data?.allMarkdownRemark?.nodes[0] || {};

  return (
    <section className="py-10">
      <div className='container flex flex-wrap'>
        <div className='flex-1'>
          <h2 className="text-3xl heading mb-5 text-[#CF2E2E]">{frontmatter.title}</h2>
          <div className='text-sm space-y-4' dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <StaticImage
          className='basis-1/5'
          layout='constrained'
          src="../../assets/images/Sertifikat-RiaMotors-kart-427x600-1.jpg"
          height={600}
          width={427}
          alt="Автосервис РиаМоторс"
        />
      </div>
    </section>
  )
}