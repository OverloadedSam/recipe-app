import { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { themeOptions } from './theme';

const App = () => {
  const theme = useMemo(() => createTheme(themeOptions), [themeOptions]);

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Typography variant='h2'>Recipe App</Typography>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
