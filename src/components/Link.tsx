import * as React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GastsbyLink } from 'gatsby';

function Link(props: any) {
  return <MuiLink component={GastsbyLink} {...props} />;
}

export default Link;
