import { Box } from '@mui/material';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import DataProvider from './Context/dataProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from './Components/DetailPage/DetailView';
import Cart from './Components/Cart/Cart';



function App() {
  return (

    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route  path='/cart' element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>


  );
}

export default App;
