import { graphql } from "gatsby";

export const SECTION_FRONTMATTER_FRAGMENT = graphql`
    fragment SectionFrontmatterFragment on MarkdownRemarkFrontmatter{
        description
        title
        subtitle
        img {
          file {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                  )
            }
          }
          alt
        }
    }
`;