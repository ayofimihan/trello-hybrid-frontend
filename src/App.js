import React from 'react';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
