import React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Blog = ({data}) => {
    return (
        <Layout pageTitle="My Blog">
            <ul>{
                data.allFile.nodes.map(node => (
                <li key={node.name}>
                    {node.name}
                </li>
                ))
            }
            </ul>
        </Layout>
    );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
 
export const Head = () => <Seo title="Blog" />

export default Blog;