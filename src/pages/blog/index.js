import React from 'react';
import { Link, graphql } from 'gatsby';
import Seo from '../../components/seo';
import Layout from '../../components/layout';

const Blog = ({data}) => {
    return (
        <Layout pageTitle="My Blog">
            {
                data.allMdx.nodes.map(node => (
                <article key={node.id}>
                    <h3>
                        <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                    </h3>
                    <p>Posted on: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                </article>
                ))
            }
        </Layout>
    );
}

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`
 
export const Head = () => <Seo title="Blog" />

export default Blog;