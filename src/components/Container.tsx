import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  background-color: aquamarine;
`;

const Container: React.SFC<{}> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Container;
