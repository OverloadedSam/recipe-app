import { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { themeOptions } from './theme';
import RequireAuth from './common/RequireAuth';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Logout from './common/Logout';
import Recipes from './screens/Recipes';
import RecipeDetails from './screens/RecipeDetails';
import Footer from './components/Footer';

const App = () => {
  const theme = useMemo(() => createTheme(themeOptions), [themeOptions]);

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route
              path='/recipe/:id'
              element={
                <RequireAuth>
                  <RecipeDetails />
                </RequireAuth>
              }
            />
            <Route
              path='/recipes'
              element={
                <RequireAuth>
                  <Recipes />
                </RequireAuth>
              }
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
