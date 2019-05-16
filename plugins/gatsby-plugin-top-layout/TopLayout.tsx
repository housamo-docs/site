import * as React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';

const TopLayout: React.SFC<{}> = ({ children }) => (
  <>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
        rel="stylesheet"
      />
    </Helmet>
    <CssBaseline />
    <ThemeProvider theme={theme}>{children as React.ReactChild}</ThemeProvider>
  </>
);

export default TopLayout;
