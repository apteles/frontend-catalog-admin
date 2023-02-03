import { createTheme } from '@mui/material';
import {ThemeProvider, Box} from '@mui/system';
import { Header } from './components/UI/Header';
import { Layout } from './components/UI/Layout';

const theme = createTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box 
        component="main" 
        sx={{
          height: "100vh",
          backgroundColor: "#000"
        }}
      >
      <Header/>
      <Layout>Hello</Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
