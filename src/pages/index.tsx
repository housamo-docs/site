import * as React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import Button from '@material-ui/core/Button';

export const query = graphql`
  query Test {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Index: React.SFC<{ data: any }> = ({ data }) => {
  return (
    <Container>
      <p>About {data.site.siteMetadata.title}</p>
      <p>
        What do I like to do?Lots of course but definitely enjoy building
        {`a${data}`}
        websites.
      </p>
      <pre>
        <code>Hello World</code>
      </pre>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
};

export default Index;
