import * as React from 'react';
import containerStyles from './container.module.css';

const Container: React.SFC<{}> = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>;
};

export default Container;
