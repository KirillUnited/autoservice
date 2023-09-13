import { graphql } from "gatsby";

export const SECTION_FRONTMATTER_FRAGMENT = graphql`
    fragment SectionFrontmatterFragment on MarkdownRemarkFrontmatter{
        desc
        title
    }
`;