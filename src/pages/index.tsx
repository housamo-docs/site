import * as React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';

export const query = graphql`
  query Test {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default (({ data }) => (
  <Container>
    <h1>[Testing] Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>About {data.site.siteMetadata.title}</p>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <pre>
      <code>Hello World</code>
    </pre>
  </Container>
)) as React.SFC<any>;
