import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Basket from './Components/Basket/Basket';
import MainPage from './Components/MainPage/MainPage';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='Basket' element={<Basket></Basket>}></Route>
          <Route path='AboutUs' element={<AboutUs></AboutUs>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;