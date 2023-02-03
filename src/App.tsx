
import { Typography } from '@mui/material';
import {ThemeProvider, Box} from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/UI/Header';
import { Layout } from './components/UI/Layout';
import { appTheme } from './config/theme';
import CategoryCreate from './features/categories/create';
import CategoryEdit from './features/categories/edit';
import CategoryList from './features/categories/index';


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box 
        component="main" 
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900]
        }}
      >
      <Header/>
      <Layout>
        <Routes>
          <Route path='/' element={<CategoryList/>} />
          <Route path='/categories' element={<CategoryList/>} />
          <Route path='/categories/create' element={<CategoryCreate/>} />
          <Route path='/categories/edit/:id' element={<CategoryEdit/>} />
          <Route path='*' element={
            <Box sx={{color: "white"}}>
              <Typography variant='h1'>404</Typography>
              <Typography variant='h2'>Page not found</Typography>
            </Box>
          } />
        </Routes>
      </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
