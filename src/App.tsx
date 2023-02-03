
import {ThemeProvider, Box} from '@mui/system';
import { Header } from './components/UI/Header';
import { Layout } from './components/UI/Layout';
import { appTheme } from './config/theme';


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
      <Layout>Hello</Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
