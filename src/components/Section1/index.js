import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
query Section1Query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(content/section1)/"}}) {
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

export default function Section1({ childern }) {
    const data = useStaticQuery(query);
    const { frontmatter, html } = data?.allMarkdownRemark?.nodes[0] || {};

    return (
        <section className="container text-center py-10">
            <h1 className="text-4xl heading mb-5">{frontmatter.title}</h1>
            <h3 className="text-lg mb-5">{frontmatter.desc}</h3>
            <div className='text-sm space-y-4' dangerouslySetInnerHTML={{__html: html}}></div>
        </section>
    )
}